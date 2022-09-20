// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const School = db.define('School', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  createdOn: {
    type: DataTypes.DATE,
    field: 'created_on',
    defaultValue: Sequelize.NOW
  }
},{
  tableName: 'school'
});
 
// Export model School
export default School;