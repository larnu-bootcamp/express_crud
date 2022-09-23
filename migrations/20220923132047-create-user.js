'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
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
      password: {
        type: Sequelize.STRING
      },
      createdOn: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_on'
      }
    },{
      tableName: 'user'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};