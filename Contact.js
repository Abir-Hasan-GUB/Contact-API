const { Schema, model } = require('mongoose');

// design data structure of user
const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minLength: 9,
        maxLength: 15
    }
}, {
    timestamps: true,
    versionKey: false
})

const Contact = model('Contact', contactSchema); // create a model instance

module.exports = Contact; // export a model instance