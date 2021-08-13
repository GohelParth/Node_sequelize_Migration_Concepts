const express = require('express');
const route = express.Router();
const Controllers = require('../One_To_One/OTO.controllers');
const { LINK } = require('../Utils/intarnalLikns');

// endpoint url
const { ONE_TO_ONE_HASONE, ONE_TO_ONE_BELONGSTO } = LINK;

// Destructure Controllers
const { getUserHasoneOrder, getOrderbelongsToUser } = Controllers;

// define route 
route.get(ONE_TO_ONE_HASONE, getUserHasoneOrder)

route.get(ONE_TO_ONE_BELONGSTO, getOrderbelongsToUser)

module.exports = route;