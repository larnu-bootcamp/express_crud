import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const config = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DB_NAME,
    host: process.env.DB_DEV_HOST,
    logging: true,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER || 'larnu',
    password: process.env.DB_TEST_PASSWORD || 'larnuisgold',
    database: process.env.DB_TEST_DB_NAME || 'larnu_demo_test',
    host: process.env.DB_TEST_HOST || '127.0.0.1',
    port: process.env.DB_TEST_PORT || 5432,
    logging: false,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'postgres',
  },
};

export default config;