const tours = require("../controllers/tour.controller");

var router = require("express").Router();

router.post("/", tours.create);

router.get("/", tours.findAll);

router.put("/:id", tours.update);

router.delete("/:id", tours.delete);

router.get("/getByUserId/:userId", tours.getByUserId);

module.exports = router;
