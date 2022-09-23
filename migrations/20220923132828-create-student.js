'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student', {
      // Define attributes
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      schoolId: {
        type: Sequelize.INTEGER,
        field: 'school_id',
        references: {
          model: 'school',
          key: 'id'
        }
      },
      createdOn: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_on'
      }
    },{
      tableName: 'student'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('student');
  }
};