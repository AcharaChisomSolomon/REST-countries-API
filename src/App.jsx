import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import React from "react"

import Header from "./components/Header"
import Main from "./components/Main"
// import styled from "@emotion/styled"

function App() {
  const [theme, setTheme] = React.useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference using matchMedia
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // Default to light theme
    return 'light';
  })

  // Apply theme to document and save to localStorage
  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <Router>

        <Header 
          theme={theme} 
          setTheme={setTheme}
        />

        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      
    </Router>
  )
}


export default App
