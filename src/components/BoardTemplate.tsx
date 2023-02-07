import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import "./BoardTemplate.css";
import map from "./midgard.json";
import { GameState } from "./GameState";

export default function BoardTemplate() {
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [chestPos, setChestPos] = useState({ x: 0, y: 0 });
  const [chests, setChests] = useState([]);
  
  let board = [];
  let pieces = [];
  let spawnPlayerPosition = {x: 0, y: 0};
  let spawnChest = {x: 0, y: 0};
  
  useEffect(() => {
    setChestPos(spawnChest);
  }, []);
  
for (let layerIndex = 0; layerIndex < map.layers.length; layerIndex++) {
  const tiles = map.layers[layerIndex].tiles;
  for (let A = 0; A < tiles.length; A++) {
    for (let B = 0; B < tiles[A].length; B++) {
      let element = tiles[A][B];

      if (layerIndex == 0) {
        let index = A * tiles[A].length + B;


      

      let color = element[0];
      let walls = element.substring(1);
      let topWall = walls[0] === "1" ? <div className="top-wall" /> : null;
      let rightWall = walls[1] === "1" ? <div className="right-wall" /> : null;
      let bottomWall =
        walls[2] === "1" ? <div className="bottom-wall" /> : null;
      
      let leftWall = walls[3] === "1" ? <div className="left-wall" /> : null;

      let playerSprite = playerPos.x === A && playerPos.y === B ? <div className="tile player-sprite" /> : null;
      let treasureChest = chestPos.x === A && chestPos.y === B ? <div className="tile chest" /> : null;

      board.push(
        <div
          className={`tile ${color}`}
          key={index}
          onClick={() => setPlayerPos({ x: A, y: B })}
        >
          {topWall}
          {rightWall}
          {bottomWall}
          {leftWall}
          {playerSprite}
          {treasureChest}
        </div>
      );
      } 
      else {

        if (element === "CHEST") {
          spawnPlayerPosition =  { x: A, y: B };  
        }



        if (element === "CHEST" || element === "CHEST_DEFENDED") {
          spawnChest = { x: A, y: B };
        }
        // } else if (element[0] === "M") {
        //   let enemyName = element.substring(8);
        //   if (enemyName === "blueOrc") {
            
        //   }
        // }
      }
    }
  }

  }
 

  return (
    <div
    >
      
      <div id="BoardTemplate" style={{ padding: 20, top: 0 }}>
      
        {board}
        
      </div>

      <div>
      <button
        onClick={() => setPlayerPos(spawnPlayerPosition)}
      >
        Start
      </button>
      </div>
      

      <div>
        <GameState />
      </div>
    </div>
  );
}
