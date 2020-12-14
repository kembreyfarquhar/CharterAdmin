const db = require("../../data/dbConfig");

module.exports = {
  getAll,
  getById,
};

function getAll() {
  return db("customers").select("*");
}

function getById(id) {
  return db("customers").where({ id }).first();
}
