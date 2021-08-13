'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentMethod.belongsToMany(models.Order, {
        through: 'OrderMethod',
        foreignKey: 'order_id'
      });
    }
  };
  PaymentMethod.init({
    methods: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentMethod',
  });
  return PaymentMethod;
};