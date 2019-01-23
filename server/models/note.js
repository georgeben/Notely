'use strict';
module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  note.associate = function(models) {
    // associations can be defined here
  };
  return note;
};