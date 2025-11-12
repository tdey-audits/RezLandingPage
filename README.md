## Project Structure

```
rezlabs/
├── src/
│   ├── assets/
│   │   └── rez.png          # Logo
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── Footer.jsx       # Footer component
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Vision.jsx       # Vision page
│   │   ├── WhyRez.jsx       # Why Rez page
│   │   └── Litepaper.jsx    # Litepaper page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── main.css             # Global styles
├── public/                  # Static assets
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies and scripts
└── README.md                # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will open automatically at `http://localhost:8000`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Pages

- **Home** (`/`) - Landing page with hero section
- **Vision** (`/vision`) - Vision statement (Coming soon)
- **Why Rez** (`/why-rez`) - Benefits and features (Coming soon)
- **Litepaper** (`/litepaper`) - Technical documentation (Coming soon)

## Customization

### Colors

Edit the CSS variables in `src/main.css`:

```css
:root {
  --bg-dark: #000000;
  --bg-darker: #0a0a0a;
  --blue-gradient: #1e5a9e;
  --text-primary: #ffffff;
  --text-secondary: #e5e5e5;
  --button-bg: rgba(255, 255, 255, 0.1);
  --button-hover: rgba(255, 255, 255, 0.15);
}
```
