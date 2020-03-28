const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.categories = require("./category.model")(sequelize, Sequelize);
db.countries = require("./country.model")(sequelize, Sequelize);
db.regions = require("./region.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.families = require("./family.model")(sequelize, Sequelize);
db.tours = require("./tour.model")(sequelize, Sequelize);

db.regions.belongsTo(db.countries);
db.families.belongsTo(db.users);
db.tours.belongsTo(db.users);
db.categories.belongsToMany(db.tours, { through: 'toursCategories'});

module.exports = db;
