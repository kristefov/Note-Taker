const express = require('express');
const path = require('path');
const notesRouter = require('./routes/notes')
const notes = require('./db/db.json')
const fs = require('fs');
const uuid = require('uuid')


const PORT = 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(notesRouter)




app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.post('/api/notes', (req, res) => {
  req.body.id = uuid.v4()
  notes.push(req.body)



  fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
     res.send('Note Saved')
  })
 
})

app.delete('/api/notes', (req, res) => {
  
}
)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./public/index.html'))
})





app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`));
