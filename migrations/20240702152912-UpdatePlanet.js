// Example migration to add 'starId' column to 'planets' table
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Planets', 'starId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Stars',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Planets', 'starId');
  }
};
