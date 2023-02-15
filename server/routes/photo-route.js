// Import express
const express = require('express')

// Import users controller
const photoController = require('../controllers/photo-controller.js')

// Create express router
const router = express.Router()

// Create rout between usersController and '/all' endpoint
router.get('/', photoController.getPhoto)

// Export router
module.exports = router