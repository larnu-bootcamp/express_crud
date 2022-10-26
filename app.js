// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
// Import router
import Router from "./routes/routes.js";
import AuthRouter from "./routes/auth.js";
import db from "./config/database.js";
import helmet from "helmet";

// Init express
const app = express();

console.log(process.env.ENV);

// use express json
app.use(express.json());

//set appropriate HTTP headers that help protect your app from well-known web vulnerabilities
app.use(helmet());

// use cors
app.use(cors());
 
//Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(Router);
app.use(AuthRouter);

export default app;