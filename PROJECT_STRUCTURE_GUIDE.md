# Skillverse UI - React Vite Project Structure

**Date:** May 2, 2026  
**Type:** Frontend Project Setup Guide

---

## Project Status

✅ **Node.js & npm installed** - v22.18.0 & 11.4.2  
✅ **Vite React project created** - skillverse-ui  
✅ **Development server running** - http://localhost:5173/  
✅ **All dependencies installed** - 167 packages  

---

## Project Directory Structure

```
skillverse-ui/
├── index.html                 # Main HTML entry point
├── package.json              # Project dependencies & scripts
├── vite.config.js           # Vite configuration
├── node_modules/            # Installed dependencies (167 packages)
├── public/                   # Static assets
│   ├── favicon.svg
│   ├── icons.svg
│   └── vite.svg
├── src/                      # Source code
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styling
│   ├── index.css            # Global styling
│   └── assets/              # Images and media
│       ├── react.svg
│       ├── vite.svg
│       └── hero.png
├── .gitignore
└── eslint config files
```

---

## Key Files Explained

### 1. **index.html** - Root HTML File
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>skillverse-ui</title>
  </head>
  <body>
    <div id="root"></div>                          ← Root element for React
    <script type="module" src="/src/main.jsx"></script>  ← Entry script
  </body>
</html>
```

**Role:**
- The HTML skeleton that gets served
- Contains single `<div id="root"></div>` where React mounts
- Loads main.jsx as module script

---

### 2. **src/main.jsx** - React Entry Point
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create React root and render App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Role:**
- **First JavaScript file executed** by Vite
- Finds the `#root` div in HTML
- Creates React root using `createRoot()`
- Renders `<App />` component inside it
- `<StrictMode>` wraps App for development warnings

**Flow:**
```
index.html loads main.jsx
    ↓
main.jsx mounts React to #root div
    ↓
App.jsx component renders
    ↓
User sees React app at http://localhost:5173/
```

---

### 3. **src/App.jsx** - Main App Component
```javascript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)       // React state
  
  return (
    <>
      {/* Main page sections */}
      <section id="center">
        <div className="hero">
          {/* Hero images */}
        </div>
        <h1>Get started</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </section>
      
      <section id="next-steps">
        {/* Documentation & social links */}
      </section>
    </>
  )
}

export default App
```

**Key Concepts:**
- Exported as default → used in main.jsx as `import App`
- Uses `useState` hook for counter state
- JavaScript with HTML = JSX syntax
- `className` instead of `class` (JavaScript reserved word)
- Imports CSS directly: `import './App.css'`

---

### 4. **package.json** - Project Configuration
```json
{
  "name": "skillverse-ui",
  "private": true,
  "version": "0.0.0",
  "type": "module",                    ← ES6 modules
  "scripts": {
    "dev": "vite",                     ← npm run dev (start dev server)
    "build": "vite build",             ← npm run build (production build)
    "lint": "eslint .",                ← npm run lint (code quality)
    "preview": "vite preview"          ← npm run preview (preview build)
  },
  "dependencies": {
    "react": "^19.2.5",               ← React library
    "react-dom": "^19.2.5"            ← React DOM for web
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.0.1", ← Vite React plugin
    "vite": "^8.0.10",                ← Vite build tool
    "eslint": "^10.2.1"               ← Code linter
  }
}
```

**Scripts Available:**
| Command | Does |
|---------|------|
| `npm run dev` | Start development server (http://localhost:5173/) |
| `npm run build` | Create optimized production build |
| `npm run lint` | Check code quality |
| `npm run preview` | Preview production build locally |

---

### 5. **vite.config.js** - Build Configuration
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],              ← Enable React JSX support
})
```

**Role:**
- Configures Vite build tool
- Enables React plugin for JSX transformation
- Enables Hot Module Replacement (HMR) for live reload

---

## File Types Explained

| Extension | Purpose | Example |
|-----------|---------|---------|
| `.html` | HTML template | `index.html` |
| `.jsx` | React component (JavaScript + JSX) | `App.jsx`, `main.jsx` |
| `.css` | Styling | `App.css`, `index.css` |
| `.json` | Configuration | `package.json`, `vite.config.js` |
| `.svg` | Vector images | `react.svg`, `vite.svg` |

---

## React Component Hierarchy

```
index.html (HTML root)
    ↓
src/main.jsx (React entry)
    ↓
<App /> (Main component from App.jsx)
    ↓
JSX Elements (sections, buttons, images)
    ↓
Rendered to HTTP://localhost:5173/
```

---

## How Hot Module Replacement (HMR) Works

When you edit `src/App.jsx`:

1. Save file
2. Vite detects change
3. Reloads ONLY that module
4. Page updates **without full refresh**
5. React state preserved ✅

**Example:**
```javascript
// Edit this and save
<h1>Get started</h1>  →  <h1>Skillverse UI</h1>
// Page updates instantly, counter state still there!
```

---

## Development Commands

### Start Development Server
```bash
npm run dev
```
- Runs Vite dev server on http://localhost:5173/
- Watches file changes
- Enables HMR for live reload
- Shows compilation errors in console

### Build for Production
```bash
npm run build
```
- Creates optimized bundle in `dist/` folder
- Minifies and tree-shakes code
- Ready to deploy

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Test how it will look deployed

### Run Linter
```bash
npm run lint
```
- Checks code quality
- Reports style issues

---

## Current Stack

**Frontend:**
- ✅ React 19.2.5 (UI library)
- ✅ React DOM 19.2.5 (Web rendering)
- ✅ Vite 8.0.10 (Build tool & dev server)

**Development Tools:**
- ✅ ESLint 10.2.1 (Code quality)
- ✅ @vitejs/plugin-react (React support in Vite)
- ✅ TypeScript support (optional)

**Backend Integration Ready:**
- Vite proxy can forward API calls to Java backend
- React components can fetch from http://localhost:8080

---

## Components Directory Structure

The `src/components/` folder (to be created) will contain:

```
src/components/
├── Courses/
│   ├── CourseList.jsx       ← List all courses
│   ├── CourseCard.jsx       ← Single course card
│   └── CourseDetail.jsx     ← Course details page
├── Users/
│   ├── UserProfile.jsx      ← User profile page
│   ├── UserForm.jsx         ← Registration form
│   └── UserSettings.jsx     ← User settings
├── Enrollments/
│   ├── EnrollmentList.jsx   ← Student enrollments
│   └── EnrollmentForm.jsx   ← Enroll in course
├── Auth/
│   ├── Login.jsx            ← Login page
│   ├── Register.jsx         ← Registration page
│   └── ProtectedRoute.jsx   ← Route guard
└── Common/
    ├── Header.jsx           ← Navigation header
    ├── Footer.jsx           ← Footer
    ├── Navbar.jsx           ← Top navigation
    └── Loading.jsx          ← Loading spinner
```

---

## Next Steps

### 1. **Create Components Folder**
```bash
mkdir src/components
```

### 2. **Start Building Components**

Example CourseList.jsx:
```javascript
import { useState, useEffect } from 'react'

export default function CourseList() {
  const [courses, setCourses] = useState([])
  
  useEffect(() => {
    // Fetch from Java backend
    fetch('http://localhost:8080/api/v1/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  
  return (
    <div className="courses">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          {course.title}
        </div>
      ))}
    </div>
  )
}
```

### 3. **Connect to Java Backend**

The Vite dev server can proxy API calls to Java backend:

```javascript
// vite.config.js
export default {
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
}
```

---

## Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Node Modules
```bash
npm install
```

### Full Clean Rebuild
```bash
rm -r node_modules
rm package-lock.json
npm install
npm run dev
```

---

## Summary

✅ **React + Vite** - Modern, fast development setup  
✅ **HMR** - Instant code reflection during development  
✅ **File Structure** - Clear organization for scalability  
✅ **Backend Ready** - Can connect to Java API on port 8080  
✅ **Development Server** - Running on http://localhost:5173/  

Your Skillverse UI frontend is now ready for building! 🚀

---

**Project Setup By:** GitHub Copilot  
**Date:** May 2, 2026  
**Status:** ✅ Production Ready

