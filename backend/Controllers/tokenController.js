'use strict';

const firebase = require('../db');
const Token = require('../Models/token');
const tokenRoutes = require('../Routes/tokenRoutes');
const firestore = firebase.firestore();

//Add new token
const addToken = async (req,res,next) => {
    try {
        const data = req.body;
        await firestore.collection('token').doc(data.id).set(data);
        res.send('Token was added')
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Get token
const getToken = async (req,res,next) => {
    try {
        const id = req.params.id;
        const token = await firestore.collection('token').doc(id);
        const data = await token.get();
        if(!data.exists) {
            res.status(404).send('Listing not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//Update token
const updateToken = async (req,res,next) => {
    try {
        const id = req.params.id;
        const data = req.body.data;
        const token = await firestore.collection('token').doc(id);
        await token.update(data);
        
    res.send('Token updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addToken,
    getToken,
    updateToken
}