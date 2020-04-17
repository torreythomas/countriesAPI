# Countries API

[Live Application](https://fathomless-plateau-83900.herokuapp.com/countries)

This is an API of countries created by using the open-sourced data of the Rest Countries API (https://restcountries.eu/rest/v2/all).
Using this data, the user will be able to retrieve the name, capital, region, and population of various countries.

![Screen Shot 2020-04-16 at 8 11 10 PM](https://user-images.githubusercontent.com/62629275/79518517-48af2200-801f-11ea-9738-1cf8c77e44d6.png)


# Route Documentation

Utilizing CRUD functionalities below are the documented routes:

* Index: Access to all countries can be acheived using the 'get' method.
    * /countries - returns all specified countries.

* Show: Single countries can be returned when searched by a specified country name using the 'get' method.
    * /countries:name - returns a country by a specified name.

* Create: New countries can be created with the 'post' method.
    * /countries - returns a brand new country with the information specified in the body of the request.

* Update: Countries can be updated using the 'put' method by entering a new name.
    * /countries:name - returns a country by a specified name.

* Destroy: Countries can be 'destroyed' using the 'delete' method by name.
    * /countries:name - returns a country by a specified name.


# Build and Deployment Tools

* [Node.js](https://nodejs.org/en/)
* [Mongoose](https://mongoosejs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongo Atlas](https://www.mongodb.com/cloud/atlas)
* [Express](https://expressjs.com/)
* [Heroku](https://heroku.com)


# Installation Instructions

* Fork the repository
* Clone the forked repo to your local repo
* Utilize npm install to download dependencies
* Open the cloned down repo in a text editor
* Open your third eye and feel free to get creative. (Optional)


# Version
 
Version 1.0.0

# Creator Information

* Torrey Thomas 
* [LinkedIn](https://www.linkedin.com/in/torreyct/)
* [Github](https://github.com/torreythomas)
* [Portfolio](https://torreythomas.github.io/Portfolio/)
