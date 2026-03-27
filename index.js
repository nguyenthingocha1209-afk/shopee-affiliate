const express = require("express");
const app = express;
const affiliateLink = "https://s.shopee.vn/AUpb4ZviyZ";

app.get("/", (req, res) => {
  res.redirect(affiliateLink);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server chạy tại port " + PORT);
});
