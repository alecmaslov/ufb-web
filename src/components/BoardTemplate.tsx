import React from 'react';

import './BoardTemplate.css';
import { tiles } from './jotunheim.js'

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

export default function BoardTemplate() {
    let board = [];
    for(let A = 0; A < horizontalAxis.length; A++){
        for(let B = 0; B < verticalAxis.length; B++) {
            let index = A * verticalAxis.length + B;
            board.push(<div className="tile" key={index}>{tiles[index].tile}</div>)
        }
    }
    
    return <div id="BoardTemplate">{board}</div>
}