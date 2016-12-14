// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DEV_DB_URL
  },


  production: {
    client: 'postgresql',
    connection: process.env.PROD_DB_URL + '?ssl=true'
  }

};
