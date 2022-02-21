const express = require('express')
const router = express.Router()
const {
        registerUser,
        loginUser,
        getAdmin,
        getUser
    } = require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.get('/admin', protect, getAdmin)
router.post('/login', loginUser)
router.get('/:id', getUser)

module.exports = router