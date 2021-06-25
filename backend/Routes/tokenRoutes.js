const express = require('express');
const { addToken, getToken, updateToken, getAllTokens } = require('../Controllers/tokenController')

const router = express.Router();

router.post('/token', addToken);
router.get('/token/:id',getToken);
router.patch('/token/:id',updateToken);
router.get('/tokens',getAllTokens);

module.exports = {
    routes: router
}