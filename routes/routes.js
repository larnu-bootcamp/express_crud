// Import express
import express from "express";
// Import School Controller
import { 
    getSchools,
    getSchoolById,
    createSchool,
    updateSchool,
    deleteSchool
 } from "../controllers/schools.js";
import { isUserAuthenticated } from "../middlewares/auth.js";
 
 // Init express router
const router = express.Router();
 
// Route get all schools
router.get('/schools', [isUserAuthenticated], getSchools);
// Route get product by id
router.get('/schools/:id', isUserAuthenticated, getSchoolById);
// Route create a new product
router.post('/schools', isUserAuthenticated, createSchool);
// Route update product by id
router.put('/schools/:id', isUserAuthenticated, updateSchool);
// Route delete product by id
router.delete('/schools/:id', isUserAuthenticated, deleteSchool);
 
// export router
export default router;