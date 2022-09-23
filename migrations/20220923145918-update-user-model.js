'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'user', // table name
        'last_name', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('user', 'last_name'),
    ]);
  },
};