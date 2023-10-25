const app = require('express').Router()
const { uploadSingleImage } = require('../../middleware/fileUpload')
const { protectedRoutes } = require('../auth/auth.service')
const { addInformation } = require('./profile.service')
app.route('/').post(protectedRoutes,uploadSingleImage('image' , 'info'),addInformation)

module.exports = app
