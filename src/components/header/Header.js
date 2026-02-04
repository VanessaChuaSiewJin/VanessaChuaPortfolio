import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";

import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "header dark-menu" : "header"}>
        {/* Logo */}
        <a href="/" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>

        {/* Mobile toggle */}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>

        {/* Menu */}
        <ul className={isDark ? "menu dark-menu" : "menu"}>
          {skillsSection.display && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}

          {workExperiences.display && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}

          {achievementSection.display && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}

          {resumeSection.display && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact Me</a>
          </li>

          <li className="toggle-item">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
