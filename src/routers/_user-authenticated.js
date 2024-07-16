const express = require('express')
const router = express.Router()

const StaffRouter = require('./staff')
const MedicalRecordRouter = require('./medical-record')

router.use('/staff', StaffRouter)
router.use('/medical', MedicalRecordRouter)

module.exports = router
