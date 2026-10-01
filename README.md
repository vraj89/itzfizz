
# Itzfizz — Scroll-Driven Hero Section

A modern, responsive hero section built as part of the **Itzfizz Digital Web Development Internship Assignment**.

The project focuses on creating a premium frontend experience with smooth entrance animations and a scroll-driven interactive visual using **React, Tailwind CSS, and GSAP ScrollTrigger**.

---

## 🚀 Live Demo

**Live Website:**
[Add your deployed website URL here]

---

## 💻 GitHub Repository

**Repository:**
[Add your GitHub repository URL here]

---

## 📌 Assignment Objective

The objective of this assignment was to recreate a premium hero-section experience inspired by the provided reference while demonstrating:

* Scroll-based interactions
* Smooth frontend animations
* GSAP ScrollTrigger implementation
* Responsive design
* Performance-conscious animations
* Clean React component architecture
* Modern UI development

### Reference

https://paraschaturvedi.github.io/car-scroll-animation

The reference was used only for understanding the scroll-driven interaction concept. The design, content, and implementation were developed independently for this project.

---

## ✨ Features

### Hero Section

* Premium, modern agency-style design
* Letter-spaced **WELCOME ITZFIZZ** heading
* Supporting tagline
* Impact/statistics section
* Responsive layout
* Scroll indicator

### Entrance Animations

On initial page load:

* Hero heading fades and moves into position
* Supporting content appears smoothly
* Statistics appear with staggered animations
* Animations use GSAP for smooth transitions

### Scroll-Driven Animation

The main visual responds directly to the user's scroll position.

The animation includes:

* Position movement
* Rotation
* Scaling
* Smooth interpolation
* Scroll-based progress using GSAP ScrollTrigger
* Natural forward and reverse animation while scrolling

### Start Project Interaction

The **START PROJECT** button opens the client/project detail form.

The form includes fields such as:

* Full Name
* Email
* Company / Business Name
* Phone Number
* Project Type
* Project Requirements
* Estimated Budget
* Expected Timeline
* Additional Message

The form includes smooth open/close interactions and responsive behavior.

### Responsive Design

The interface is optimized for:

* Desktop
* Laptop
* Tablet
* Mobile

---

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **JavaScript**
* **Tailwind CSS**
* **GSAP**
* **GSAP ScrollTrigger**
* **HTML5**
* **CSS3**

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── AnimatedVisual.jsx
│   └── ProjectForm.jsx
│
├── App.jsx
├── main.jsx
└── index.css

public/
└── assets/

package.json
tailwind.config.js
vite.config.js
README.md
```

The exact structure may vary slightly depending on the final implementation.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd your-project-folder
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🎨 Animation Implementation

GSAP and ScrollTrigger are used to create the main interactive experience.

The scroll animation is tied to the user's scroll progress instead of being a time-based autoplay animation.

The implementation primarily uses GPU-friendly properties such as:

* `transform`
* `opacity`
* `x`
* `y`
* `scale`
* `rotation`

This helps maintain smooth animation performance and minimize unnecessary layout calculations.

---

## 📱 Responsive Behavior

The layout and animations adapt according to the screen size.

Special attention was given to:

* Typography scaling
* Spacing
* Main visual positioning
* Statistics layout
* Project form layout
* Mobile overflow prevention
* Touch/scroll interaction
