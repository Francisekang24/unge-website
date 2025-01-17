# Universidad Nacional De Guinea Ecuatorial Website

This project is a website for the Universidad Nacional De Guinea Ecuatorial, built using React, TypeScript, Vite, and Strapi. It provides information about the university, including academic programs, departments, faculty directory, and more.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/universidad-website.git
    cd universidad-website
    ```

2. **Install dependencies for Strapi:**

    ```sh
    cd strapi
    npm install
    ```

3. **Install dependencies for the website:**

    ```sh
    cd ../website
    npm install
    ```

4. **Run the development servers:**

    ```sh
    cd ../strapi
    npm run develop
    cd ../website
    npm run dev
    ```

## Project Structure

```plaintext
strapi/
     .env
     .env.example
     .gitignore
     .strapi/
          client/
     .strapi-updater.json
     .tmp/
     config/
          admin.ts
          api.ts
          database.ts
          middlewares.ts
          plugins.ts
          server.ts
     database/
          migrations/
     package.json
     public/
          ...
     README.md
     src/
     tsconfig.json
     types/
website/
     .gitignore
     components.json
     eslint.config.js
     index.html
     package.json
     postcss.config.js
     public/
     README.md
     src/
     tailwind.config.js
     theme.json
     tsconfig.app.json
     tsconfig.json
     tsconfig.node.json
     vite.config.ts
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase using ESLint.

## Dependencies

The project uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A fast build tool for modern web projects.
- **Strapi**: A headless CMS to manage content.
- **Wouter**: A minimalistic routing library for React.
- **Tailwind CSS**: A utility-first CSS framework.
- **Lucide React**: A collection of icons for React.
- **Embla Carousel**: A lightweight carousel library for React.