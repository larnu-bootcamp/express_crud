import { Sequelize } from "sequelize";

import _config from "../config/config.js";

const env = process.env.ENV;
const config = _config[env];

// create connection
const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'postgres',
    logging: config.logging,
    define: {
      timestamps: false
    }
  },
  
);

export default db;