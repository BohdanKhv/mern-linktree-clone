const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'register user'})
})

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'login user'})
})

// @desc    Get user data
// @route   GET /api/users/admin
// @access  Private
const getAdmin = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'admin user page'})
})

module.exports = {
    registerUser,
    loginUser,
    getAdmin,
}