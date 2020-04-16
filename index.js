const Country = require("./models/country");
const data = require("./db/data.json");

Country.deleteMany({}).then(() => {

    Country.create(data).then(countries=> {
        console.log(countries)
        process.exit();
    })
});