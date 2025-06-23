import React, { useState, useRef, useEffect } from "react";
import "./Chat.css"; // Make sure to import the styles

export default function Chat({ role, messages, setMessages, active }) {
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      {
        sender: role,
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
    ];
    setMessages(newMessages);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat-messages">
        {messages.map((msg, idx) => {
          const isOwn = msg.sender === role;
          return (
            <div
              key={idx}
              className={`chat-message ${isOwn ? "own" : "other"}`}
            >
              <div className="sender">{msg.sender}</div>
              <div className="bubble">{msg.text}</div>
              {msg.time && <div className="timestamp">{msg.time}</div>}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          disabled={!active}
        />
        <button onClick={sendMessage} disabled={!active}>Send</button>
      </div>
    </div>
  );
}
