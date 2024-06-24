'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    static associate(models) {
      // Belongs To Galaxy association
      Star.belongsTo(models.Galaxy, { foreignKey: 'galaxyId', as: 'galaxy' });

      Star.hasMany(models.Planet, { foreignKey: 'starId', as: 'planets' });
    }
  }
  Star.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Star',
  });
  return Star;
};
