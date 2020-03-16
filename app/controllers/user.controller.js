const db = require("../models");
const User = db.users;

exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  if (req.body.password != req.body.confirmPassword) {
    res.status(400).send({
      message: "Passwords didn't match each other"
    });
    return;
  }

  const user = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    role: req.body.role
  };

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the User."
      });
    });
};

exports.findAll = (req, res) =>
  User.findAll()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Users"
      })
    );

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, { where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "User was updated successfully." });
      else
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Error updating User with id=" + id })
    );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({ where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "User was deleted successfully!" });
      else
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User wasn't found!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Couldn't delete User with id=" + id })
    );
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};
