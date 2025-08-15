import React from "react";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-left">
        <h1>JohnKaptain Academic Tools Hub</h1>
      </div>
      <div className="nav-center">
        <a href="#ai-humanizer-logins">AI Humanizer Logins</a>
        <a href="#content-generation-tools">Content Generation Tools</a>
        <a href="#turnitin-other-detection-tools">Turnitin & Other Detection Tools</a>
        <a href="#unlocks">Unlocks</a>
        <a href="#vpn-logins">VPN Logins</a>
        <a href="#entertainment-tools">Entertainment Tools</a>
        <a href="#academic-writing-training">Academic Writing Training</a>
      </div>
      <div className="nav-right">
        <button onClick={toggleTheme}>
          Switch to {theme === "green" ? "Blue" : "Green"} Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
