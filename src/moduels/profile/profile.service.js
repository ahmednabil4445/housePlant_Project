const profileModel = require('../../../databases/models/profile.model')
const AppError = require('../../utils/AppError')
const cloudinary = require('cloudinary')
const { catchAsyncError } = require('../../middleware/catchAsyncError')
const ApiFeatuers = require('../../utils/ApiFeatuers')

// **********************************************
cloudinary.v2.config({
    cloud_name: 'dofg9wmp0',
    api_key: '663141422279326',
    api_secret: 'R5M35Mx_R9MbiRp2yP_XSuSa3_Y',
    secure: true,
});
// **********************************************

module.exports.addInformation = catchAsyncError(async (req, res) => {
    // *****************************************************
    cloudinary.v2.uploader.upload(req.file.path, async (error, result) => {
        req.body.image = result.secure_url
        let info = new profileModel(req.body)
        await info.save();
        res.status(200).json({ message: 'Success', info })
    });
    // *****************************************************

})

