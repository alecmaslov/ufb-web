import React from "react";

interface WallProps {
  element: string;
}

const Wall: React.FC<WallProps> = ({ element }) => {
  let walls = element.substring(1);
  let topWall = walls[0] === "1" ? <div className="top-wall" /> : null;
  let rightWall = walls[1] === "1" ? <div className="right-wall" /> : null;
  let bottomWall = walls[2] === "1" ? <div className="bottom-wall" /> : null;
  let leftWall = walls[3] === "1" ? <div className="left-wall" /> : null;

  return (
    <div>
      {topWall}
      {rightWall}
      {bottomWall}
      {leftWall}
    </div>
  );
};

export default Wall;
