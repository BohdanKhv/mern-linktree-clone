const asyncHandler = require('express-async-handler')
const Link = require('../models/linkModel')

// @desc    Get links
// @route   GET /api/links
// @access  Private
const getLinks = asyncHandler(async (req, res) => {
    const links = await Link.find({})

    res.status(200).json(links)
})

// @desc    Create link
// @route   POST /api/links
// @access  Private
const setLink = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a name field')
    }
    if (!req.body.url) {
        res.status(400)
        throw new Error('Please add a url field')
    }

    const link = await Link.create({
        name: req.body.name,
        url: req.body.url,
        icon: req.body.icon,
    })

    res.status(200).json(link)
})

// @desc    Update link
// @route   PUT /api/links/:id
// @access  Private
const updateLink = asyncHandler(async (req, res) => {
    const link = await Link.findById(req.params.id)

    if(!link) {
        res.status(400)
        throw new Error('Link not found')
    }

    const updatedLink = await Link.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedLink)
})

// @desc    Delete link
// @route   DELETE /api/links/:id
// @access  Private
const deleteLink = asyncHandler(async (req, res) => {
    const link = await Link.findById(req.params.id)

    if (!link) {
        res.status(400)
        throw Error('Link not found')
    }

    const deletedLink = await link.remove()

    res.status(200).json(deletedLink)
})

module.exports = {
    getLinks,
    setLink,
    updateLink,
    deleteLink
}