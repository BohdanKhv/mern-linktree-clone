const express = require('express')
const router = express.Router()
const {
        registerUser,
        loginUser,
        getAdmin,
    } = require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/admin', protect, getAdmin)

module.exports = router