# 🔥 Firebase Hosting — Reheeshaa Website

Deploy the site to a **temporary preview URL** in ~2 minutes. No custom domain needed.

---

## One-time setup

```bash
# 1. Install Firebase CLI (if you haven't already)
npm install -g firebase-tools

# 2. Log in to your Google account
firebase login
```

---

## Deploy to a temporary preview channel

```bash
# From the project root:
firebase hosting:channel:deploy preview --expires 7d
```

Firebase will print a live URL like:
```
https://reheeshaa-website--preview-xxxxxxxx.web.app
```

Share that URL with anyone — it stays live for 7 days, then auto-expires.

---

## Deploy to the permanent live URL

```bash
firebase deploy --only hosting
```

Your site will be live at:
```
https://reheeshaa-website.web.app
```

---

## Notes

- **Project ID**: if `reheeshaa-website` is taken, run `firebase projects:create` to make a new one, then update `.firebaserc` with your actual project ID.
- **Assets**: the `ui_kits/website/` folder is the public root — all image paths (`../../assets/…`) resolve correctly when served from that directory.
- If you get a "project not found" error, run `firebase use --add` to select or create a project interactively.
