const express = require("express");
const app = express();

const affiliateLink = "https://s.shopee.vn/6VJSQwBS8X"; // link indomie của bạn

// hiển thị web
app.use(express.static("public"));

// nút mua
app.get("/go", (req, res) => {
  res.redirect(affiliateLink);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server chạy");
});
