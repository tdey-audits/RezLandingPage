# RezLabs - React Project Structure

## ✅ Completed Setup

Successfully converted to a React.js application with:
- React 18 + Vite build tool
- React Router v6 for page navigation
- Proper project structure
- Logo integration in navbar

## 📁 Project Structure

```
rezlabs/
├── src/
│   ├── assets/
│   │   └── rez.png          # Logo image
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with logo
│   │   └── Footer.jsx       # Footer with social links
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Vision.jsx       # Vision page (Coming soon)
│   │   ├── WhyRez.jsx       # Why Rez page (Coming soon)
│   │   └── Litepaper.jsx    # Litepaper page (Coming soon)
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── main.css             # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md                # Documentation

## 🚀 Running the Project

\`\`\`bash
npm run dev      # Start development server (port 8000)
npm run build    # Build for production
npm run preview  # Preview production build
\`\`\`

## 🔗 Routes

- `/` - Home page
- `/vision` - Vision page
- `/why-rez` - Why Rez page
- `/litepaper` - Litepaper page

## 🎨 Design Features

- Blue gradient background (maintained from original)
- Rez.png logo in navbar (32px x 32px on desktop, responsive)
- Instrument Serif font for logo and headings
- Inter font for body text
- Glassmorphism effects
- Smooth page transitions with React Router
