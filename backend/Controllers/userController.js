'use strict';

const firebase = require('../db');
const User = require('../Models/user');
const listingRoutes = require('../Routes/listingRoutes');
const firestore = firebase.firestore();

//Add user to database
const addUser = async (req,res,next) => {
    try {
        const data = req.body;
        await firestore.collection('users').doc(data.emailAddress).set(data);
        res.send('User added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Get All users
const getAllUsers = async (req,res,next) => {
    try {
        const users = await firestore.collection('users');
        const data = await listingRoutes.get();
        const usersArray = [];
        if(data.empty) {
            res.status(404).send('No user found');
        } else {
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().fullName,
                    doc.data().emailAddress,
                    doc.data().password,
                    doc.data().party
                );
                usersArray.push(users);
            });
            res.send(usersArray);
        }
    } catch (err) {
        res.status(400).send(error.message);
    }
}
//Get a user with email



//Get a user with ID
const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
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
const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user = await firestore.collection('users').doc(id);
        await listing.update(data);
        res.send('User updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//Delete user with ID
const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('users').doc(id).delete();
        res.send('User deleted successfully')
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
addUser,
getAllUsers,
getUser,
updateUser,
deleteUser
}