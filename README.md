# Shankar portfolio

A Next.js 14 portfolio for Shankar's freelance writing, social media, digital marketing, and web development work.

## Requirements

- Node.js 18.17 or newer
- npm

## Development

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
npm start
```

## Project structure

```text
app/             App Router layout, page, and global styles
components/      Page sections and interactive UI
lib/content.js   Site details, services, work samples, FAQs, and copy
public/          Static assets
```

The page is composed in `app/page.js`. The visual system is defined in `app/globals.css` with CSS variables for colors, typography, spacing, and themes.

## Editing content

Most portfolio content lives in `lib/content.js`:

- `site`: name, role, location, email, WhatsApp number, and optional profile photo
- `services`: service descriptions, deliverables, quote wording, and turnaround times
- `work`: portfolio entries and sample labels
- `edits`: the hero writing examples
- `rewrite`: the before-and-after copy example
- `process`: project steps
- `faqs`: frequently asked questions

Work entries currently marked `sample: true` are placeholders. Replace them with your own work before publishing. Set `site.showSampleTags` to `false` when the sample labels are no longer needed.

## Contact form

The brief form has no backend. It creates a pre-filled email and also offers WhatsApp and copy options. To handle submissions without the visitor's email app, connect the form to a service such as Formspree, Resend, or a Next.js route handler.

## Deployment

This is a standard Next.js app and can be deployed to Vercel:

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Use the default build settings.

The production build command is `npm run build`.
