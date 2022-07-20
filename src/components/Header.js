import React from "react";

const Header = ({ handleDarkMode, isDark }) => {
  console.log(isDark);
  return (
    <div className="header">
      <h1>NOTES</h1>
      <button onClick={() => handleDarkMode((dark) => !dark)} className="save">
        {isDark ? "Turn on the lights" : "Turn off the lights"}
      </button>
    </div>
  );
};

export default Header;
