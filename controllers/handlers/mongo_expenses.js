import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

export async function getExpenses(req, reply) {
  const expenses = this.mongo.db.collection("Expenses");
  const userID = req.user._id;
  const result = await expenses.find({ userID }).toArray();
  console.log(result);
  reply.send(result);
}

export async function getExpense(req, reply) {
  const expenses = this.mongo.db.collection("Expenses");
  const result = await expenses.findOne({ _id: new ObjectId(req.params.id) });
  if (result) {
    return reply.send(result);
  }
  reply.code(500).send({ message: "Expense not found" });
}

export async function addExpense(req, reply) {
  const expenses = this.mongo.db.collection("Expenses");
  const { name, cost, category } = req.body;
  const userID = req.user._id;
  const data = { name, cost, userID, category };
  //const id = expenses.length + 1;
  const result = await expenses.insertOne(data);
  reply.code(201).send(result);
}

export async function updateExpense(req, reply) {
  const expenses = this.mongo.db.collection("Expenses");
  const { name, cost, category } = req.body;
  const data = {
    $set: {
      name,
      cost,
      category,
    },
  };
  const result = await expenses.updateOne(
    { _id: ObjectId(req.params.id) },
    data,
    { upsert: true }
  );
  reply.send({
    message: `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
  });
}

export async function deleteExpense(req, reply) {
  const expenses = this.mongo.db.collection("Expenses");
  const result = await expenses.deleteOne({ _id: ObjectId(req.params.id) });
  if (result.deletedCount) return reply.send("Deleted");
  reply.send("Could not delete. ");
}
