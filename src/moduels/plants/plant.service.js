const plantModel = require('../../../databases/models/plant.model')
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

module.exports.createPlant = catchAsyncError(async (req, res) => {
    // *****************************************************
    cloudinary.v2.uploader.upload(req.file.path, async (error, result) => {
        req.body.image = result.secure_url
        let Plant = new plantModel(req.body)
        await Plant.save();
        res.status(200).json({ message: 'Success', Plant })
    });
    // *****************************************************

})


module.exports.getAllPlants = catchAsyncError(async (req, res) => {
    let Plants = await plantModel.find({})
    res.json({ message: 'All Plants', Plants })
})
module.exports.getAllPlants = catchAsyncError(async (req, res) => {
    let apiFeatuers = new ApiFeatuers(plantModel.find(), req.query).serach()
    let Plants = await apiFeatuers.mongooseQuery
    res.json({ message: 'this is All Plants' ,Plants })
})

module.exports.getPlant = catchAsyncError(async (req, res, next) => {
    const { id } = req.params
    let Plant = await plantModel.findById(id)
    if (!Plant) {
        return next(new AppError(`Plant Not Found`, 404))
    }
    res.json({ message: 'Success', Plant })
})


module.exports.updatePlant = catchAsyncError(async (req, res, next) => {
    const { id } = req.params
    let Plant = await plantModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!Plant) {
        return next(new AppError(`Plant Not Found`, 404))
    }
    res.json({ message: 'Updated Plant', Plant })
})

module.exports.deletePlant = catchAsyncError(async (req, res, next) => {
    const { id } = req.params
    let Plant = await plantModel.findByIdAndDelete(id);
    if (!Plant) {
        return next(new AppError(`Plant Not Found`, 404))
    }
    res.json({ message: 'Deleted Plant', Plant })
})


exports.getDetailsOfPlant = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const plant = await plantModel.findById(id, { title: 1, description: 1,_id:0, price: 1, image: 1});
    if (!plant) {
      return next(new AppError("plant not found", 400));
    }
    res.status(200).json(plant);
  });