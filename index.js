const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

// POST /api/echo endpoint
app.post(
  "/api/echo",
  [
    body("message")
      .exists().withMessage("Message is required")
      .isString().withMessage("Message must be a string")
      .notEmpty().withMessage("Message cannot be empty")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message } = req.body;
    res.json({ echoedMessage: message });
  }
);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
