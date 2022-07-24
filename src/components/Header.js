import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ handleDarkMode, isDark }) => {
  return (
    <div className="header">
      <h1>Shorty</h1>
      <button
        className="modeBtn"
        onClick={() => handleDarkMode((dark) => !dark)}
      >
        {isDark ? (
          <MdLightMode
            color="white"
            style={{ width: "30px", height: "30px",cursor:"pointer" }}
          />
        ) : (
          <MdDarkMode style={{ width: "30px", height: "30px",cursor:"pointer" }} />
        )}
      </button>
    </div>
  );
};

export default Header;
