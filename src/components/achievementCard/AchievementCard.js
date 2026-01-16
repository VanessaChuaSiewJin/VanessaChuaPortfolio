import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    win && win.focus();
  }

  // Support BOTH formats:
  // - old: image / description / footer
  // - new: icon / subtitle / footerLink
  const Icon = cardInfo.icon;
  const title = cardInfo.title;
  const subtitle = cardInfo.subtitle ?? cardInfo.description;
  const links = cardInfo.footerLink ?? cardInfo.footer ?? [];

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        {Icon ? (
          <Icon
            className={`achievement-icon ${isDark ? "is-dark" : ""}`}
            aria-label={cardInfo.iconAlt || title}
          />
        ) : (
          cardInfo.image && (
            <img
              src={cardInfo.image}
              alt={cardInfo.imageAlt || "Card Thumbnail"}
              className="card-image"
            />
          )
        )}
      </div>

      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {title}
        </h5>
        {subtitle && (
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {subtitle}
          </p>
        )}
      </div>

      {links.length > 0 && (
        <div className="certificate-card-footer">
          {links.map((v, i) => (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
