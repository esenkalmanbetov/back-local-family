module.exports = (sequelize, Sequelize) => {
  const Tour = sequelize.define("tours", {
    title: Sequelize.STRING,
    duration: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    description: Sequelize.TEXT
  });

  return Tour;
};
