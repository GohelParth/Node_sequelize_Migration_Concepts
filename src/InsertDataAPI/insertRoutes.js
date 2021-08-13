const express =require('express');
const route = express.Router();
const {InsertUser,AddOrder} = require('../InsertDataAPI/Controllers')
const {LINK} = require('../Utils/intarnalLikns');

const {USER,ORDER} = LINK;

route.post(USER,InsertUser)

route.post(ORDER,AddOrder)

module.exports = route;