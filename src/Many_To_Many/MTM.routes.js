const express = require('express');
const route = express.Router();
const Controllers = require('../Many_To_Many/MTM.controllers');
const { LINK } = require('../Utils/intarnalLikns');

//endpoint url
const { MANY_TO_MANY_BTM, MANY_TO_MANY_BELONGSTOMANY } = LINK;

// Destructure Controllers 
const { Orders_belongsToMany_paymentMethod, PaymentMethods_belongsToMany_Order } = Controllers;

//define route 
route.get(MANY_TO_MANY_BTM, Orders_belongsToMany_paymentMethod)

route.get(MANY_TO_MANY_BELONGSTOMANY, PaymentMethods_belongsToMany_Order)

module.exports = route;