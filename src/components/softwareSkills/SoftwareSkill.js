import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.softwareSkills.map((group, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-group-title">{group.category}</h3>

            <ul className="dev-icons">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skill.skillName}
                >
                  {/* {skill.fontAwesomeClassname ? (
                    <i className={skill.fontAwesomeClassname}></i>
                  ) : (
                    <img
                      src={skill.imageSrc}
                      alt={skill.skillName}
                      className="skill-icon"
                    />
                  )} */}
                  {skill.svgIcon ? (
                    <skill.svgIcon className="skill-icon" />
                  ) : skill.fontAwesomeClassname ? (
                    <i className={skill.fontAwesomeClassname}></i>
                  ) : null}
                  <p>{skill.skillName}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
