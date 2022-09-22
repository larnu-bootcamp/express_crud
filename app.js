// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";
import AuthRouter from "./routes/auth.js";
 
// Init express
const app = express();

// use express json
app.use(express.json());

// var corsOptions = 
//   origin: 'http://example.com',
// }

// use cors
app.use(cors());
 
// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(Router);
app.use(AuthRouter);

const PORT = process.env.PORT || 4000;
 
// listen on port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));