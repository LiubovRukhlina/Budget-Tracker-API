const typeString = { type: "string" };

const expense = {
  type: "object",
  properties: {
    _id: { type: "string" },
    name: { type: "string" },
    cost: { type: "number" },
    userID: { type: "string" },
    category: { type: "string" },
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

export const getUserExpensesSchema = {
  headers: headerSchema,
  params: {
    userID: { type: "string" },
  },
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
    id: { type: "string" },
  },
  response: {
    200: expense,
  },
};
//TODO: add category
export const addExpenseSchema = {
  headers: headerSchema,
  body: {
    type: "object",
    required: ["name", "cost", "category"],
    properties: {
      name: typeString,
      cost: { type: "number" },
    },
  },
  response: {
    200: {
      id: { type: "string" },
    },
  },
};
//TODO: add category
export const updateExpenseSchema = {
  headers: headerSchema,
  body: {
    type: "object",
    required: ["name", "cost", "category"],
    properties: {
      name: typeString,
      cost: { type: "number" },
    },
  },
  params: {
    id: { type: "string" },
  },
  response: {
    200: typeString,
  },
};

export const deleteExpenseSchema = {
  headers: headerSchema,
  params: {
    id: { type: "string" },
  },
  response: {
    200: typeString,
  },
};
