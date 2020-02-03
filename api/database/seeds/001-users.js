exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username:'admin', password:'admin'},
        {username:'lambda', password:'lambda'},
        {username:'dante', password:'dante'},
      ]);
    });
};
