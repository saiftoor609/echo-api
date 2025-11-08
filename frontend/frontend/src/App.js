import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [echoed, setEchoed] = useState("");

  const sendMessage = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/echo", {
        message,
      });
      setEchoed(response.data.echoedMessage);
    } catch (error) {
      console.error(error);
      setEchoed("Error connecting to backend");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Echo App</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Send
      </button>
      <h2>{echoed}</h2>
    </div>
  );
}

export default App;
