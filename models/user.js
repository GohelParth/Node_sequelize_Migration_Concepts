'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here     

      // hasOne is use here for get record of orders by user id

      /*
      // for one-to-one
      User.hasOne(models.Order, {
        foreignKey: "user_id",// This is FK in order table
        as: 'User_Orders'
      })
      */

      // for one-to-many
      User.hasMany(models.Order, {
        foreignKey: "user_id",// This is FK in order table
        as: 'User_Orders'
      })
    }
  };
  User.init({
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  // User.sync({ alter: true });
  return User;
};