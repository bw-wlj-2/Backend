exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(user) {
        user.string('location')
        user.string('avatarUrl')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(user) {
        user.dropColumn('location');
        user.dropColumn('avatarUrl');
    });
};
