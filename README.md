# 🍕 Pizza Fiamma — Hot & Fresh Artisan Pizza

A modern, responsive, and visually engaging landing page for **Pizza Fiamma**, an artisan pizza brand. Built with semantic HTML5, modern CSS3 styling, and smooth vanilla JavaScript animations.

---

## ✨ Features

- **Responsive Design**: Fluid and adaptive layout for mobile devices, tablets, and desktops.
- **Modern UI & Aesthetic**: Warm food-inspired color palette, clean typography, and interactive hover effects.
- **Smooth Navigation & Scroll Reveal**: Smooth anchor scrolling, dynamic sticky navbar, and scroll-triggered fade animations.
- **Interactive Stats Counter**: Animated numbers highlighting customer reviews, outlets, and years of experience.
- **Menu & Showcase**: Highlighted specials, popular pizza categories, and deals.
- **Customer Reviews**: Testimonial section highlighting real user feedback and 5-star ratings.
- **Direct Order & Call CTAs**: Quick contact buttons, direct phone call triggers, and location details.
- **Firebase Ready**: Pre-configured for seamless deployment with Firebase Hosting.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic markup, meta tags for SEO and responsiveness.
- **CSS3**: Custom variables, Flexbox, Grid, keyframe animations, and media queries.
- **JavaScript (ES6+)**: Vanilla DOM manipulation, scroll event listeners, and count-up animations.
- **Icons & Fonts**: Font Awesome 6 and Google Fonts (Poppins).
- **Hosting**: Firebase Hosting (`firebase.json` and `.firebaserc`).

---

## 📁 Project Structure

```text
Pizza website/
├── .firebase/              # Local Firebase hosting cache (git-ignored)
├── public/                 # Static web assets
│   ├── index.html          # Main landing page markup
│   ├── style.css           # Styling, themes, and animations
│   └── script.js           # Client-side interactions & animations
├── .firebaserc             # Firebase project configuration
├── .gitignore              # Git ignore rules
├── firebase.json           # Firebase hosting rules
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### 1. Run Locally
You can run the project locally with any static web server:

- **VS Code Live Server**: Right-click `public/index.html` and select **"Open with Live Server"**.
- **Python**:
  ```bash
  cd public
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

- **Firebase CLI**:
  ```bash
  firebase serve
  ```

### 2. Deploy to Firebase Hosting
If you have the Firebase CLI installed and logged in:

```bash
# Login to Firebase
firebase login

# Deploy the website
firebase deploy
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use and customize it.
