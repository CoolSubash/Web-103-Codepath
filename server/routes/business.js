const express = require('express')
const router = express.Router()
const {
  getBusinessData,
  getSingleBusinessData,
} = require('../controller/business.js')

router.get('/business', getBusinessData)
router.get('/business/:id', getSingleBusinessData)

module.exports = router
