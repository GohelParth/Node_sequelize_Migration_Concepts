require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.UN,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": process.env.UN,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "production": {
    "username": process.env.UN,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }
}