const express = require('express')
const router = express.Router()
const {
        registerUser,
        loginUser,
        getAdmin,
        getUser,
        editUser
    } = require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerUser).put(protect, editUser)
router.get('/admin', protect, getAdmin)
router.post('/login', loginUser)
router.route('/:id').get(getUser)

module.exports = router