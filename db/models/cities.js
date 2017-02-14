'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cities = sequelize.define('Cities', {
    city: DataTypes.STRING(32),
    growth_from_200_to_2013: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    population: DataTypes.STRING,
    rank: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cities;
};