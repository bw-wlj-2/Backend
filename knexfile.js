// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './api/database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './api/database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './api/database/seeds' 
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
