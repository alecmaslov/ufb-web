import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import "../styles/BoardTemplate.css";

import map from "../maps/midgard.json";
// import { GameState } from "../GameState";
import MapTile from "./map_tile";
import Player from "./player";
// import "../styles/BoardTemplate.css";

export default function BoardTemplate() {
  const [playerPos, setPlayerPos] = useState({ row: 0, col: 0 });

  const onTileClick = (row: number, col: number) => {
    setPlayerPos({ row, col });
  };

  const player = (row: number, col: number) => {
    if (row === playerPos.row && col === playerPos.col) {
      return <Player name="" score={1} pos={playerPos} />;
    }
    return null;
  };

  let board = [];
  let spawnPlayerPosition = { row: 0, col: 0 };

  let index = 0;
  for (let row = 0; row < map.layers[0].tiles.length; row++) {
    for (let col = 0; col < map.layers[0].tiles.length; col++) {
      board.push(
        <MapTile
          tileL1={map.layers[0].tiles[row][col]}
          tileL2={map.layers[1].tiles[row][col]}
          row={row}
          col={col}
          index={index++}
          player={player(row, col)}
          onTileClick={onTileClick}
        />
      );
    }
  }

  return (
    <div>
      <div id="BoardTemplate" style={{ top: 0 }}>
        {board}
      </div>

      {/* <div>
        <button onClick={() => setPlayerPos(spawnPlayerPosition)}>Start</button>
      </div> */}

      {/* <div>
        <GameState />
      </div> */}
    </div>
  );
}
