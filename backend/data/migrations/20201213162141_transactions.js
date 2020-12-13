exports.up = function (knex) {
  return knex.schema.createTable("transactions", (tbl) => {
    tbl.increments();
    tbl
      .integer("customer_id")
      .notNullable()
      .references("id")
      .inTable("customers")
      .onUpdate("cascade")
      .onDelete("cascade");
    tbl.datetime("date").notNullable();
    tbl.decimal("total", null).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("transactions");
};
