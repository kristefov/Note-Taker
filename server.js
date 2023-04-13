const express = require('express');
const path = require('path');
const notesRouter = require('./routes/notes')
const apiRouter = require('./routes/api')



const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/notes', notesRouter)
app.use('/api/notes/', apiRouter)


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./public/index.html'))
})





app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`));
