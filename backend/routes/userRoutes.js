const express = require('express')
const router = express.Router()
const {
        registerUser,
        loginUser,
        getAdmin,
    } = require('../controllers/userControllers')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/admin', getAdmin)

module.exports = router