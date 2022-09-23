'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('school', {
      // Define attributes
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING
      },
      createdOn: {
        type: Sequelize.DATE,
        field: 'created_on',
        defaultValue: Sequelize.NOW
      }
    },{
      tableName: 'school'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('school');
  }
};