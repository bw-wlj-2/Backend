const bc= require('bcryptjs')

exports.seed = function(knex) {
  const pass= bc.hashSync('pass', 8)
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username:'admin', password:pass, location:'place', avatarUrl:'afafdafa', name:'fake'},
        {username:'lambda', password:pass, location:'place', avatarUrl:'afafdafa', name:'fake'},
        {username:'dante', password:pass, location:'place', avatarUrl:'afafdafa', name:'fake'},
      ]);
    });
};
