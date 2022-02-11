const express = require('express')
const router = express.Router()
const { 
        getLinks, 
        setLink, 
        updateLink, 
        deleteLink,
    } = require('../controllers/linkController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, setLink)
router.route('/:id').get(getLinks).put(protect, updateLink).delete(protect, deleteLink)

module.exports = router