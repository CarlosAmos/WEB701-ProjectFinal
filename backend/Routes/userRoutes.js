const express = require('express');
const { addUser, getAllUsers, getUser, updateUser, deleteUser } = require('../Controllers/userController')

const router = express.Router();

router.post('/user', addUser);
router.get('/users', getAllUsers);
router.get('/user/:id',getUser);
router.patch('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);

module.exports = {
    routes: router
}