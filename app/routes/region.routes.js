const regions = require("../controllers/region.controller");

var router = require("express").Router();

router.post("/", regions.create);

router.get("/", regions.findAll);

router.put("/:id", regions.update);

router.delete("/:id", regions.delete);

router.get("/getByCountryId/:countryId", regions.getByCountryId);

module.exports = router;
