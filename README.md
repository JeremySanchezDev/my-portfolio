# 🌐 Jeremy Sánchez - Portfolio Website

This is my personal portfolio site built with modern web technologies to showcase professional experience, projects, and skills in a clean, responsive, and accessible way.

🌐 Live site: [https://jeremysanchezdev.github.io/my-portfolio/](https://jeremysanchezdev.github.io/my-portfolio/)

## 🔧 Tech Stack

- **Astro** – Static site generator
- **React** – Interactive UI components
- **TypeScript** – Type-safe development
- **Tailwind CSS v4** – Modern styling
- **Vite** – Lightning-fast development bundler
- **GitHub Actions** – CI/CD for automated deployment
- **GitHub Pages** – Hosting platform

## 🌍 Features

- 🔁 **i18n (internationalization)**: Supports both **English** and **Spanish**
- 🌗 **Dark/Light mode toggle** with system preference detection
- 🧭 **Responsive navigation** for desktop and mobile
- 📁 Organized folder structure following best practices
- 📦 Modular and reusable UI components
- 🌐 Deployed via **GitHub Actions** with configuration for **GitHub Pages**

## 📁 Project Structure

```bash
src/
├── assets/ # Images and media
├── components/ # UI components (About, Projects, Navbar, etc.)
├── data/ # Content and static configuration
├── i18n/ # Internationalization logic
├── layouts/ # Base layout
├── pages/ # Route-based content
├── styles/ # Global styles (CSS variables, fonts)
├── types/ # TypeScript interfaces
```

## 🚀 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/JeremySanchezDev/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

## 🚚 Deployment

This project is deployed via GitHub Actions and hosted on GitHub Pages.

## ✍️ Customization

- Edit content in `src/components/*/data` and `src/i18n`
- Add languages via `src/i18n/ui.ts`
- Adjust theme or colors via CSS variables in `src/styles/global.css`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

Made by **Jeremy Sánchez** — [LinkedIn](https://www.linkedin.com/in/jeremydevsoft/) • [GitHub](https://github.com/JeremySanchezDev)
