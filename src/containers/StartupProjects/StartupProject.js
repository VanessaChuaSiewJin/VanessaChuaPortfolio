import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win?.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <h1 className="skills-heading">{bigProjects.title}</h1>

        <p
          className={
            isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
          }
        >
          {bigProjects.subtitle}
        </p>

        {bigProjects.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="project-section">
            <div className="project-section-header">
              <h2
                className={
                  isDark
                    ? "dark-mode project-section-title"
                    : "project-section-title"
                }
              >
                {section.sectionTitle}
              </h2>

              {section.sectionLink && (
                <Button
                  text="View on my itch.io"
                  href={section.sectionLink.url}
                  newTab={true}
                />
              )}
            </div>

            <div className="projects-container">
              {section.projects.map((project, i) => (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {/* MEDIA (VIDEO → IMAGE FALLBACK) */}
                  <div className="project-media">
                    {project.videoEmbed ? (
                      <div className="project-video">
                        <iframe
                          src={project.videoEmbed}
                          title={project.projectName}
                          frameBorder="0"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                          loading="lazy"
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* DETAILS */}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>

                    {Array.isArray(project.projectDesc) ? (
                      <ul
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>
                    )}

                    {/* FOOTER LINKS */}
                    {project.footerLink && project.footerLink.length > 0 && (
                      <div className="project-card-footer">
                        {project.footerLink.map(
                          (link, index) =>
                            link.name &&
                            link.url && (
                              <span
                                key={index}
                                className={
                                  isDark
                                    ? "dark-mode project-tag"
                                    : "project-tag"
                                }
                                onClick={() => openUrlInNewTab(link.url)}
                              >
                                {link.name}
                              </span>
                            )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
}
