const express = require("express");
const app = express();





app.get("/", function(req, res) {
    res.send("hello world");
  });
  


app.listen(4000, () => {
    console.log("app listening on port 4000");
  });