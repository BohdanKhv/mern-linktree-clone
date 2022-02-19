const mongoose = require('mongoose')

const types = ['url', 'text']

const linkSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    type: {
        type: String,
        required: true,
        default: 'url',
        enum: types
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: isUrl
    },
    icon: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

function isUrl () {
    if(types.indexOf(this.type) === 0) {
        return [true, 'Please add a name value']
    }
    return false
}

module.exports = mongoose.model('Link', linkSchema)