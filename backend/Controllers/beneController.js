'use strict';

const firebase = require('../db');
const User = require('../Models/user');
const beneRoutes = require('../Routes/beneRoutes');
const firestore = firebase.firestore();

//Add user to database
const addBene = async (req,res,next) => {
    try {
        const data = req.body;
        await firestore.collection('bene').doc(data.emailAddress).set(data);
        res.send('User added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Get All users
const getAllBene = async (req,res,next) => {
    try {
        const benes = await firestore.collection('bene');
        const data = await beneRoutes.get();
        const usersArray = [];
        if(data.empty) {
            res.status(404).send('No user found');
        } else {
            data.forEach(doc => {
                const bene = new User(
                    doc.id,
                    doc.data().fullName,
                    doc.data().emailAddress,
                    doc.data().password,
                    doc.data().party
                );
                usersArray.push(benes);
            });
            res.send(usersArray);
        }
    } catch (err) {
        res.status(400).send(error.message);
    }
}
//Get a user with email



//Get a user with ID
const getBene = async (req, res, next) => {
    try {
        const id = req.params.id;
        const bene = await firestore.collection('bene').doc(id);
        const data = await bene.get();
        if(!data.exists) {
            res.status(404).send('User not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
            res.status(400).send(error.message);
        }
    }


//Update user with ID
const updateBene = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const bene = await firestore.collection('bene').doc(id);
        await bene.update(data);
        res.send('User updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Delete user with ID
const deleteBene = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('bene').doc(id).delete();
        res.send('User deleted successfully')
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
addBene,
getAllBene,
getBene,
updateBene,
deleteBene
}