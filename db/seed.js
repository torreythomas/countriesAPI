const Country = require("../models/countries");
const data = require("./data.json");


let countryData =  data.map(countries => {
    let myData = {
        name: countries.name,
        capital: countries.capital,
        region: countries.region,
        population: countries.population
    };
return myData;
});

Country.remove({}).then(countries => {
    Country.collection.insert(countryData).then(countries => {
        console.log(countries);
    });
});