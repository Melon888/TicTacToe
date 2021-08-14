const express = require("express");
const app = express();
const path = require("path");

app.set("views", "./views");
app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "/public")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));

app.get("/", function (req, res) {
  res.render("tic");
  //__dirname : It will resolve to your project folder.
});

app.listen(process.env.Port || 3000, function(){
  console.log("Running at Port 3000");
});


