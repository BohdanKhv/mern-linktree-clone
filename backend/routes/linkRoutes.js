const express = require('express')
const router = express.Router()
const { 
        getLink,
        getUserLinks, 
        setLink, 
        updateLink, 
        deleteLink,
    } = require('../controllers/linkController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, setLink).put(protect, updateLink)
router.route('/user/:id').get(getUserLinks)
router.route('/:id').get(protect, getLink).delete(protect, deleteLink)

module.exports = router