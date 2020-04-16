const Country = require("../models/countries");


module.exports = {

    index: (req,res) => {
        Country.find({}).then(countries =>{
            res.json(countries);
        });
    },
    create: (req,res) => {
        const newCountry = req.body; 

        Country.create(newCountry).then(countries => res.json(countries));
    },
    show: (req,res) => {
        Country.findOne({name: req.params.name}).then(countries =>
            res.json(countries));
    },
    update: (req,res) => {
        const updatedCountry = req.body;

        Country.findOneAndUpdate({name: req.params.name}, updatedCountry, {
            new: true
        }).then(countries => res.json(countries));
    },
    destroy: (req,res) => {
        Country.findOneAndDelete({name: req.params.name}).then(countries => res.json(countries));
    }
}