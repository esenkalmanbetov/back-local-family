const categories = require("../controllers/category.controller");

var router = require("express").Router();

router.post("/", categories.create);

router.get("/", categories.findAll);

router.put("/:id", categories.update);

router.delete("/:id", categories.delete);

module.exports = router;
