export const getExpensesSchema = {
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          cost: { type: "number" },
        },
      },
    },
  },
};
