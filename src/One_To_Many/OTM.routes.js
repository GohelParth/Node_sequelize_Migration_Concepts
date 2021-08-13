const express = require('express');
const route = express.Router();
const Controllers = require('../One_To_Many/OTM.controllers');
const { LINK } = require('../Utils/intarnalLikns');

//endpoint url
const { ONE_TO_MANY_HASMANY } = LINK;

// Destructure Controllers 
const { getUserHasmanyOrders } = Controllers;

//define route 
route.get(ONE_TO_MANY_HASMANY, getUserHasmanyOrders)

module.exports = route;