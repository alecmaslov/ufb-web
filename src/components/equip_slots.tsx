import React, { useState, useEffect } from "react";
import "../styles/equip-slots.css"

// const EquipSlots = ({ currentPlayer }) => {
  const EquipSlots = () => {
    return (
      <div className="container">
    <div className="resources">
    <div className="resource">
    <p className="emoji">✊</p>
    {/* <p className="value">{currentPlayer.meleeToken}</p> */}
    <p className="value">4</p>
    </div>
    <div className="resource">
    <p className="emoji">💰</p>
    {/* <p className="value">{currentPlayer.gold}</p> */}
    <p className="value">12</p>
  </div>

  <div className="resource">
    <p className="emoji">🔮</p>
    {/* <p className="value">{currentPlayer.magicToken}</p> */}
    <p className="value">3</p>
  </div>
</div>
 <div className="row">
 {Array.from({ length: 3 }, (_, index) => (
   <div className="square">
   </div>
 ))}
</div>
</div>
);
 };

export default EquipSlots;
