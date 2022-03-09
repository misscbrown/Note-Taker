// Requirements
const express = require('express'); 

// Initialise the app and assign PORT variable
const app = express();
const PORT = 3001; 

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public'))

 // Start the app on the given port
 app.listen(PORT, () => {
     console.log('App listening.....')
 })
