const express = require("express")
const app = express()
const configRoutes = require('./routes');

app.use(express.json()); //to read request body
configRoutes(app); //configure routes

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
  });