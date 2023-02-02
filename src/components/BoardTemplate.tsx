import React, { useState } from 'react';

import './BoardTemplate.css';
import { tiles } from './jotunheim.js'

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

export default function BoardTemplate() {
    const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
    let board = [];
    for(let A = 0; A < horizontalAxis.length; A++){
        for(let B = 0; B < verticalAxis.length; B++) {
            let index = A * verticalAxis.length + B;
            let color = tiles[index].tile[0];
            let walls = tiles[index].tile.substring(1);
            let topWall = walls[0] === '1' ? <div className="top-wall" /> : null;
            let rightWall = walls[1] === '1' ? <div className="right-wall" /> : null;
            let bottomWall = walls[2] === '1' ? <div className="bottom-wall" /> : null;
            let leftWall = walls[3] === '1' ? <div className="left-wall" /> : null;

            let playerSprite = playerPos.x === A && playerPos.y === B ? <div className="tile player-sprite" /> : null;

            board.push(
                <div 
                className={`tile ${color}`} 
                key={index} 
                onClick={() => setPlayerPos({x: A, y: B})}
            >
                {topWall}
                {rightWall}
                {bottomWall}
                {leftWall}
                {playerSprite}
            </div>
            );
        }
    }
    
    return <div id="BoardTemplate">{board}</div>
}