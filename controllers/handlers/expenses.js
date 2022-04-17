export const getExpensesHandler = (req, reply) => {
  const result = [
    { id: 12, name: "cat", cost: 100 },
    { id: 13, name: "cucumber", cost: 40 },
    { id: 14, name: "laptop", cost: 1150 },
  ];

  return result;
};
