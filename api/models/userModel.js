const db= require('../database/dbConfig')

module.exports={
    add,
    get,
    getBy,
    getById
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
        .select('id', 'username')
        .where({id})
        .first()
}