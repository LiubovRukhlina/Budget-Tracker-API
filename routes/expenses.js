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

import {
  getExpenses,
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../controllers/handlers/mongo_expenses.js";

import { verifyToken } from "../controllers/auth/userAuth.js";
import fastifyAuth from "fastify-auth";

const getExpensesOpts = {
  schema: getExpensesSchema,
  handler: getExpenses,
};

const getExpenseOpts = {
  schema: getExpenseSchema,
  handler: getExpense,
};

const addExpenseOpts = {
  schema: addExpenseSchema,
  handler: addExpense,
};

const updateExpenseOpts = {
  schema: updateExpenseSchema,
  handler: updateExpense,
};

const deleteExpenseOpts = {
  schema: deleteExpenseSchema,
  handler: deleteExpense,
};

const expenseRoutes = async (fastify, options, done) => {
  fastify.register(fastifyAuth).after(() => privateExpenseRoutes(fastify));
};

const privateExpenseRoutes = (fastify) => {
  fastify.get("/api/expenses", {
    preHandler: fastify.auth([verifyToken]),
    ...getExpensesOpts,
  });
  fastify.get("/api/expenses/:id", {
    preHandler: fastify.auth([verifyToken]),
    ...getExpenseOpts,
  });
  fastify.post("/api/expenses/new", {
    preHandler: fastify.auth([verifyToken]),
    ...addExpenseOpts,
  });
  fastify.put("/api/expenses/edit/:id", {
    preHandler: fastify.auth([verifyToken]),
    ...updateExpenseOpts,
  });
  fastify.delete("/api/expenses/:id", {
    preHandler: fastify.auth([verifyToken]),
    ...deleteExpenseOpts,
  });
};

export default expenseRoutes;
