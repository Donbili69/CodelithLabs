# Codelithlabs — Digital Solutions

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)

**A modern, responsive technology company website built with React, TypeScript, Vite, and Tailwind CSS**

[Codelithlabs.com](https://codelithlabs.com) · [Report Bug](https://github.com/codelithlabs/website/issues) · [Request Feature](https://github.com/codelithlabs/website/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🚀 Tech Stack](#-tech-stack)
- [🗂️ Project Structure](#️-project-structure)
- [🛠️ Installation](#️-installation)
- [📦 Available Scripts](#-available-scripts)
- [🎨 Customization](#-customization)
- [♿ Accessibility](#-accessibility)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Configuration](#-configuration)
- [📄 License](#-license)
- [📞 Contact](#-contact)

---

## 📖 Overview

Codelithlabs is a modern, high-performance marketing website designed to showcase a technology company's services, products, and corporate information. Built with industry-best practices, it provides a fast, accessible, and mobile-friendly experience for potential clients and customers.

### 🎯 Goals

- Deliver a lightning-fast, SEO-optimized marketing presence
- Showcase services, products, and company values effectively
- Provide an interactive AI chatbot for customer engagement
- Ensure WCAG 2.1 AA accessibility compliance
- Enable easy maintenance and rapid iteration

---

## ✨ Key Features

### Core Features

| Feature | Description |
|---------|-------------|
| **🎯 Hero Section** | Stunning animated landing with search bar, stats, and quick navigation |
| **🛠️ Services Showcase** | 6 service categories with detailed features and icons |
| **📦 Products Display** | 3 flagship products with feature lists and CTAs |
| **👥 About Us** | Company mission, vision, core values, and statistics |
| **📬 Contact Form** | Functional contact form with validation |
| **🤖 AI Assistant** | Interactive AI chatbot for customer inquiries |
| **📱 Mobile Responsive** | Fully responsive design for all screen sizes |
| **🌙 Smooth Animations** | Custom CSS animations and scroll reveal effects |

### UI/UX Features

- **Scroll Progress Bar** - Visual indicator of page scroll position
- **Floating Navigation** - Sticky header with smooth scroll navigation
- **Interactive Cards** - Hover effects and 3D card transformations
- **Glassmorphism** - Modern glass effect styling
- **Gradient Text** - Eye-catching gradient text effects
- **Custom Scrollbar** - Branded scrollbar styling
- **Floating Stickers** - Animated decorative elements

### Technical Features

- **TypeScript** - Full type safety across the codebase
- **Component Library** - Reusable, composable React components
- **Custom Hooks** - `useContactForm` and `useScrollReveal` hooks
- **Utility Functions** - Email validation, date formatting, scroll helpers
- **Tailwind CSS** - Utility-first styling with custom extensions
- **ESLint + Prettier** - Consistent code quality and formatting

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2+ | UI framework |
| **TypeScript** | 5.0+ | Type safety |
| **Vite** | 5.4+ | Build tool & dev server |
| **Tailwind CSS** | 3.4+ | Utility-first CSS |
| **React DOM** | 18.2+ | React rendering |
| **Lucide React** | Latest | Icon library |
| **ESLint** | 8.0+ | Code linting |
| **Prettier** | 3.0+ | Code formatting |

---

## 🗂️ Project Structure

```
codelithlabs/
├── .vscode/                    # VSCode workspace settings
│   ├── launch.json             # Debug configurations
│   └── settings.json           # Editor settings
├── assets/                     # Static assets
│   ├── api.svg
│   ├── backend-node.svg
│   ├── backend-python.svg
│   ├── database.svg
│   ├── frontend-htmlcss.svg
│   ├── frontend-js.svg
│   ├── frontend-react.svg
│   ├── frontend-responsive.svg
│   ├── tools-agile.svg
│   ├── tools-docker.svg
│   ├── tools-git.svg
│   └── tools-testing.svg
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── AI_Assistant.tsx   # AI chatbot component
│   │   ├── About.tsx          # About section
│   │   ├── Contact.tsx        # Contact form & info
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Products.tsx       # Products showcase
│   │   ├── Services.tsx       # Services listing
│   │   └── index.ts          # Component exports
│   ├── hooks/                  # Custom React hooks
│   │   ├── useContactForm.ts  # Form handling hook
│   │   └── useScrollReveal.ts # Scroll animation hook
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts           # Shared types
│   ├── utils/                  # Utility functions
│   │   └── helpers.ts         # Helper functions
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── .env.example               # Environment variables template
├── .eslintrc.cjs             # ESLint configuration
├── .gitignore                # Git ignore rules
├── .prettierrc.json          # Prettier configuration
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # TypeScript node config
└── vite.config.ts            # Vite configuration
```

### Component Details

| Component | Lines | Purpose |
|-----------|-------|---------|
| `Header.tsx` | ~90 | Responsive navigation with mobile menu |
| `Hero.tsx` | ~140 | Landing section with animations |
| `Services.tsx` | ~142 | Services showcase with cards |
| `Products.tsx` | ~124 | Products display section |
| `About.tsx` | ~145 | Company info and values |
| `Contact.tsx` | ~176 | Contact form and info |
| `Footer.tsx` | ~134 | Footer with links and contact |
| `AI_Assistant.tsx` | ~282 | AI chatbot with quick questions |

### Hook Details

| Hook | Purpose |
|------|---------|
| `useContactForm` | Handles form state, validation, and submission |
| `useScrollReveal` | Intersection Observer-based reveal animations |

---

## 🛠️ Installation

### Prerequisites

- **Node.js** 16+ (18+ recommended)
- **npm** 8+ or **yarn** 1.22+

### Setup

```bash
# Clone the repository
git clone https://github.com/codelithlabs/website.git
cd codelithlabs

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript compiler |

---

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4285f4',    // Blue
      secondary: '#34a853', // Green
      accent: '#ea4335',     // Red
    },
  },
}
```

### Adding New Sections

1. Create component in `src/components/`
2. Export from `src/components/index.ts`
3. Import and use in `src/App.tsx`

### Custom Animations

Add or modify animations in `src/index.css`:

```css
@keyframes yourAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## ♿ Accessibility

### Features Implemented

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels and roles
- Color contrast compliance
- Reduced motion support

### Best Practices

- All images have alt text
- Form inputs have associated labels
- Interactive elements have focus states
- Color is not the only indicator of state

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Prefix | Target |
|------------|--------|--------|
| Mobile | Default | < 640px |
| Tablet | `md:` | 640px - 1023px |
| Desktop | `lg:` | 1024px - 1279px |
| Large | `xl:` | 1280px+ |

### Mobile Features

- Hamburger menu for navigation
- Touch-friendly button sizes
- Responsive typography
- Flexible grid layouts

---

## 🔧 Configuration

### TypeScript

Edit `tsconfig.json` for TypeScript options:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```

### ESLint

Edit `.eslintrc.cjs` for linting rules:

```javascript
module.exports = {
  rules: {
    "react-refresh/only-export-components": "off"
  }
}
```

### Vite

Edit `vite.config.ts` for build options:

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Codelithlabs**

- 🌐 Website: [https://codelithlabs.com](https://codelithlabs.com)
- 📧 Email: [team.codelithlabs@gmail.com](mailto:team.codelithlabs@gmail.com)
- 📍 Location: Kokrajhar, Assam, India

**Repository**

- 🔗 GitHub: [https://github.com/codelithlabs/website](https://github.com/codelithlabs/website)
- 🐛 Issues: [https://github.com/codelithlabs/website/issues](https://github.com/codelithlabs/website/issues)

---

<div align="center">

**Built with ❤️ by Codelithlabs**

*Crafting digital experiences that inspire and innovate*

</div>
