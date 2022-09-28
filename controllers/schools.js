// Import School Model
import School from "../models/school.js";
 
// Get all schools
export const getSchools = async (req, res) => {
    try {
        const school = await School.findAll();
        res.send(school);
    } catch (err) {
        console.log(err);
    }
}
 
// Get school by id
export const getSchoolById = async (req, res) => {
    try {
        const school = await School.findByPk(req.params.id);
        if (!school) {
            res.status(404).send({
                message: `No school found with id ${req.params.id}`
            });
        }
        res.send(school);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new school
export const createSchool = async (req, res) => {
    try {
        const school = await School.create(req.body);
        res.status(201).json({
            "message": "School Created",
            "id": school.id
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update school by id
export const updateSchool = async (req, res) => {
    try {
        const school = await School.findByPk(req.params.id);
        if (!school) {
            res.status(404).send({
                message: `No school found with id ${req.params.id}`
            });
            return;
        }
        await School.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "School Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete school by id
export const deleteSchool = async (req, res) => {
    try {
        const school = await School.findByPk(req.params.id);
        if (!school) {
            res.status(404).send({
                message: `No school found with id ${req.params.id}`
            });
            return;
        }
        await School.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "School Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}