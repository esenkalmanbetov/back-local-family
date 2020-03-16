const countries = require("../controllers/country.controller");

var router = require("express").Router();

router.post("/", countries.create);

router.get("/", countries.findAll);

router.put("/:id", countries.update);

router.delete("/:id", countries.delete);

module.exports = router;
