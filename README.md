# 🌐 Jeremy Sánchez - Sitio Web de Portafolio

Este es mi sitio web de portafolio personal, construido con tecnologías web modernas para mostrar mi experiencia profesional, proyectos y habilidades de una manera limpia, adaptativa y accesible.

🌐 Sitio en vivo: [https://jeremysanchezdev.github.io/my-portfolio/](https://jeremysanchezdev.github.io/my-portfolio/)

## 🔧 Tecnologías Utilizadas

- **Astro** – Generador de sitios estáticos
- **React** – Componentes de interfaz de usuario interactivos
- **TypeScript** – Desarrollo con tipado seguro
- **Tailwind CSS v4** – Estilizado moderno
- **Vite** – Empaquetador de desarrollo ultrarrápido
- **GitHub Actions** – CI/CD para despliegue automatizado
- **GitHub Pages** – Plataforma de alojamiento (hosting)

## 🌍 Características

- 🔁 **i18n (internacionalización)**: Soporta tanto **Español** como **Inglés**
- 🌗 **Alternador de modo Oscuro/Claro** con detección de preferencias del sistema
- 🧭 **Navegación adaptable (responsive)** para escritorio y dispositivos móviles
- 📁 Estructura de carpetas organizada siguiendo las mejores prácticas
- 📦 Componentes de UI modulares y reutilizables
- 🌐 Desplegado a través de **GitHub Actions** configurado para **GitHub Pages**

## 📁 Estructura del Proyecto

```bash
src/
├── assets/ # Imágenes y archivos multimedia
├── components/ # Componentes de UI (About, Projects, Navbar, etc.)
├── data/ # Contenido y configuración estática
├── i18n/ # Lógica de internacionalización
├── layouts/ # Diseño (layout) base
├── pages/ # Contenido basado en rutas
├── styles/ # Estilos globales (variables CSS, fuentes)
├── types/ # Interfaces de TypeScript
```

## 🚀 Cómo Empezar

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/JeremySanchezDev/my-portfolio.git
   cd my-portfolio
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Compilar para producción**

   ```bash
   npm run build
   ```

## 🚚 Despliegue

Este proyecto se despliega automáticamente a través de GitHub Actions y está alojado en GitHub Pages.

## ✍️ Personalización

- Edita el contenido en `src/components/*/data` y en `src/i18n`
- Añade idiomas a través de `src/i18n/ui.ts`
- Ajusta el tema o los colores mediante variables CSS en `src/styles/global.css`

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

## 📬 Contacto

Creado por **Jeremy Sánchez** — [LinkedIn](https://www.linkedin.com/in/jeremydevsoft/) • [GitHub](https://github.com/JeremySanchezDev)
