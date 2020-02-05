exports.up = function(knex) {
  return knex.schema.createTable("exercises", (exercises) => {
    exercises.increments();
    exercises
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    exercises.string("name").notNullable();
    exercises.string("region").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("exercises");
};
