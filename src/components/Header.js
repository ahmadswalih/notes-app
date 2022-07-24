import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ handleDarkMode, isDark }) => {
  return (
    <div className="header">
      <h1>NOTES</h1>
      <button
        className="modeBtn"
        onClick={() => handleDarkMode((dark) => !dark)}
      >
        {isDark ? (
          <MdLightMode
            color="white"
            style={{ width: "30px", height: "30px" }}
          />
        ) : (
          <MdDarkMode style={{ width: "30px", height: "30px" }} />
        )}
      </button>
    </div>
  );
};

export default Header;
