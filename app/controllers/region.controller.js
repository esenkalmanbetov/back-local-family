const db = require("../models");
const Region = db.regions;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  console.log("aaaaaa: ", req.body);

  const region = {
    title: req.body.title,
    countryId: req.body.countryId
  };

  Region.create(region)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Region."
      });
    });
};

exports.findAll = (req, res) =>
  Region.findAll()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Regions"
      })
    );

exports.update = (req, res) => {
  const id = req.params.id;

  Region.update(req.body, { where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "Region was updated successfully." });
      else
        res.send({
          message: `Cannot update Region with id=${id}. Maybe Region was not found or req.body is empty!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Error updating Region with id=" + id })
    );
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Region.destroy({ where: { id } })
    .then(num => {
      if (num == 1) res.send({ message: "Region was deleted successfully!" });
      else
        res.send({
          message: `Cannot delete Region with id=${id}. Maybe Region wasn't found!`
        });
    })
    .catch(err =>
      res.status(500).send({ message: "Couldn't delete Region with id=" + id })
    );
};

exports.getByCountryId = (req, res) => {
  const countryId = req.params.countryId;

  Region.findAll({ where: { countryId } })
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while retrieving Regions by countryId=" +
            countryId
      })
    );
};
