const express = require('express');
const { addBene, getAllBene, getBene, updateBene, deleteBene } = require('../Controllers/beneController')

const router = express.Router();

router.post('/bene', addBene);
router.get('/benes', getAllBene);
router.get('/bene/:id',getBene);
router.patch('/bene/:id',updateBene);
router.delete('/bene/:id',deleteBene);

module.exports = {
    routes: router
}