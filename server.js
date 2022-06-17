// require dependencies 
const express = require('express');
const fs = require('fs');
const path = require('path');

// Express app set up
var app = express();
var PORT = process.env.PORT || 3001;

// Express formats data as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

// Require routes file
require('./routes/routes')(app);

// Listener setup that sets up the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});