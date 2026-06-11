# Tech Context

## Stack

| Layer | Choice |
|-------|--------|
| Markup | `index.html` |
| Styles | `styles.css` (DM Sans via Google Fonts) |
| Logic | Vanilla `app.js` (no framework) |
| Build | None — static files served as-is |

## Hosting

| Where | URL / method |
|-------|----------------|
| GitHub repo | https://github.com/kaelanmoss/data360-exam-score |
| GitHub Pages | https://kaelanmoss.github.io/data360-exam-score/ |
| Wix | iframe embed pointing at GitHub Pages URL |

## Deploy flow

```bash
cd /Users/kaelan/data360-exam-score-app
# edit files
git add .
git commit -m "Describe change"
git push
# GitHub Pages redeploys in ~1-2 minutes
# Wix embed picks up changes automatically (same URL)
```

## Local dev

```bash
cd /Users/kaelan/data360-exam-score-app
python3 -m http.server 8765
# open http://localhost:8765
```

## Wix embed snippet

```html
<iframe
  src="https://kaelanmoss.github.io/data360-exam-score/"
  title="Data 360 Consultant Exam Score Calculator"
  style="width:100%;min-height:1500px;border:0;display:block;"
  loading="lazy"
></iframe>
```

## Security

- `.gitignore` excludes `.env`, `.env.*`, `*.rtf`, `.DS_Store`
- GitHub tokens live in macOS Passwords app only — never in repo

## Exam data source

Official exam guide: https://help.salesforce.com/s/articleView?id=005298940&type=1

Scoring logic: weighted section percentages → rounded overall score (see `app.js` `computeWeightedScore`).