const { getUser } = require("../controllers/userController");

function userRoutes(app) {
  app.get("/users/:id", getUser);
}

module.exports = userRoutes;
