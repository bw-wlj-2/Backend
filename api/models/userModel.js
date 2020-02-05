const db= require('../database/dbConfig')

module.exports={
    add,
    get,
    getBy,
    getById,
    remove,
    update
}

function add(user){
    return db('users')
        .insert(user, 'id')
}

function get(){
    return db('users').select('username')
}

function getBy(filter){
    return db('users')
        .select('id', 'username', 'password')
        .where(filter)
}

function getById(id){
    return db('users')
        .where({id: id})
        .first()
}

function remove(user){
    return db('users')
        .delete(user.id)
}

function update(id, changes) {
    return db('users')
      .where('id', id)
      .update(changes)
      .then((ids) => {
        const [id] = ids;
        return db('users')
          .where({ id })
          .first();
      });
  }