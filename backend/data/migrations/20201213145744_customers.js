exports.up = function (knex) {
  return knex.schema.createTable("customers", (tbl) => {
    tbl.increments();
    tbl.string("first_name");
    tbl.string("last_name");
    tbl.string("email").notNullable().unique();
    tbl.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("customers");
};
