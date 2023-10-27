const app = require('express').Router()
const { uploadSingleImage } = require('../../middleware/fileUpload')
const { protectedRoutes } = require('../auth/auth.service')
const { getAllNursery, addNursery } = require('./nursery.service')
app.route('/').post(protectedRoutes, uploadSingleImage('image', 'nursery'), addNursery).get(getAllNursery)

module.exports = app
