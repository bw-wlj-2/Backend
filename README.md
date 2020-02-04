## Weight Lifting Backend

# Backend Api- https://weight-lifting-backend.herokuapp.com/

## Dependencies

- node.js
- express
- knex
- sqlite3
- pg
- jsonwebtoken
- nodemon
- dotenv
- supertest
- jest

## User Table

| field    | data type        | metadata                                            |
| :------- | :--------------- | :-------------------------------------------------- |
| id       | unsigned integer | primary key, auto-increments, generated by database |
| username | string           | required, unique                                    |
| password | string           | required                                            |

# Endpoints

- `POST /api/auth/register` - creates an account
- `POST /api/auth/login` - login

## Exercise Table

| field  | data type        | metadata                                            |
| :----- | :--------------- | :-------------------------------------------------- |
| id     | unsigned integer | primary key, auto-increments, generated by database |
| name   | string           | required, unique                                    |
| region | string           | required                                            |

# Endpoints

- `GET /api/exercises` - gets a list of all the exercises
- `GET /api/exercises/:id` - gets a single exercise
- `GET /api/exercises/regions/:region` - gets all exercises for a certain region
- `POST /api/exercises` - adds a new exercise
- `PUT /api/exercises/:id` - can update an exercise
- `DELETE /api/exercises/:id` - deletes a single exercise

# Example

{
"name": "Pull Ups",
"region": "arms"
}
