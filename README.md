# >JausHouse Consulting

Software consulting website for [jaushouse.com](https://jaushouse.com). Built with [Hugo](https://gohugo.io/), deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

## Tech Stack

- **Static site generator:** [Hugo](https://gohugo.io/)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Contact form:** Cloudflare Pages Function + [Resend](https://resend.com/)
- **Scheduling:** [Cal.com](https://cal.com/)
- **CI/CD:** GitHub Actions

## Development

```sh
hugo server
```

Open [localhost:1313](http://localhost:1313). Hugo watches for file changes and reloads automatically.

To preview draft posts:

```sh
hugo server -D
```

## Deployment

Pushes to `main` trigger an automatic build and deploy via GitHub Actions. A weekly cron job runs every Saturday at 8am ET to publish scheduled posts with future dates.

## Project Structure

```
├── content/
│   ├── about/            # Who We Are page
│   ├── contact/          # Get In Touch page + thank you page
│   ├── how-it-works/     # Process page
│   ├── resources/        # Blog posts (scheduled weekly)
│   └── services/         # How We Help page
├── functions/
│   └── api/contact.js    # Contact form serverless function
├── layouts/
│   ├── _default/         # Base layouts
│   ├── partials/         # Nav, footer, head
│   ├── resources/        # Blog list and single layouts
│   └── tags/             # Tag filter page layout
├── static/
│   ├── css/main.css      # Stylesheet
│   ├── favicon.svg       # Favicon
│   └── images/           # Logo and brand assets
├── .github/workflows/
│   ├── deploy.yml        # Build and deploy on push
│   └── weekly-publish.yml # Saturday morning scheduled rebuild
└── hugo.toml             # Site configuration
```

## Content

50 blog posts across 5 categories, scheduled for weekly Saturday publication throughout 2026:

- **Pain Points** — relatable problems small businesses face
- **How-To Guides** — practical, actionable advice
- **Comparisons** — honest software tool comparisons
- **AI And Automation** — what's real, what's hype
- **Strategy** — higher-level thinking about technology decisions

See [CONTENT.md](CONTENT.md) for the full content plan.

## License

MIT
