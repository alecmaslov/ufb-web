import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import "./BoardTemplate.css";

export const GameState = () => {
  const [socketUrl] = useState("ws://127.0.0.1:8787/join/room1");
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);
      setMessageHistory((prev) => prev.concat(lastMessage.data));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickSendMessage = useCallback(() => {
    console.log(lastMessage);
    sendMessage("placeholder REQUEST_GAME_STATE");
  }, []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button>

      <span>The WebSocket is currently {connectionStatus}</span>
      <br />
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx} style={{ color: "black", fontSize: "10px", width: 500 }}>{message ? message : null}</span>
        ))}
      </ul>
    </div>
  );
};
