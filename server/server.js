const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = express.Router();

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(bodyParser.urlencoded({extended: true})); // returns middleware that only parses urlencoded bodies; extended allows for the qs library
app.use(bodyParser.json()); // looks for JSON data
app.use(cors());
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../client/public'))); // joins current path with client path

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