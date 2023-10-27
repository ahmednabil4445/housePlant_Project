const mongoose = require('mongoose')

const nurserySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    openDate: String,
    closeDate: String,
    image: String
}, { timestamps: true })
// plantSchema.post('init',(doc)=>{
//     doc.image = process.env.BASE_URL + '/plant/' + doc.image
// })
module.exports = mongoose.model('nursery', nurserySchema)