const express = require('express');
const router = express.Router();
const userController = require('../src/userController')

/* GET users listing. */
router.get('/', userController.getAllUsers);

/* GET users listing. */
router.get('/:id', userController.getSingleUser);


module.exports = router;
