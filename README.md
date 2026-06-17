# EverLight

Build a quiet end-of-life tribute video from a few photographs and the songs
that mattered. Everything runs in the browser — photos and songs are never
uploaded. The finished tribute can be watched on any device or downloaded as a
universal **MP4** (H.264/AAC).

The whole app is the single self-contained file [`everlight.html`](./everlight.html).
You can open it directly, host it anywhere static, or use the dev server below.

## Run it locally

Requires Node 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (`http://localhost:5173`) — it redirects to the app
at `/everlight.html`. Use **Chrome or Edge** for the highest-quality export — the
accurate MP4 encoder uses the WebCodecs API. Other browsers fall back to a
lower-quality recorder.

## Run it in a GitHub Codespace

This repo includes a dev container. Open the repo in a Codespace, wait for it to
finish setting up (it runs `npm install` for you), then:

```bash
npm run dev
```

Codespaces forwards port **5173** automatically; open the forwarded URL and add
`/everlight.html` if it doesn't land there. (The site root redirects to the app.)

## Deploy

It's a static site. `npm run build` emits `dist/`, or just drop `everlight.html`
(and `index.html`) onto any static host — Netlify, GitHub Pages, etc.

## Notes

- **Checkout is simulated.** The paywall flow works end-to-end but does not charge
  anyone. Wire a real provider (e.g. Stripe Checkout) into the `processPayment()`
  function in `everlight.html`. Unlock state is stored client-side in
  `localStorage`; real revenue protection needs server-side verification.
