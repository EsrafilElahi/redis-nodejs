const { User } = require("../db");
const UserView = require("../views/userView");

async function getUser(request, reply) {
  const userId = request.params.id;

  try {
    const user = await User.findByPk(userId);

    if (user) {
      const userData = UserView.renderUser(user);
      reply.send(userData);
    } else {
      reply.status(404).send("User not found");
    }
  } catch (error) {
    reply.status(500).send("Internal Server Error");
  }
}

module.exports = { getUser };
