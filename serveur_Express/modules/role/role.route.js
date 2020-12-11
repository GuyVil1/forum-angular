const express = require('express');
const RoleController = require('./role.controller');

const router = express.Router();

router.get('/', RoleController.getAllAction);

module.exports = router;