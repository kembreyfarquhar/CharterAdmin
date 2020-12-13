const customers = require("../../generateFakeData/customers");

exports.seed = function (knex, Promise) {
  return knex("customers").then(() => {
    return knex("customers").insert(customers);
  });
};
