const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    phone: Number,
    email: {
        type: String,
        trim: true,
        unique: [true, 'E-mail must be unique'],
        required: [true, 'E-mail required'],
        minLength: 1
    },
    address:String,
    image: String
}, { timestamps: true })

module.exports = mongoose.model('profile', profileSchema)