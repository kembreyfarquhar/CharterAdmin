const transactions = require("../../generateFakeData/transactions");

exports.seed = function (knex, Promise) {
  return knex("transactions").then(() => {
    return knex("transactions").insert(transactions);
  });
};
