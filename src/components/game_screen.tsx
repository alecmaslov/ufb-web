import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import BoardTemplate from "./board_template";
import EquipSlots from "./equip_slots";
import PlayerDetailsMenu from "./player_details_menu";

export default function GameScreen() {
  return (
    <div id="Game">
      <BoardTemplate />
      <EquipSlots />
      <PlayerDetailsMenu />
    </div>
  );
}
