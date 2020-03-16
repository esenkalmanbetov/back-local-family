module.exports = app => {
  app.use("/api/tutorials", require("./tutorial.routes"));
  app.use("/api/categories", require("./category.routes"));
  app.use("/api/countries", require("./country.routes"));
  app.use("/api/regions", require("./region.routes"));
  app.use("/api/users", require("./user.routes"));
  app.use("/api/families", require("./family.routes")) 

  app.use("*", function(req, res, next) {
    res.status(404).json({ err: "Path" + req.originalUrl + " does not exist" });
  });
};
