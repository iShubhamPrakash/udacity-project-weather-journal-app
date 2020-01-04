// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const hostname = 'localhost';
const server = http.createServer(app);
server.listen(port, hostname, () => console.log(`Server running on http://${hostname}:${port}`));