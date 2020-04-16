const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/countries", {useNewUrlParser:  true});

module.exports = mongoose;