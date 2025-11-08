const request = require("supertest");
const express = require("express");
const { body, validationResult } = require("express-validator");

// Create a mini app for testing
const app = express();
app.use(express.json());

// Same /api/echo route as your main app
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

// Jest test
test("POST /api/echo should return echoed message", async () => {
  const response = await request(app)
    .post("/api/echo")
    .send({ message: "Test Message" });

  expect(response.statusCode).toBe(200);
  expect(response.body.echoedMessage).toBe("Test Message");
});
