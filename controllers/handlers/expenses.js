import { expenses } from "../../cloud/expenses.js";

export const getExpensesHandler = (req, reply) => {
  const result = expenses;
  return result;
};

export const getExpenseHandler = (req, reply) => {
  const { id } = req.params;

  const expense = expenses.filter((expense) => {
    return expense.id === id;
  })[0];

  if (!expense) {
    return reply.status(404).send({
      errorMsg: "Expense not found",
    });
  }

  return reply.send(expense);
};

export const addExpenseHandler = async (req, reply) => {
  const { name, cost } = req.body;

  const id = expenses.length + 1;
  expenses.push({ id, name, cost });

  return { id };
};

export const updateExpenseHandler = (req, reply) => {
  const { name, cost } = req.body;
  const { id } = req.params;

  const expense = expenses.filter((expense) => {
    return expense.id === id;
  })[0];

  if (!expense) {
    return reply.status(404).send(new Error("Expense doesn't exist"));
  }

  expense.name = name;
  expense.cost = cost;

  return reply.send("Expense updated");
};

export const deleteExpenseHandler = (req, reply) => {
  const { id } = req.params;

  const expenseIndex = expenses.findIndex((expense) => {
    return expense.id === id;
  });

  if (expenseIndex === -1) {
    return reply.status(404).send(new Error("Expense doesn't exist"));
  }

  expenses.splice(expenseIndex, 1);

  return reply.send("Expense deleted");
};
