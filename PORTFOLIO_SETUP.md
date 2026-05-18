# Portfolio System Setup Guide

## Overview
Your portfolio system now uses **dynamic rendering** from `assets/js/portfolio-data.js`. Instead of editing HTML, you only need to:
1. Update portfolio data in `portfolio-data.js`
2. Add/replace images in `assets/img/portfolio/`

Changes appear automatically on both `index.html` and `portfolio-details.html`.

---

## File Structure

```
assets/img/portfolio/
├── portfolio-1.png      ← Thumbnail for Portfolio #1
├── portfolio-2.png      ← Thumbnail for Portfolio #2
├── portfolio-9.png      ← Thumbnail for Portfolio #9
├── portfolio-9-1.png    ← Detail image 1 for Portfolio #9
├── portfolio-9-2.png    ← Detail image 2 for Portfolio #9
└── portfolio-9-3.png    ← Detail image 3 for Portfolio #9
```

---

## How to Add/Update a Portfolio

### Step 1: Edit Portfolio Data
Open `assets/js/portfolio-data.js` and find the portfolio you want to edit. For example:

```javascript
2: {
  title: "Volunteer Recruitment Website",
  category: "web",
  description: "A platform connecting volunteers with various charitable organizations.",
  techStack: ["PHP (Laravel)", "JavaScript", "Bootstrap", "MySQL"],
  images: [
    "assets/img/portfolio/portfolio-2.png"  // ← Single thumbnail image
  ],
  details: "Built a volunteer recruitment platform...",
  features: [
    "Advanced volunteer search and filtering",
    "Organization profile management",
    "Event scheduling and RSVP system"
  ],
  outcome: "Connected 200+ volunteers with 50+ organizations..."
}
```

### Step 2: Add/Update Images
Place images in `assets/img/portfolio/` folder:
- **Thumbnail**: `portfolio-{ID}.png` (required)
- **Detail images**: `portfolio-{ID}-1.png`, `portfolio-{ID}-2.png`, etc. (optional)

### Step 3: Update Images Array
In `portfolio-data.js`, update the `images` array for that portfolio:

```javascript
images: [
  "assets/img/portfolio/portfolio-2.png",      // Thumbnail
  "assets/img/portfolio/portfolio-2-1.png",    // Optional detail image 1
  "assets/img/portfolio/portfolio-2-2.png"     // Optional detail image 2
]
```

---

## Portfolio Categories

When setting `category`, use one of these values:

| Category | Display Name |
|----------|-------------|
| `"web"` | Web |
| `"game"` | Game |
| `"data"` | Data |
| `"linux"` | Linux |

Example:
```javascript
category: "web"  // Shows up under "Web" filter
```

---

## Complete Portfolio Example

```javascript
9: {
  title: "Supervised Learning Machine Learning Project",
  category: "data",
  description: "Machine learning project implementing supervised learning algorithms for predictive modeling.",
  techStack: ["Python", "Scikit-learn", "Pandas"],
  images: [
    "assets/img/portfolio/portfolio-9.png",      // Portfolio #9 thumbnail
    "assets/img/portfolio/portfolio-9-1.png",    // Portfolio #9 detail image 1
    "assets/img/portfolio/portfolio-9-2.png",    // Portfolio #9 detail image 2
    "assets/img/portfolio/portfolio-9-3.png"     // Portfolio #9 detail image 3
  ],
  details: "Developed and trained multiple supervised learning models with extensive data preprocessing...",
  features: [
    "Data cleaning and preprocessing",
    "Feature engineering and selection",
    "Model training and optimization",
    "Cross-validation and hyperparameter tuning",
    "Performance metrics and visualization",
    "Model comparison and selection"
  ],
  outcome: "Achieved 92% model accuracy with effective feature selection and optimization."
}
```

**Required Images**:
- ✅ `assets/img/portfolio/portfolio-9.png` (thumbnail - REQUIRED)
- ✅ `assets/img/portfolio/portfolio-9-1.png` (detail image 1)
- ✅ `assets/img/portfolio/portfolio-9-2.png` (detail image 2)
- ✅ `assets/img/portfolio/portfolio-9-3.png` (detail image 3)

---

## How the System Works

### On index.html (Portfolio Grid)
```
┌─ portfolio-data.js (read data)
│
└─ JavaScript generates portfolio items
   └─ Uses portfolio[n].images[0] as thumbnail
   └─ Creates filter buttons for each category
   └─ Sets up Isotope filtering & GLightbox
```

### On portfolio-details.html (Detail Page)
```
┌─ URL parameter (?id=2)
│
└─ JavaScript loads portfolio data
   └─ Displays all images in portfolio[n].images array
   └─ Shows title, description, tech stack, features
   └─ Creates image slider with all portfolio images
```

---

## Quick Checklist

When adding a new portfolio or editing one:

- [ ] Update `portfolio-data.js` with new data
- [ ] Set correct `category` (web, game, data, or linux)
- [ ] Add thumbnail image: `assets/img/portfolio/portfolio-{ID}.png`
- [ ] Add detail images (if more than one): `portfolio-{ID}-1.png`, etc.
- [ ] Update `images` array in portfolio-data.js with all image paths
- [ ] Refresh browser to see changes

---

## Troubleshooting

### Portfolio items not showing?
- Check browser console for errors (F12)
- Verify `portfolio-data.js` is loaded
- Check image file paths are correct

### Images not displaying?
- Verify image files exist in `assets/img/portfolio/`
- Check file names match exactly in the `images` array
- Make sure paths start with `"assets/img/portfolio/"`

### Filter buttons not working?
- Make sure JavaScript is enabled
- Check that `category` value matches filter names (web, game, data, linux)
- Wait a moment for page to fully load JavaScript libraries

---

## Files to Edit

**When you want to:**
- **Change portfolio content** → Edit `assets/js/portfolio-data.js`
- **Add images** → Add to `assets/img/portfolio/`
- **Change page layout** → Edit `index.html` or `portfolio-details.html`

**Do NOT manually edit:**
- Portfolio item HTML in `index.html` (it's auto-generated)
- Portfolio filter buttons in `index.html` (they're auto-generated)

