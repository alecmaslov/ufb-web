import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import BoardTemplate from "./board_template";
import EquipSlots from "./equip_slots";
import Header from "./header";
import Status from "./status";

export default function GameScreen() {
  return (
    <div id="Game">
      <Header />
      <Status />
      <BoardTemplate />
      <EquipSlots />
    </div>
  );
}
