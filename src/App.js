import './App.css';
import React, { useState ,useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './AllRoutes/Routes/Routes';
import './darkMode.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
       <RouterProvider router = {routes}>
       <button onClick={toggleTheme}>Toggle Theme</button>
      
       </RouterProvider>
    </div>
  );
}

export default App;
