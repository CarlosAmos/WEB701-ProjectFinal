const express = require('express');
const { addToken, getToken, updateToken } = require('../Controllers/tokenController')

const router = express.Router();

router.post('/token', addToken);
router.get('/token/:id',getToken);
router.patch('/user/:id',updateToken);


module.exports = {
    routes: router
}