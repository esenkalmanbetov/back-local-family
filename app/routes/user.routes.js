const users = require("../controllers/user.controller");

var router = require("express").Router();

router.post("/", users.create);

router.get("/", users.findAll);

router.put("/:id", users.update);

router.delete("/:id", users.delete);

router.get("/:id", users.findOne);

module.exports = router;
