# 🚀 Vasudev Nair P — Personal Portfolio

A modern, responsive, dark-themed portfolio website built with **vanilla HTML, CSS, and JavaScript**. No frameworks, no build tools — just clean, performant code.

![Portfolio Preview](assets/projects/preview.jpg)

---

## 📋 Table of Contents

- [Live Demo](#-live-demo)
- [Features](#-features)
- [Sections Overview](#-sections-overview)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Placeholder Images](#-placeholder-images)
- [Deployment](#-deployment)
- [Technologies Used](#-technologies-used)
- [License](#-license)

---

## 🌐 Live Demo

> Replace this with your deployed URL after hosting.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Dark Theme** | Deep navy/charcoal background with a vibrant cyan (`#00d4ff`) accent |
| **Fully Responsive** | Mobile-first design that works on all screen sizes |
| **Smooth Animations** | Scroll-reveal effects, typing animation, stat counters, particle effects |
| **Custom Cursor** | Smooth-following cursor dot + outline ring (desktop only) |
| **Project Filters** | Filter projects by category (Web, Blockchain, AI/ML, Games) |
| **Testimonial Slider** | Auto-advancing carousel with navigation dots and arrows |
| **Contact Form** | Floating-label form that opens the user's email client via `mailto:` |
| **Preloader** | Animated loading screen before content renders |
| **Back to Top** | Floating button that appears on scroll |
| **3D Tilt Effect** | Subtle perspective tilt on project cards on hover |
| **No Dependencies** | Zero external JS/CSS frameworks — only Google Fonts |

---

## 📖 Sections Overview

### 1. 🎯 Hero Section
The full-viewport landing area users see first.

- **Your name** with a gradient text effect
- **Typing animation** cycling through roles: Full Stack Developer, Game Developer, Backend Engineer, etc.
- **CTA buttons** — "View My Work" and "Get In Touch"
- **Social links** — GitHub, LinkedIn, Email
- **Profile photo** with decorative border (placeholder provided)
- **Floating particles** background animation
- **Scroll indicator** mouse animation at bottom

### 2. 👤 About Me
A two-column layout with photo and biography.

- **Profile image** on the left (placeholder provided)
- **Bio paragraphs** highlighting your journey as a co-founder at Virga.tech, freelancer experience, and passion for blockchain and cloud computing
- **Animated stat counters**: Projects (14+), Technologies (9+), Years Experience (2+)
- Stats animate from 0 to target when scrolled into view

### 3. 🛠 Skills & Technologies
Three categorized cards displaying your tech stack.

- **Languages**: JavaScript, Python, C, HTML5, CSS3
- **Frameworks & Runtime**: Node.js
- **Tools & Platforms**: Figma, Blockchain, Cloud Computing, Git & GitHub
- Each skill has an SVG icon with hover animations (lift + glow)
- Category cards have a subtle glow border effect on hover

### 4. 💼 Featured Projects
A filterable grid of your GitHub projects.

- **Filter buttons**: All, Web, Blockchain, AI/ML, Games
- **7 Project Cards**, each with:
  - Project screenshot area (placeholder provided)
  - GitHub link overlay on hover
  - Title, description, and tech stack tags
  - 3D tilt effect on hover
- **"View All on GitHub"** button linking to your repositories
- Projects featured:
  - **BlockMaash dApp** — Blockchain/dApp project
  - **Financial Analysis Bot** — AI-powered financial analysis
  - **Cancer Detection Model** — Deep learning medical AI
  - **Stratum** — Modular architecture project
  - **Komorebi** — UI/UX focused web project
  - **Code of Duty** — Game development project
  - **Hologram** — Visual/3D web effects project

### 5. 📅 Experience Timeline
A vertical timeline showing your professional journey.

- **Co-Founder & Lead Developer** at Virga.tech (2023 — Present)
- **Freelance Software Developer** (2022 — Present)
- **Open Source Contributor & Learner** (2021 — Present)
- Each entry has: role, company, date, bullet points, and tech tags
- Animated marker dots with glowing effect for the current role
- Timeline line with gradient from accent to border color

### 6. 💬 Testimonials
A carousel/slider with client feedback.

- **3 placeholder testimonial cards** (replace with real testimonials)
- Auto-advances every 6 seconds
- Manual navigation with prev/next arrows and dot indicators
- Quote icon with quote text and author info
- Author avatar placeholders included

### 7. 📬 Contact
A two-column section with contact info and a form.

- **Contact Details**: Email, LinkedIn, GitHub — each as a clickable card with icon
- **Contact Form**: Name, Email, Subject, Message fields with:
  - Floating label animation
  - Focus glow effect
  - `mailto:` integration (opens email client on submit)
  - Success feedback animation on the submit button
- No backend required — form opens native email client

### 8. 🔗 Footer
Minimal footer with social links and copyright.

- Social icon links (GitHub, LinkedIn, Email)
- "Designed & Built by Vasudev Nair P"
- Copyright notice

### 9. ⬆️ Back to Top Button
- Fixed-position floating button (bottom-right)
- Appears after scrolling 500px
- Smooth scrolls to the top of the page

---

## 📁 Project Structure

```
MyPortfolio/
├── index.html              # Main HTML file (all sections)
├── styles.css              # Complete stylesheet (dark theme)
├── script.js               # All JavaScript interactions
├── README.md               # This documentation
└── assets/
    ├── profile.jpg          # Hero section profile photo (PLACEHOLDER)
    ├── about.jpg            # About section photo (PLACEHOLDER)
    ├── resume.pdf           # Your resume (add your own)
    ├── projects/
    │   ├── blockmaash.jpg   # BlockMaash project screenshot
    │   ├── finance-bot.jpg  # Financial Bot screenshot
    │   ├── cancer-detect.jpg# Cancer Detection screenshot
    │   ├── stratum.jpg      # Stratum screenshot
    │   ├── komorebi.jpg     # Komorebi screenshot
    │   ├── code-of-duty.jpg # Code of Duty screenshot
    │   └── hologram.jpg     # Hologram screenshot
    └── testimonials/
        ├── client1.jpg      # Testimonial author 1 (PLACEHOLDER)
        ├── client2.jpg      # Testimonial author 2 (PLACEHOLDER)
        └── client3.jpg      # Testimonial author 3 (PLACEHOLDER)
```

---

## 🚀 Getting Started

### Option 1: Open Directly
Simply double-click `index.html` in your file browser, or:

```bash
open index.html
```

### Option 2: Local Development Server
For a better development experience with live reload:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🎨 Customization Guide

### Changing Colors
All colors are defined as CSS custom properties in `styles.css` at the top:

```css
:root {
    --accent: #00d4ff;           /* Main accent color (cyan) */
    --accent-dark: #00a8cc;      /* Darker accent for hover */
    --bg-primary: #0a0f1c;      /* Main background */
    --bg-secondary: #111827;    /* Alternate section background */
    --text-primary: #e4e8f1;    /* Main text color */
    /* ... more variables */
}
```

To change the accent color, update `--accent` and `--accent-dark`. All related glow/opacity values will automatically adjust.

### Changing Content
- **Name/title**: Edit the `<h1>` in the hero section of `index.html`
- **Bio**: Edit the `<p>` tags in the about section
- **Skills**: Add/remove `.skill-item` divs in the skills section
- **Projects**: Add/remove `.project-card` divs in the projects section
- **Experience**: Add/remove `.timeline-item` divs in the experience section
- **Testimonials**: Edit the `.testimonial-card` content
- **Social links**: Update the `href` attributes on social icons

### Changing Typing Roles
In `script.js`, find the `roles` array and update:

```javascript
const roles = [
    'Full Stack Developer.',
    'Game Developer.',
    'Backend Engineer.',
    // Add or remove roles here
];
```

---

## 🖼 Placeholder Images

All image locations use a **graceful fallback** — if an image file is missing, a styled placeholder with an icon appears automatically. This is handled by the `onerror` attribute on `<img>` tags.

**Images you need to replace:**

| File | Size Recommendation | Description |
|------|-------------------|-------------|
| `assets/profile.jpg` | 640×760px | Hero section profile photo |
| `assets/about.jpg` | 600×800px | About section photo |
| `assets/resume.pdf` | — | Your downloadable resume |
| `assets/projects/*.jpg` | 800×500px | Project screenshots (7 images) |
| `assets/testimonials/*.jpg` | 200×200px | Client avatar photos (3 images) |

> 💡 **Tip**: Use [https://unsplash.com](https://unsplash.com) for free stock photos, or take actual screenshots of your projects.

---

## 🌍 Deployment

### GitHub Pages (Free)
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch** and **/ (root)**
4. Your site will be live at `https://yourusername.github.io/MyPortfolio`

### Netlify (Free)
1. Drag and drop the project folder into [Netlify Drop](https://app.netlify.com/drop)
2. Get an instant live URL

### Vercel (Free)
1. Import the GitHub repo on [vercel.com](https://vercel.com)
2. Deploy with zero configuration

---

## 🛠 Technologies Used

| Technology | Usage |
|-----------|-------|
| **HTML5** | Semantic markup and page structure |
| **CSS3** | Custom properties, Grid, Flexbox, animations, `@keyframes`, media queries |
| **JavaScript (ES6+)** | DOM manipulation, IntersectionObserver, event handling, animation logic |
| **Google Fonts** | Inter (UI text) + Fira Code (monospace accents) |
| **SVG Icons** | Inline SVGs for all icons (no icon library dependency) |

**No external frameworks or libraries.** Everything is hand-coded with vanilla web technologies.

---

## 📝 Browser Support

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome for Android)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Vasudev Nair P**
