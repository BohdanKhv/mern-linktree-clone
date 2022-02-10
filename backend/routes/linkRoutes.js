const express = require('express')
const router = express.Router()
const { 
        getLinks, 
        setLink, 
        updateLink, 
        deleteLink 
    } = require('../controllers/linkController')

router.route('/').get(getLinks).post(setLink)
router.route('/:id').put(updateLink).delete(deleteLink)

module.exports = router