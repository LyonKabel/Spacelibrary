'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    static associate(models) {
      // Belongs To Many Stars association
      Planet.belongsToMany(models.Star, { through: 'PlanetStar', foreignKey: 'planetId', otherKey: 'starId', as: 'stars'});
    }
  }
  Planet.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Planet',
  });
  return Planet;
};
