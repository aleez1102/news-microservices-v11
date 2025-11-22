const express = require("express");
const cron = require("node-cron");
const app = express();

// Health check required by Render
app.get("/health", (req, res) => {
  res.send("OK");
});

// Run rotation every 6 hours
cron.schedule("0 */6 * * *", () => {
  console.log("Running DB rotation...");
  require("./rotate.js")();
});

// Start server so Render doesn't kill the app
app.listen(3000, () => {
  console.log("DB Rotation Worker running on port 3000");
});
