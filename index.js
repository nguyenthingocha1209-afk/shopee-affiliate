const express = require("express");
const app = express();

const affiliateLink = "https://s.shopee.vn/xxxxx"; // link của bạn

// 👉 HIỂN THỊ WEB
app.use(express.static("public"));

// 👉 NÚT MUA MỚI CHUYỂN LINK
app.get("/go", (req, res) => {
  res.redirect(affiliateLink);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server chạy");
});
