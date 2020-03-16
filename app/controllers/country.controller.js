const db = require("../models");
const Country = db.countries;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const country = {
    title: req.body.title
  };

  Country.create(country)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Country."
      });
    });
};

exports.findAll = (req, res) =>
  Country.findAll()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Some error occured while retrieving countries"
      })
    );

exports.update = (req, res) => {
  const id = req.params.id;

  Country.update(req.body, { where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "Country was updated successfully." });
      else
        res.send({
          message: `Cannot update Country with id=${id}. Maybe Country was not found or req.body is empty!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Error updating Country with id=" + id })
    );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Country.destroy({ where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "Country was deleted successfully!" });
      else
        res.send({
          message: `Cannot delete Country with id=${id}. Maybe Country wasn't found!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Couldn't delete Country with id=" + id })
    );
};
