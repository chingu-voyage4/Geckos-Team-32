const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require('./routes/routes')
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../client/public'))); // joins current path with client path
app.use(bodyParser.urlencoded({extended: true})); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(bodyParser.json()); // looks for JSON data
app.use(cors());

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

// Locally use mongoDB or use mLab setup from geckos-32
// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/geckos32"
const url = "mongodb://localhost:27017/geckos32"

mongoose.connect(url, options);
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

// conn.once('open', function() {
//   // Wait for the database connection to establish, then start the app.
// });

app.use('/routes', router);

// handle all routes on index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
});

// start app on specified port
app.listen(PORT, (err) => {
  if (err) {
    console.log('There was an error connecting to the server', err);
  }
  else { 
    console.log('You have connected to the server on PORT: ', PORT); 
  }
});

module.exports = app;