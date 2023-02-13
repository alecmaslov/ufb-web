import React, { useState, useEffect } from "react";
import "../styles/header.css";

const Header = () => {
  const connectionIcon = "🟢";

  return (
    <div className="header-container">
      <div className="header-inner-container">
        <div className="rogue"></div>
        <div className="username-container">
          <div className="username">Rogue</div>
          <div className="map-name">{"Jotunheim A1"}</div>
        </div>
        <div style={{ flex: 1 }} />
        <div className="time-container">⏰ 03:00</div>

        <div style={{ flex: 1 }} />
        <div className="icon-container">🎲</div>
        <div className="connection-icon-container">{connectionIcon}</div>
        <button className="settings-button-container">⚙️</button>
      </div>
      <hr className="hr-container" />
    </div>
  );
};

export default Header;
