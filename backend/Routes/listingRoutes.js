const express = require('express');
const { addListing, getAllListings, getListing } = require('../Controllers/listingController');

const router = express.Router();

router.post('/listing', addListing);
router.get('/listings', getAllListings);
router.get('/listing/:id',getListing);

module.exports = {
    routes: router
}

