'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const listingRoutes = require('./Routes/listingRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express()

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', listingRoutes.routes);
app.use('/api', userRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http//localhost:' + config.port))
