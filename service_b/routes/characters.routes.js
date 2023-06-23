let express = require('express')
let router = express.Router()
router.use('/characters/:heroe', require('../controllers/characters.controller').getCharacters)

module.exports = router
