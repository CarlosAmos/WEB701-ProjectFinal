const express = require('express');
const { addListing, getAllListings, getListing, updateListing, deleteListing } = require('../Controllers/listingController');

const router = express.Router();

router.post('/listing', addListing);
router.get('/listings', getAllListings);
router.get('/listing/:id',getListing);
router.patch('/listing/:id',updateListing);
router.delete('/listing/:id',deleteListing);

module.exports = {
    routes: router
}

