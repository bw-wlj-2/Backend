const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findByRegion,
  findById,
  findByUserId,
  update,
  remove,
};

function findByUserId(id) {
  console.log("This is the user ID ==>", id);
  return db
    .select()
    .from("exercises")
    .where("user_id", id);
  // return db("users")
  //   .join("exercises", "users.id", "exercises.user_id")
  //   .select("exercises.*");
  // return db("exercises")
  //   .join("users", "exercises.user_id", "users.id")
  //   .select("exercises.*");
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
    .then( () => findById( id ) );
}

function remove(id) {
  return db("exercises")
    .where({ id })
    .delete();
}
