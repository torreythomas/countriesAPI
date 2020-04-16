const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const countriesSchema = new Schema ({
    name: String,
    capital: String,
    region: String,
    population: Number
});

const Country = mongoose.model("Country", countriesSchema);
module.exports = Country;

