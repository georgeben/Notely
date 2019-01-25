'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('notes', 'user_id',
     {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('notes', 'user_id');
  }
};