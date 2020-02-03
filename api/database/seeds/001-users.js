const bc= require('bcryptjs')

exports.seed = function(knex) {
  const pass= bc.hashSync('pass', 8)
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username:'admin', password:pass},
        {username:'lambda', password:pass},
        {username:'dante', password:pass},
      ]);
    });
};
