const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // <---- ADD THIS LINE
app.use(express.json());

app.post("/api/echo", (req, res) => {
  const { message } = req.body;
  res.json({ echoedMessage: message });
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
