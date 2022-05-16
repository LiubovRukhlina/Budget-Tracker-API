const typeString = { type: "string" };

const expense = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    cost: { type: "number" },
  },
};

const headerSchema = {
  type: "object",
  required: ["token"],
  properties: {
    token: typeString,
  },
};

export const getExpensesSchema = {
  headers: headerSchema,
  response: {
    200: {
      type: "array",
      items: expense,
    },
  },
};

export const getExpenseSchema = {
  headers: headerSchema,
  params: {
    id: { type: "number" },
  },
  response: {
    200: expense,
  },
};

export const addExpenseSchema = {
  headers: headerSchema,
  body: {
    type: "object",
    required: ["name", "cost"],
    properties: {
      name: typeString,
      cost: { type: "number" },
    },
  },
  response: {
    200: {
      id: { type: "number" },
    },
  },
};

export const updateExpenseSchema = {
  headers: headerSchema,
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
  headers: headerSchema,
  params: {
    id: { type: "number" },
  },
  response: {
    200: typeString,
  },
};
