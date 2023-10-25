const app = require('express').Router()
const { uploadSingleImage } = require('../../middleware/fileUpload')
const { protectedRoutes, allowedTo } = require('../auth/auth.service')
const { createPlant, getAllPlants, updatePlant, deletePlant, getPlant, getDetailsOfPlant } = require('./plant.service')
app.route('/').post(protectedRoutes,uploadSingleImage('image' , 'plant'),createPlant).get(getAllPlants)
app.route('/:id').get(getPlant).delete(protectedRoutes,deletePlant).put(updatePlant)
app.route("/getDetailsOfPlant/:id").get(getDetailsOfPlant);

module.exports = app
