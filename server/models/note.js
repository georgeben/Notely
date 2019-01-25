'use strict';
module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    } ,
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shared: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {});
  note.associate = function(models) {
    // associations can be defined here
    note.belongsTo(models.user, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    })
  };
  return note;
};