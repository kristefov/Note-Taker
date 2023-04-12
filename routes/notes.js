const router = require('express').Router();
const path = require('path')



router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'../public/notes.html'))
})

module.exports = router