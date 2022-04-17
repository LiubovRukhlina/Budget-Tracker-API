import { getExpensesSchema } from "../controllers/schemas/expenses.js";
import { getExpensesHandler } from "../controllers/handlers/expenses.js";

const getExpensesOpts = {
  schema: getExpensesSchema,
  handler: getExpensesHandler,
};

const expenseRoutes = async (fastify, options, done) => {
  fastify.get("/expenses", getExpensesOpts);
};

export default expenseRoutes;
