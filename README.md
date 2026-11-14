<div align="center">

  # 🍕 Pizza Fiamma
  ### **Hot & Fresh Artisan Pizza — Modern Restaurant Landing Page**

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-success?style=for-the-badge&logo=google-chrome&logoColor=white)](#-key-features)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

  <p align="center">
    A high-converting, blazing-fast, and fully responsive artisan pizza restaurant landing page crafted with modern semantic <b>HTML5</b>, custom <b>CSS3</b> styling, and smooth vanilla <b>JavaScript</b> micro-interactions.
  </p>

  <p align="center">
    <a href="#-key-features"><strong>Explore Features »</strong></a>
    ·
    <a href="#-getting-started"><strong>Quick Start »</strong></a>
    ·
    <a href="#-deployment-guide"><strong>Deploy Online »</strong></a>
    ·
    <a href="#-author"><strong>Author »</strong></a>
  </p>

</div>

---

## 📑 Table of Contents
- [✨ Key Features](#-key-features)
- [🎨 UI & Design Highlights](#-ui--design-highlights)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ JavaScript Micro-Interactions](#-javascript-micro-interactions)
- [📁 Project Architecture](#-project-architecture)
- [🚀 Getting Started](#-getting-started)
- [🌐 Deployment Guide (GitHub Pages & Vercel)](#-deployment-guide)
- [📦 How to Push to Your GitHub](#-how-to-push-to-your-github)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Key Features

- 📱 **100% Responsive & Mobile-First**: Flawless visual hierarchy across smartphones, tablets, laptops, and ultra-wide displays.
- ⚡ **Zero External Heavy Frameworks**: Pure vanilla frontend — lightweight, clean, and loads instantly without bundled overhead.
- 🎯 **Dynamic Sticky Navigation**: Adaptive blur header that changes appearance on scroll and highlights the current section in real-time.
- 🍔 **Mobile Drawer Menu**: Smooth hamburger animation toggle with auto-close on link navigation.
- 📈 **Animated Statistics Counter**: Custom cubic ease-out counter triggered when the stats bar scrolls into viewport.
- 🍕 **Interactive Food Showcases**: Rich category cards with overlay effects, popular pizza grids, and pricing tiers.
- 💬 **Social Proof & Testimonials**: 5-star customer feedback cards highlighting real customer satisfaction.
- 📞 **Direct Action CTAs**: Instant `tel:` triggers for phone ordering, franchise inquiry links, and direct online order buttons.
- 🔍 **SEO & Accessibility Ready**: Semantic landmarks (`<nav>`, `<section>`, `<header>`, `<footer>`), descriptive alt attributes, and optimized meta tags.

---

## 🎨 UI & Design Highlights

| Section | Description |
| :--- | :--- |
| **Hero Showcase** | High-impact promotional banner highlighting daily deals, combo specials, and animated CTA button. |
| **Live Stats Bar** | Animated count-up metrics for **14+ Outlets**, **4.8★ Ratings**, **12+ Years**, and **8k+ Happy Customers**. |
| **Category Explorer** | Visual cards for Classic Pizzas, Gourmet Selections, Wings & Sides, and Italian Pastas. |
| **Best Food Menu** | Curated dishes with ingredients, price ranges, hover transformations, and featured tag highlights. |
| **Popular Pizza Grid** | Grid-based menu cards (Pepperoni Classic, BBQ Chicken, Veggie Supreme, Meat Lovers). |
| **Brand Story / About** | Warm narrative section celebrating artisan baking traditions and fresh organic ingredients. |
| **Customer Reviews** | Testimonial carousel-like cards with star ratings, quotes, and customer locations. |
| **Franchise & Footer** | Multi-column layout with quick links, business contacts, and decorative pizza imagery. |

---

## 🛠️ Tech Stack

```text
Frontend Core  : HTML5 (Semantic & SEO Optimized)
Styling Engine : Modern CSS3 (Custom Properties, Flexbox, CSS Grid, Transitions)
Interactivity  : Vanilla JavaScript (ES6+, Intersection & Scroll Observers)
Typography     : Google Fonts (Poppins: 300, 400, 500, 600, 700, 800)
Iconography    : Font Awesome 6 (Free CDN)
Media Assets   : High-definition curated photography via Unsplash
```

---

## ⚡ JavaScript Micro-Interactions

The website utilizes lightweight, performant JavaScript logic inside [`script.js`](script.js):

1. **Sticky Header Transition**:
   ```javascript
   // Automatically adds shadow & background blur past 60px scroll offset
   window.scrollY > 60 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
   ```

2. **Active Section Spy**:
   Highlights navigation links dynamically based on the current window scroll position against element heights.

3. **Cubic Ease-Out Counter**:
   Smooth numeric interpolation for metrics:
   $$\text{eased} = 1 - (1 - \text{progress})^3$$
   Guarantees a natural deceleration effect as numbers approach their target values.

4. **Viewport Scroll Reveal**:
   Classes `.fade-up`, `.fade-left`, and `.fade-right` automatically transition to `.visible` once reaching $88\%$ of screen height.

---

## 📁 Project Architecture

```bash
Pizza website/
│
├── index.html        # Main landing page markup & semantic sections
├── style.css         # Design system, CSS variables, typography & animations
├── script.js         # Vanilla JS engine (counters, scroll spy, menu drawer)
├── .gitignore        # Clean rule set ignoring OS, IDE, and log files
└── README.md         # Comprehensive project documentation
```

---

## 🚀 Getting Started

No compilation, bundler, or complex runtime dependencies required. Just clone and run!

### 1. Clone the repository
```bash
git clone https://github.com/rayankiani/Pizza-Landing-page.git
cd Pizza-Landing-page
```

### 2. Run Locally

Choose any of your favorite methods:

* **Direct Browser Run**: Simply double-click [`index.html`](index.html) to view in any modern browser.
* **VS Code Live Server**: Right-click [`index.html`](index.html) > Select **"Open with Live Server"**.
* **Python Server**:
  ```bash
  python -m http.server 8000
  # Open http://localhost:8000 in your browser
  ```
* **Node (npx serve)**:
  ```bash
  npx serve .
  ```

---

## 🌐 Deployment Guide

### Option A: GitHub Pages (Recommended — 100% Free)

1. Push your code to your GitHub repository.
2. In your repo, go to **Settings** > **Pages** (in the left sidebar).
3. Under **Branch**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
4. Click **Save**.
5. Within 1 minute, your site will be live at:
   ```text
   https://rayankiani.github.io/Pizza-Landing-page/
   ```

### Option B: Vercel / Netlify
- Drag and drop your project folder onto [Netlify Drop](https://app.netlify.com/drop) or import your GitHub repo directly into [Vercel](https://vercel.com). Because `index.html` is in the root directory, zero configuration is required!

---

## 📦 How to Push to Your GitHub

Since your local repository is already initialized, cleaned, and committed, follow these easy steps whenever you're ready to push manually:

```bash
# 1. Add your GitHub remote repository URL
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# 2. Ensure your branch is named main
git branch -M main

# 3. Push to GitHub
git push -u origin main
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it for personal or commercial projects.

---

## 👨‍💻 Author

Crafted with ❤️ by **[Rayan Kiani](https://github.com/rayankiani)**

- **GitHub**: [@rayankiani](https://github.com/rayankiani)
- **Email**: [rayankiani7@gmail.com](mailto:rayankiani7@gmail.com)

⭐ **If you find this project helpful or inspiring, please consider giving it a star on GitHub!**
