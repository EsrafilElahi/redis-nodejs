const fastify = require("fastify");
const routes = require("./routes");

const app = fastify();

// Register routes
app.register(routes);

// Start the Fastify server
app.listen(3000, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
  console.log("Server is running on port 3000");
});
