const router = require('express').Router()
const notes = require('../db/db.json')
const fs = require('fs');
const uuid = require('uuid');



router.get('/', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    res.send(JSON.parse(data))
  })
})

router.post('/', (req, res) => {
  req.body.id = uuid.v4()
  notes.push(req.body)

  fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
     res.send('Note Saved')
     
  })
})
 router.delete('/:id', (req, res) => {
  const id = req.params.id
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
   let notesData = JSON.parse(data)
   notesData = notesData.filter((item) => {return item.id != id})
   fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
    res.send('Write to file successful')
 })
  })
 })

module.exports = router