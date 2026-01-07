import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationSection} from "../../portfolio";

export default function Education() {
  if (educationSection.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationSection.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
