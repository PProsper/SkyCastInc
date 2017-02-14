'use strict';
module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define('Search', {
    username: DataTypes.STRING(32),
    timezone: DataTypes.STRING,
    summary: DataTypes.STRING,
    icon: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    hunidity: DataTypes.INTEGER,
    windspeed: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Search;
};