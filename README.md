# Rohit Prasad Portfolio

Personal portfolio website for **Rohit Prasad**, a Software Developer focused on AI-powered applications, full-stack development, automation, and backend systems.

Live site: [rohitofficial2509-cipher.github.io/Rohit-Prasad-Portfolio](https://rohitofficial2509-cipher.github.io/Rohit-Prasad-Portfolio/)

## About

This portfolio presents my professional background, work experience, technical skills, selected projects, education, certifications, resume, and contact information. It is designed as a clean, responsive, data-professional portfolio for recruiters, collaborators, and hiring teams.

## Highlights

- Software Developer portfolio built with React and Vite
- Responsive dashboard-inspired UI
- Resume download support
- Real profile image and professional contact links
- Sections for experience, skills, projects, education, certifications, and contact
- GitHub Pages deployment workflow
- Vercel-friendly build setup

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- GitHub Actions
- GitHub Pages
- Vercel

## Local Development

```bash
npm install
npm run dev
```

The development server usually runs at:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

This repository supports two deployment targets:

- GitHub Pages: on every push to `main`, GitHub Actions builds the Vite app and publishes the `dist` output to the `gh-pages` branch.
- Vercel: connect the GitHub repository in Vercel and deploy from `main` with the Vite preset.

To enable GitHub Pages:

1. Open repository **Settings**
2. Go to **Pages**
3. Choose **Deploy from a branch**
4. Select branch: `gh-pages`
5. Select folder: `/ (root)`
6. Save

To enable Vercel:

1. Open the Vercel dashboard
2. Select **Add New -> Project**
3. Import this GitHub repository
4. Keep the framework preset as **Vite**
5. Use `npm run build` as the build command
6. Use `dist` as the output directory
7. Deploy

Notes:

- `vite.config.js` switches the base path automatically for GitHub Pages and Vercel.
- If you use a custom domain, update it separately in the GitHub Pages or Vercel project settings.

## Contact

- Email: [rohitofficial2509@gmail.com](mailto:rohitofficial2509@gmail.com)
- LinkedIn: [linkedin.com/in/rohit-prasad-93360b350](https://linkedin.com/in/rohit-prasad-93360b350)
- Location: Kolkata, West Bengal, India
