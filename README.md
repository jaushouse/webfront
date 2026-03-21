# >Jaus — webfront

Marketing site for [jaushouse.com](https://jaushouse.com). Built with [Hugo](https://gohugo.io/) and deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

## Development

```sh
# Install Hugo: https://gohugo.io/installation/
hugo server
```

Open [localhost:1313](http://localhost:1313).

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds with Hugo and deploys to Cloudflare Pages.

## Project Structure

```
├── content/          # Page content (Markdown)
│   └── blog/         # Blog posts
├── layouts/          # Hugo templates
│   ├── _default/     # Base layouts
│   ├── blog/         # Blog-specific layouts
│   └── partials/     # Reusable template fragments
├── static/           # Static assets (CSS, images, favicon)
└── hugo.toml         # Hugo configuration
```

## License

MIT
