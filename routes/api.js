const router = require('express').Router()
const path = require('path')


router.get('/api', (req, res) => {
  res.json(notes)
})

router.post('/api', (req, res) => {
  req.body.id = uuid.v4()
  notes.push(req.body)

  fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
     res.send('Note Saved')
  })
 
})

module.exports = router