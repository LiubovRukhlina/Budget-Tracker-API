import {
  getExpensesSchema,
  getExpenseSchema,
  addExpenseSchema,
  updateExpenseSchema,
  deleteExpenseSchema,
} from "../controllers/schemas/expenses.js";
import {
  getExpensesHandler,
  getExpenseHandler,
  addExpenseHandler,
  updateExpenseHandler,
  deleteExpenseHandler,
} from "../controllers/handlers/expenses.js";

const getExpensesOpts = {
  schema: getExpensesSchema,
  handler: getExpensesHandler,
};

const getExpenseOpts = {
  schema: getExpenseSchema,
  handler: getExpenseHandler,
};

const addExpenseOpts = {
  schema: addExpenseSchema,
  handler: addExpenseHandler,
};

const updateExpenseOpts = {
  schema: updateExpenseSchema,
  handler: updateExpenseHandler,
};

const deleteExpenseOpts = {
  schema: deleteExpenseSchema,
  handler: deleteExpenseHandler,
};

const expenseRoutes = async (fastify, options, done) => {
  fastify.get("/api/expenses", getExpensesOpts);
  fastify.get("/api/expenses/:id", getExpenseOpts);
  fastify.post("/api/expenses/new", addExpenseOpts);
  fastify.put("/api/expenses/edit/:id", updateExpenseOpts);
  fastify.delete("/api/expenses/:id", deleteExpenseOpts);
};

export default expenseRoutes;
