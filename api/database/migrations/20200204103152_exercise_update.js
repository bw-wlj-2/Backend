exports.up = function(knex, Promise) {
  return knex.schema.table("exercises", (exercises) => {
    exercises.integer("current_pounds");
    exercises.integer("reps");
    exercises.string("date_completed", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("exercises", (exercises) => {
    exercises.dropColumn("date_completed");
    exercises.dropColumn("reps");
    exercises.dropColumn("current_pounds");
  });
};
