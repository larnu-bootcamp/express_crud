// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
import School from "./school.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Student = db.define('student', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  schoolId: {
    type: DataTypes.INTEGER,
    field: 'school_id',
    references: {
      model: School,
      key: 'id'
    }
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_on'
  }
},{
  tableName: 'student'
});
 
// Export model Student
export default Student;