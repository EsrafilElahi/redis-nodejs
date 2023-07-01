const { promisify } = require("util");

function redisRoutes(app) {
  // Set key-value pair in Redis
  app.post("/redis/set", async (request, reply) => {
    const { key, value } = request.body;

    try {
      const setAsync = promisify(app.redis.set).bind(app.redis);
      await setAsync(key, value);
      reply.send("Key-value pair set in Redis");
    } catch (error) {
      reply.status(500).send("Internal Server Error");
    }
  });

  // Get value from Redis using key
  app.get("/redis/get/:key", async (request, reply) => {
    const key = request.params.key;

    try {
      const getAsync = promisify(app.redis.get).bind(app.redis);
      const value = await getAsync(key);
      reply.send(value);
    } catch (error) {
      reply.status(500).send("Internal Server Error");
    }
  });
}

module.exports = redisRoutes;