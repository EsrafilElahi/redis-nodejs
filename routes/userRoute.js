const fastify = require("fastify");
const UserController = require("../controllers/userController");

const router = fastify();
const userController = new UserController();

// Define the user route
router.get("/:id", userController.getUser);

module.exports = router;
