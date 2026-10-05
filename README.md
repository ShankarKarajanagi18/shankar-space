# Shankar portfolio

A Next.js 14 site for content writing, social media and digital marketing freelance work.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Make it yours

Everything editable is in `lib/content.js`:

1. Set `site.email`, `site.whatsapp` and optionally `site.photo` (put the image in `/public`).
2. Replace every item marked `sample: true` (work, case studies, testimonials) with real work and real numbers.
3. Set `showSampleTags` to `false` once the samples are gone.
4. Edit the hero lines in `edits` and the before/after paragraph in `rewrite`.

Colours and fonts are CSS variables at the top of `app/globals.css`.

## The brief form

It has no backend. On submit it opens a pre-filled email, and offers WhatsApp and copy buttons. To receive submissions
without the visitor's email app, point the form at Formspree, Resend or a Next.js route handler.

## Deploy

Push to GitHub and import the repo on Vercel. No settings needed.
