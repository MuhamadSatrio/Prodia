const express = require('express')
const router = express.Router()
const MedicalRecord = require('#controllers/medical_record')

router.post('/create', MedicalRecord.create)
router.get('/list', MedicalRecord.list)
router.get('/list2', MedicalRecord.listMedicine)
router.patch('/:id', MedicalRecord.update)
router.delete('/:id', MedicalRecord.delete)

module.exports = router
