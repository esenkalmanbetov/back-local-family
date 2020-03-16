const db = require("../models");
const Tour = db.tours;

exports.create = (req, res) => {
  const tour = {
    title: req.body.title,
    duration: req.body.duration,
    price: req.body.price,
    description: req.body.description,
    userId: req.body.userId
  };

  Tour.create(tour)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Tour."
      });
    });
};

exports.findAll = (req, res) =>
  Tour.findAll()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Tours"
      })
    );

exports.update = (req, res) => {
  const id = req.params.id;

  Tour.update(req.body, { where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "Tour was updated successfully." });
      else
        res.send({
          message: `Cannot update Tour with id=${id}. Maybe Tour was not found or req.body is empty!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Error updating Tour with id=" + id })
    );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tour.destroy({ where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "Tour was deleted successfully!" });
      else
        res.send({
          message: `Cannot delete Tour with id=${id}. Maybe Tour wasn't found!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Couldn't delete Tour with id=" + id })
    );
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tour.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tour with id=" + id
      });
    });
};

exports.getByUserId = (req, res) => {
  const userId = req.params.userId;

  Tour.findAll({ where: { userId } })
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while retrieving Tours by userId=" + userId
      })
    );
};
