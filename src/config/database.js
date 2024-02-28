require('dotenv').config();
module.exports = {
  dialect: 'mariadb',
  database: process.env.DataBase,
  host: process.env.DataBase_HOST,
  port: process.env.DataBase_PORT,
  username: process.env.DataBase_USERNAME,
  password: process.env.DataBase_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updateAt:  'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',


}
