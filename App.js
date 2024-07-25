import React, { useState, createContext } from "react";
import Homepage from "./pages/homepage";
import ThemeButton from "./components/theme-button";
import "./App.css";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(false); // Assuming false is the default theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme ? "dark" : "light"}`}>
        <Homepage />
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
