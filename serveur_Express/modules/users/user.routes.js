const express = require('express');
const userController = require('./user.controller');
const UserController = require('./user.controller');

const router = express.Router();

console.log(UserController.getAllAction);
router.get('/', UserController.getAllAction);
router.get('/:id([0-9]+)/roles', UserController.getRolesByUserId);
// router.get('/:id([0-9]+)/username', UserController.getRolesByUserId);

router.post('/create', UserController.createAction);

router.put('/:id([0-9]+)', UserController.updateAction);
router.patch('/:id([0-9]+)/role', UserController.addRolesToUserAction);

module.exports = router;