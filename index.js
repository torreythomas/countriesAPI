const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const countriesRouter = require("./routes/countries");

app.use("/countries", countriesRouter);

app.get("/", (req, res) => {
  res.redirect("/countries");
});

app.set("port", process.env.PORT || 2000);

app.listen(app.get("port"), () =>
  console.log(`PORT: ${app.get("port")}`)
);