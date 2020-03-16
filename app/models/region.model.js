module.exports = (sequelize, Sequelize) => {
  const Region = sequelize.define("region", {
    title: {
      type: Sequelize.STRING
    }
  });

  return Region;
};
