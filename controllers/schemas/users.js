const typeString = { type: "string" };

export const getUsersSchema = {
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          username: typeString,
          email: typeString,
          budget: { type: "number" },
        },
      },
    },
  },
};
export const getUserSchema = {
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "number" },
        username: typeString,
        email: typeString,
        budget: { type: "number" },
      },
    },
  },
};

export const registerUserSchema = {
  body: {
    type: "object",
    required: ["username", "email", "password", "budget"],
    properties: {
      username: typeString,
      email: typeString,
      password: typeString,
      budget: { type: "number" },
    },
  },
  response: {
    200: typeString,
  },
};

export const loginUserSchema = {
  body: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: typeString,
      password: typeString,
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        _id: typeString,
        token: typeString,
        budget: { type: "number" },
      },
    },
  },
};

export const updateUserSchema = {
  body: {
    type: "object",
    required: ["budget"],
    properties: {
      budget: { type: "number" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        message: { type: "string" },
      },
    },
  },
};
