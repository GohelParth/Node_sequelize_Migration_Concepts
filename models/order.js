'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        as: 'Username'
      });

      Order.belongsToMany(models.PaymentMethod, {
        through: 'OrderMethod',
        foreignKey: 'method_id'
      });
    }
  };
  Order.init({
    items: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',

  });
  // Order.sync({ alter: true });
  return Order;
};