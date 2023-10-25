const mongoose = require('mongoose')

const plantSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'plant description required'],
        minLength: [5, 'too short plant description'],
        maxLength: [300, 'too long plant description']
    },
    price: {
        type: Number,
        required: [true, 'Plant price required'],
        min: 0,

    },
    image: String
}, { timestamps: true })
// plantSchema.post('init',(doc)=>{
//     doc.image = process.env.BASE_URL + '/plant/' + doc.image
// })
module.exports = mongoose.model('plant', plantSchema)