'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderMethod.belongsTo(models.Order, {
        foreignKey: "order_id",
      })

      OrderMethod.belongsTo(models.PaymentMethod, {
        foreignKey: "method_id",
      })
    }
  };
  OrderMethod.init({
    user: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    method_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OrderMethod',
  });
  // OrderMethod.sync({ alter: true });
  return OrderMethod;
};