export async function onRequestPost(context) {
  const { request, env } = context;

  const origin = request.headers.get("Origin") || "";
  const headers = {
    "Access-Control-Allow-Origin": origin,
    "Content-Type": "application/json",
  };

  try {
    const formData = await request.formData();
    const name = formData.get("name")?.trim();
    const business = formData.get("business")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "JausHouse Contact <noreply@mail.jaushouse.com>",
        to: ["brandon@jaushouse.com"],
        reply_to: email,
        subject: `New inquiry from ${name}${business ? ` (${business})` : ""}`,
        text: [
          `Name: ${name}`,
          business ? `Business: ${business}` : null,
          `Email: ${email}`,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to send message. Please try again." }),
        { status: 500, headers }
      );
    }

    return Response.redirect(new URL("/contact/thanks/", request.url), 303);
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers }
    );
  }
}
