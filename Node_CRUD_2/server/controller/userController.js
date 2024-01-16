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
      // res.send(data);
      res.redirect('/add-user')
    })
    .catch((err) => {
      res.status(500).send(err.message || "some error occured");
    });
};

//retrieve and return all users /retrive and return a single user

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user withh id" + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occured while retriving user info",
        });
      });
  }
};

//Update user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update userInformation" });
    });
};

//delete user
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id} ,Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successful!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not Delete=" + id });
    });
};
