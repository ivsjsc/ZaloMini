<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1FMRvfPl5cCyrrcCStaZp3SNieLGmaXgV

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Zalo Mini App preview & styling notes

Preview the Zalo Mini App locally using the ZMP dev server (this project uses `zmp` tooling):

```powershell
# start the dev preview (serves at http://localhost:3000 by default)
npx zmp start
```

OAuth server (optional): a small sample server lives in `server/index.js`. To test real Zalo OAuth:

1. Create a `.env` with `ZALO_APP_ID` and `ZALO_APP_SECRET` (do not commit these files).
2. Start the sample server:

```powershell
npm run start:server
```

Design & styling decisions
- UI components use `zmp-ui` for Page/Box/Text/Button and Tailwind for spacing.
- A top `AppBar` (`components/AppBar.tsx`) ensures consistent safe-area handling and a centered title.
- `BottomNav` uses a pill background and safe-area bottom padding to match Zalo Mini App feel.
- Keep content width constrained to `max-w-lg` so it looks like a mobile Mini App in desktop preview.

If you want I can also:
- Add app icons referenced by `app-config.json` (you'll need to provide PNGs or I can add placeholders).
- Tune colors to match your brand palette or Zalo guidelines.
