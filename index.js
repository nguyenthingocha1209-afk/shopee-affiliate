const express = require("express");
const app = express();

// cực quan trọng: listen đúng 0.0.0.0
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("OK LUÔN RỒI NHA 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server chạy tại port " + PORT);
});
