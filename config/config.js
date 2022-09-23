import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DB_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DB_NAME,
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_TEST_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};

export default config;