import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize(
  'larnu_demo',
  'larnu',
  'larnuisgold', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  define: {
    timestamps: false
  }
});

export default db;