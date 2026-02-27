# Sikha Pentyala — Academic Website

Multi-page static site, ready to host on GitHub Pages. No build step required.

## File Structure

```
├── index.html          ← Homepage (bio, news, selected pubs, awards)
├── research.html       ← Research areas + full publication list
├── teaching.html       ← Courses, mentoring, teaching philosophy
├── service.html        ← Talks, reviewing, community, awards
├── assets/
│   ├── css/style.css   ← All styles (shared across pages)
│   └── js/main.js      ← Pub filtering + nav highlighting
├── images/             ← Put your photo here
└── README.md
```

## Deploying to GitHub Pages

1. Push all files to your `sikhapentyala.github.io` repository root
2. Go to **Settings → Pages → Source: Deploy from branch → main / root**
3. Your site will be live at `https://sikhapentyala.github.io/`

## Adding Your Photo

1. Add your photo file to the `images/` folder (e.g., `images/sikha.jpg`)
2. In `index.html`, find the `<div class="photo-wrap">` block and replace it with:
   ```html
   <img src="images/sikha.jpg" alt="Sikha Pentyala" />
   ```

## Adding Your CV

1. Add your CV PDF to the repo (e.g., `assets/sikha_cv.pdf`)
2. In `index.html`, find the commented-out CV link and uncomment it

## Customizing

- **News items**: Edit the `<div class="news-row">` blocks in `index.html`
- **Mentee names**: Update `teaching.html` — names are anonymized by default
- **Publications**: Add new `<div class="pub-card">` blocks in `research.html`
- **Colors**: Edit CSS variables at the top of `assets/css/style.css`
