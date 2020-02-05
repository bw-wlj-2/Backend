const db = require("../api/database/dbConfig.js");

module.exports = {
  add,
  find,
  findByRegion,
  findById,
  findByUserId,
  update,
  remove,
};

function findByUserId(userId) {
  console.log("This is the user ID ==>", userId);
  return db("exercises")
    .join("users", "users.id", "exercises.userId")
    .where("exercises.userId")
    .select("exercises.*");
}

function find() {
  return db("exercises").select("*");
}

function findByRegion(region) {
  return db("exercises")
    .select("name")
    .where({ region });
}

function findById(id) {
  return db("exercises")
    .select("name", "region")
    .where({ id })
    .first();
}

function add(exercise) {
  return db("exercises")
    .insert(exercise)
    .then((ids) => {
      const [id] = ids;
      return db("exercises")
        .where({ id })
        .first();
    });
}

function update(id, changes) {
  return db("exercises")
    .where("id", id)
    .update(changes)
    .then((ids) => {
      const [id] = ids;
      return db("exercises")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("exercises")
    .where({ id })
    .delete();
}
