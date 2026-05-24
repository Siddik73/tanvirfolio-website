# 3D Creator Portfolio 🎨

A cutting-edge, highly interactive "3D Creator" themed portfolio website built to showcase 3D Modeling, Rendering, Motion Design, Branding, and Web Design services. 

Designed with a sleek dark mode aesthetic (`#0C0C0C`), fluid typography (`Kanit`), and completely customized scroll-driven Framer Motion animations.

![Live Demo](https://img.shields.io/badge/Live_Demo-Available-success?style=for-the-badge&logo=vercel)

**Live Link:** [https://tanvirfolio-website.vercel.app/](https://tanvirfolio-website.vercel.app/)

---

## 🚀 Features

- **Pixel-Perfect UI:** Meticulously replicated design with tailored gradients, drop shadows, and fluid scaling typography using CSS `clamp()`.
- **Magnetic Interactions:** Custom physics-based `Magnet` wrapper applied to the Hero portrait for a high-end interactive feel.
- **Scroll-Driven Animations:** 
  - Staggered `FadeIn` components for section reveals.
  - `AnimatedText` that reveals characters individually as the user scrolls.
  - Sticky stacking `ProjectsSection` cards that scale down dynamically to create a parallax deck effect.
- **Infinite Marquee:** A dual-row, opposing-direction scrolling gallery featuring 3D animated GIFs.
- **Fully Responsive:** Seamlessly adapts to mobile, tablet, and desktop views.

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel (Auto-deployed via GitHub)

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Siddik73/tanvirfolio-website.git
   cd tanvirfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `src/components/`: Reusable Framer Motion micro-interactions (`Magnet`, `FadeIn`, `AnimatedText`, etc.)
- `src/sections/`: The main building blocks of the page (`HeroSection`, `MarqueeSection`, `ProjectsSection`, etc.)
- `public/assets/`: All locally hosted 3D graphics, GIFs, and WebP images optimized for fast loading.

## 📄 License
This project is proprietary.
