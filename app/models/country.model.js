module.exports = (sequelize, Sequelize) =>
  sequelize.define("country", {
    title: {
      type: Sequelize.STRING
    }
  });
