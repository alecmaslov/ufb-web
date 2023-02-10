import React from "react";

interface PlayerProps {
  name: string;
  score: number;
  pos: { row: number; col: number };
}

const Player: React.FC<PlayerProps> = ({ name, score, pos }) => {
  return (
    <div className="tile player-sprite">
      {/* <p>Name: {name}</p>
      <p>Score: {score}</p> */}
    </div>
  );
};

export default Player;
