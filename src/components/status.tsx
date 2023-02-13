import React from "react";
import "../styles/status.css";
import fractionUnicode from "fraction-unicode";

// interface Props {
//   currentPlayer: {
//     HP: number;
//     allHP: number;
//     heartPieces: number;
//     heartCrystals: number;
//     energyShards: number;
//     energyCrystals: number;
//   };
//   playerMovesLeft: number;
//   blinkingAnimation: boolean;
//   fractionToString: (numerator: number, denominator: number) => string;
// }

// const Status: React.FC<Props> = ({
//   currentPlayer,
//   playerMovesLeft,
//   blinkingAnimation,
//   fractionToString
// }) => {

const Status = () => {
  return (
    <div className="status-container">
      <div className="status-row">
        <div className="status-spacer" />
        <div className="status-center-column">
          {/* <p className="status-font-60">
          {fractionToString(currentPlayer.HP >= 0 ? currentPlayer.HP : 0, currentPlayer.allHP)}
        </p> */}
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <p className="HP">{fractionUnicode(39, 46)}</p>
          </div>
          <p>🩸</p>
        </div>

        <div className="status-spacer" />

        <div className="heartenergy">
          <div className="heart1">
            {/* <img
            src={`heartPiece${currentPlayer.heartPieces}`}
            className="heart1"
          /> */}
            {/* <p className="status-image-text">{currentPlayer.heartCrystals}</p> */}
          </div>

          <div className="energy2">
            {/* <img
            src={`energy${currentPlayer.energyShards}`}
            className="energy2"
          /> */}
            {/* <p className="status-image-text">{currentPlayer.energyCrystals}</p> */}
          </div>
        </div>

        <div className="status-spacer" />

        <div className="status-center-column">
          {/* <p className="status-font-60">{playerMovesLeft}</p> */}
          <p className="moves">13</p>
          <p>⚡️</p>
        </div>

        <div className="status-spacer" />
      </div>

      <div className="status-divider" />
    </div>
  );
};

export default Status;
