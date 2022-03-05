const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true
    },
    fullName: {
        type: String,
        required: false,
        default: null
    },
    email: {
        type: String,
        required: false,
        default: null
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    profileImage: {
        type: String,
        required: false,
        default: ''
    },
    viewCount: {
        type: Number,
        default: 0,
        required: false
    },
    pageStyle: {
        backgroudImage: {
            type: String,
            required: false,
            default: ''
        },
        backgroundColor: {
            type: String,
            required: false,
            default: '#ffffff'
        },
        borderRadius: {
            type: String,
            required: false,
            default: '5px'
        },
        fontSize: {
            type: String,
            required: false,
            default: '18px'
        },
        fontColor: {
            type: String,
            required: false,
            default: 'black'
        },
        fontWeight: {
            type: String,
            required: false,
            default: '400'
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)