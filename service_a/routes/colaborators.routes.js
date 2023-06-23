let express = require('express')
let router = express.Router()
router.use('/colaborators/:heroe', require('./../controllers/colaborators.controller').getCollaborators)

module.exports = router
