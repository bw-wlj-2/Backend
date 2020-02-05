exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(user) {
        user.string('name')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(user) {
        user.dropColumn('name');
    });
};