const mongoose = require('mongoose')

const linkSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name value']
    },
    url: {
        type: String,
        required: [true, 'Please add a url value']
    },
    icon: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Link', linkSchema)