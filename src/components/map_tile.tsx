import React from "react";
import Wall from "./wall";
import Player from "./player";

interface MapTileProps {
  tileL1: string;
  tileL2: string;
  row: number;
  col: number;
  index: number;
  player: any;
  onTileClick: (row: number, col: number) => void;
}

const MapTile: React.FC<MapTileProps> = ({
  tileL1,
  tileL2,
  row,
  col,
  index,
  player,
  onTileClick,
}) => {
  let walls = null;

  let enemy = null;
  let portal = null;
  let treasureChest = null;
  let color = null;
  walls = <Wall element={tileL1} />;

  color = tileL1[0];

  if (tileL2 === "CHEST" || tileL2 === "CHEST_DEFENDED") {
    treasureChest = <div className="tile chest" />;
  }

  if (tileL2[0] === "M") {
    enemy = <div className={`tile ${tileL2.substring(8)}`} />;
  }

  if (tileL2[0] === "P") {
    portal = <div className={`tile ${tileL2.substring(7)}`} />;
  }

  return (
    <div
      className={`tile ${color}`}
      key={index}
      onClick={() => onTileClick(row, col)}
    >
      {player}
      {enemy}
      {walls}
      {treasureChest}
      {portal}
    </div>
  );
};

export default MapTile;
