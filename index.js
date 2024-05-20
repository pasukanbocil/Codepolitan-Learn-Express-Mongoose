const path = require("path");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

// conected mongodb
mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.set("views", path, path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("shop app listening on http://127.0.0.1:3000");
});
