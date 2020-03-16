const db = require("../models");
const Family = db.families;

exports.create = (req, res) => {
  const family = {
    familyName: req.body.familyName,
    location: req.body.location,
    phoneNumber: req.body.phoneNumber,
    description: req.body.description,
    userId: req.body.userId
  };

  Family.create(family)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Family."
      });
    });
};

exports.findAll = (req, res) =>
  Family.findAll()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Families"
      })
    );

exports.update = (req, res) => {
  const id = req.params.id;

  Family.update(req.body, { where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "Family was updated successfully." });
      else
        res.send({
          message: `Cannot update Family with id=${id}. Maybe Family was not found or req.body is empty!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Error updating Family with id=" + id })
    );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Family.destroy({ where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "Family was deleted successfully!" });
      else
        res.send({
          message: `Cannot delete Family with id=${id}. Maybe Family wasn't found!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Couldn't delete Family with id=" + id })
    );
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Family.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Family with id=" + id
      });
    });
};

exports.getByUserId = (req, res) => {
  const userId = req.params.userId;

  Family.findAll({ where: { userId } })
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while retrieving Families by userId=" +
            userId
      })
    );
};
