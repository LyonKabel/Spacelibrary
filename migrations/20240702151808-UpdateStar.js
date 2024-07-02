'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Stars', 'galaxyId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Galaxies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Stars', 'galaxyId');
  }
};
