const db = require("../models");
const Category = db.categories;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const category = {
    title: req.body.title
  };

  Category.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the Category."
      });
    });
};

exports.findAll = (req, res) => {
  Category.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving categories"
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Category.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) res.send({ message: "Category was updated successfully." });
      else
        res.send({
          message: `Cannot update Categery with id=${id}. Maybe Category was not found or rew.body is empty!`
        });
    })
    .catch(err =>
      res.status(500).send({
        message: "Error updating Category with id=" + id
      })
    );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Category.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1)
        res.send({
          message: "Category was deleted successfully!"
        });
      else
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category wasn't found!`
        });
    })
    .catch(err => {
      res.send(500).send({
        message: "Couldn't delete Category with id=" + id
      });
    });
};
