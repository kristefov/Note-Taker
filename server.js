//assing all npm and files that we need for the app to work  
const express = require('express');
const path = require('path');
const notesRouter = require('./routes/notes')
const apiRouter = require('./routes/api')
// port for use heroku and local testing
const PORT = process.env.PORT || 3001
// initialze express
const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// handle the static files
app.use(express.static('public'));
// modular routes created 
app.use('/notes', notesRouter);
app.use('/api/notes/', apiRouter);

// rout to hanndle all endpoints
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./public/index.html'))
})


// listen method for request get post delete
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`));
