const express = require('express');
var cors = require('cors')

require('dotenv').config();
const env = process.env || 4000;

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

// Connect to Database
const dbConnect = require('./DBConnect/connection');
dbConnect();

// Define Routes
const viewRoute = require('./Routes/view.routes');
const urlRoute = require('./Routes/url.routes');

app.use('/', viewRoute);
app.use('/api/url', urlRoute);

app.listen(env.PORT, () => {
    console.log(`App is running at http://localhost:${env.PORT}`);
})