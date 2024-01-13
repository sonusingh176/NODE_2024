var Userdb = require("../model/modelSchems");

//create and save new user

exports.create = (req, res) => {
    console.log(req.body);
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message||"some error occured");
    });
};

//retrieve and return all users /retrive and return a single user

exports.find = (req, res) => {};

//Update user
exports.update = (req, res) => {};

//delete user
exports.delete = (req, res) => {};
