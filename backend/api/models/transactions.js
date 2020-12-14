const db = require("../../data/dbConfig");

module.exports = {
  getAll,
  getById,
  getFull,
};

function getAll() {
  return db("transactions").select("*");
}

function getById(id) {
  return db("transactions").where({ id }).first();
}

async function getFull() {
  return db("transactions")
    .innerJoin("customers", "transactions.customer_id", "=", "customers.id")
    .select(
      "transactions.id",
      "transactions.customer_id",
      "transactions.date",
      "transactions.total",
      "customers.first_name",
      "customers.last_name",
      "customers.email"
    );
}
