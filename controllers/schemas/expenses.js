const typeString = { type: "string" };

const expense = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    cost: { type: "number" },
  },
};

export const getExpensesSchema = {
  response: {
    200: {
      type: "array",
      items: expense,
    },
  },
};

export const getExpenseSchema = {
  params: {
    id: { type: "number" },
  },
  response: {
    200: expense,
  },
};

export const addExpenseSchema = {
  body: {
    type: "object",
    required: ["name", "cost"],
    properties: {
      name: typeString,
      cost: { type: "number" },
    },
  },
  response: {
    200: typeString,
  },
};

export const updateExpenseSchema = {
  body: {
    type: "object",
    required: ["name", "cost"],
    properties: {
      name: typeString,
      cost: { type: "number" },
    },
  },
  params: {
    id: { type: "number" },
  },
  response: {
    200: typeString,
  },
};

export const deleteExpenseSchema = {
  params: {
    id: { type: "number" },
  },
  response: {
    200: typeString,
  },
};
