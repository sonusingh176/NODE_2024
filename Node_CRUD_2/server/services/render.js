const axios = require("axios");

exports.homeRoutes = (req, res) => {
  //make a get request to api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      //console.log(response)
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.addUser = (req, res) => {
  res.render("add_user");
};

exports.updateUser = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
