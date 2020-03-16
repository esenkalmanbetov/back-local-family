const families = require("../controllers/family.controller");

var router = require("express").Router();

router.post("/", families.create);

router.get("/", families.findAll);

router.put("/:id", families.update);

router.delete("/:id", families.delete);

router.get("/getByUserId/:userId", families.getByUserId);

module.exports = router;
