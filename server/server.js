const express = require('express');
const bodyParser = require('body-parser');
var router = require('./routes/routes.js')
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const PORT = 8000 || process.env.PORT;

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '../client/public));
app.use(express.static(path.join(__dirname, '../client/public'))); // joins current path with client path
app.use(bodyParser.urlencoded({extended: true})); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(bodyParser.json()); // looks for JSON data
app.use(cors());

// mongoose.connect('mongodb://gecko:gecko@ds147668.mlab.com:47668/geckosapp');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://gecko:gecko@ds147668.mlab.com:47668/geckosapp';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

// conn.once('open', function() {
//   // Wait for the database connection to establish, then start the app.
// });

app.use('/', router);

app.get('/', (req, res) => {
  res.render('index');
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