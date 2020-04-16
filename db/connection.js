const mongoose = require("mongoose");

mongoose.Promise = Promise;

let mongoURI = ""; // setting the uri to connect to our local mongo host

if (process.env.NODE_ENV === "production"){
    mongoURI =  process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/countryAPI";
}


mongoose
  .connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));



module.exports = mongoose;