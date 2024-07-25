import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./styles.css"; // Ensure the path is correct

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(!theme)} className="themebutton">
      Change Theme
    </button>
  );
}

export default ThemeButton;
