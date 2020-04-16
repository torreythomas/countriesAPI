const express = require("express");
const router = express.Router();

const countriesController = require("../controllers/countries");


router.get("/", countriesController.index);

router.post("/", countriesController.create);

router.get("/:name", countriesController.show);

router.put("/:name", countriesController.update);

router.delete("/:name", countriesController.destroy);


module.exports = router;