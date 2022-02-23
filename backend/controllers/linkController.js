const asyncHandler = require('express-async-handler')
const Link = require('../models/linkModel')
const User = require('../models/userModel')

// @desc    Get user links
// @route   GET /api/links/:id
// @access  Private
const getLinks = asyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.params.id })

    if(!user) {
        res.status(400)
        throw new Error('That user does not exist')
    }

    const links = await Link.find({ user: user.id }).sort({"orderKey": 1}).exec()

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
    if ((!req.body.type || req.body.type === 'url') && !req.body.url) {
        res.status(400)
        throw new Error('Please add a url field')
    }

    const link = await Link.create({
        user: req.user.id,
        type: req.body.type,
        name: req.body.name,
        url: req.body.url,
        icon: req.body.icon,
        orderKey: req.body.orderKey
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

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if link user matcher logged in user
    if(link.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
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

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if link user matcher logged in user
    if(link.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const deletedLink = await link.remove()

    res.status(200).json(deletedLink)
})

module.exports = {
    getLinks,
    setLink,
    updateLink,
    deleteLink,
}