import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/echo", { message });
      setResponse(res.data.echoedMessage);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Echo API Frontend</h1>
      <input
        type="text"
        value={message}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
      {response && (
        <h2 style={{ marginTop: "30px" }}>Response: {response}</h2>
      )}
    </div>
  );
}

export default App;
