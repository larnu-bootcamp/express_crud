import { Sequelize } from "sequelize";

import _config from "../config/config.js";

const config = _config[process.env.ENV];
// create connection
console.log(config);
const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  },
  
);

export default db;