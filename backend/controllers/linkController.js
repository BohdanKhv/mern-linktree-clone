const asyncHandler = require('express-async-handler')

// @desc    Get links
// @route   GET /api/links
// @access  Private
const getLinks = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get links'})
})

// @desc    Create link
// @route   POST /api/links
// @access  Private
const setLink = asyncHandler(async (req, res) => {
    if(!req.body.url) {
        res.status(400)
        throw new Error('Please add a url field')
    }
    console.log(req.body)
    
    res.status(200).json({message: 'create link'})
})

// @desc    Update link
// @route   PUT /api/links/:id
// @access  Private
const updateLink = asyncHandler(async (req, res) => {
    res.status(200).json({message: `put link ${req.params.id}`})
})

// @desc    Delete link
// @route   DELETE /api/links/:id
// @access  Private
const deleteLink = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete link ${req.params.id}`})
})

module.exports = {
    getLinks,
    setLink,
    updateLink,
    deleteLink
}