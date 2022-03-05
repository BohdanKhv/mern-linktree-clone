const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    if(!username || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExist = await User.findOne({username})

    if(userExist) {
        res.status(400)
        throw new Error('This username already taken')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        viewCount: user.viewCount,
        pageStyle: user.pageStyle,
        profileImage: user.profileImage,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    if(!username, !password){
        res.status(400)
        throw new Error('Please provide your login credentials')
    }

    // Check for user username
    const user = await User.findOne({username})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            viewCount: user.viewCount,
            pageStyle: user.pageStyle,
            profileImage: user.profileImage,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

// @desc    Get admin data
// @route   GET /api/users/admin
// @access  Private
const getAdmin = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

// @desc    Get user data
// @route   GET /api/users/:id
// @access  Public
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findOne({username: req.params.id})

    if(!user) {
        res.status(400)
        throw new Error('That user does not exist')
    }

    res.status(200).json(user)
})

// @desc    Update user profile
// @route   PUT /api/users
// @access  Private
const editUser = asyncHandler(async (req, res) => {
    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    await User.findByIdAndUpdate(req.user, req.body)
    const user = await User.findById(req.user)

    if(user) {
        res.status(200).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            viewCount: user.viewCount,
            pageStyle: user.pageStyle,
            profileImage: user.profileImage,
            token: req.headers.authorization.split(' ')[1]
        })
    } else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

// @desc    Increment Profile View Count
// @route   GET /api/users/:id/view
// @access  Public
const incrementViewCount = asyncHandler(async (req, res) => {
    const user = await User.findOneAndUpdate({_id: req.params.id}, {$inc : {'viewCount' : 1}}).exec()

    // Check for user
    if(!user || !req.params.id) {
        res.status(401)
        throw new Error('User not found')
    }
    res.status(200).json({
        _id: user.id,
        username: user.username,
        viewCount: user.viewCount,
    })
})

module.exports = {
    registerUser,
    loginUser,
    getAdmin,
    getUser,
    editUser,
    incrementViewCount
}