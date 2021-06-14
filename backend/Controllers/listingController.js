'use strict';

const firebase = require('../db');
const Listing = require('../Models/listing');
const firestore = firebase.firestore();

//Add listing to database
const addListing = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('listing').doc().set(data);
        res.send('Listing saved successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Get all Listings
const getAllListings = async (req, res, next) => {
    try {
        const listings = await firestore.collection('listing');
        const data = await listings.get();
        const listingsArray = [];
        if(data.empty) {
            res.status(404).send('No listings found');
        }else {
            data.forEach(doc => {
                const listing = new Listing(
                    doc.id,
                    doc.data().listingName,
                    doc.data().donator,
                    doc.data().itemQuantity,
                    doc.data().items,
                    doc.data().description,
                    doc.data().donatorID
                );
                listingsArray.push(listing);
            });
            res.send(listingsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Get a listing with ID
const getListing = async (req, res, next) => {
    try {
        const id = req.params.id;
        const listing = await firestore.collection('listing').doc(id);
        const data = await listing.get();
        if(!data.exists) {
            res.status(404).send('Listing not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Update a listing with ID
const updateListing = async (req, res, next) => {
try {
    const id = req.params.id;
    const data  = req.body;
    const listing = await firestore.collection('listing').doc(id);
    await listing.update(data);
    res.send('Listing record updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Delete listing with ID
const deleteListing = async (req,res,next) => {
    try {
        const id = req.params.id;
        await firestore.collection('listing').doc(id).delete();
        res.send('Listing deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addListing,
    getAllListings,
    getListing,
    updateListing,
    deleteListing
}