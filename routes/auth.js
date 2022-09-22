// Import express
import express from "express";
// Import School Controller
import { register, login } from "../controllers/auth.js";
 
 // Init express router
const router = express.Router();
 
router.post('/auth/login', login);
router.post('/auth/register', register);
 
// export router
export default router;