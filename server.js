import Fastify from "fastify";
import expenseRoutes from "./routes/expenses.js";

const PORT = process.env.PORT || 5000;

const fastify = Fastify({
  logger: true,
});

fastify.register(expenseRoutes);

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
