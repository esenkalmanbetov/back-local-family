module.exports = (sequelize, Sequelize) => {
  const Family = sequelize.define("family", {
    familyName: Sequelize.STRING,
    location: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    whatsapp: Sequelize.STRING,
    description: Sequelize.TEXT
  });

  return Family;
};
