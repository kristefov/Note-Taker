const router = require('express').Router();
const path = require('path')


// get method to send you the notes.html file
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'../public/notes.html'))
})

module.exports = router