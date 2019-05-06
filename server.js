//comment
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// If its production environment!
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
  app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build/'))
  });
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

