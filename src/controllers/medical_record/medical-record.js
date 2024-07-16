const { CreateSchema, UpdateSchema } = require('./medical-record-schema')
const MedicalRecordService = require('#services/medical-record')
const validator = require('validator')
const GeneralError = require('#errors/definitions/general-error')
const axios = require('axios')
require('dotenv').config()

module.exports = class Controller {
  static async list (req, res) {
    const { query } = req

    const { medicalRecord, totalData, totalPage } = await MedicalRecordService.list(query)

    return res.serialize({
      medicalRecord,
      totalData,
      totalPage
    })
  }

  static async listMedicine (req, res) {
    const { query } = req
    const { token } = req.cookies

    let products = null

    try {
      const products = await Controller._getProduct(query, token)

      return res.serialize(products)
    } catch (error) {
      res.clearCookie('token')

      const newToken = await Controller._getToken()
      res.cookie('token', newToken, { httpOnly: true, secure: true })

      products = await Controller._getProduct(query, newToken)

      return res.serialize(products)
    }
  }

  static async create (req, res) {
    const { body, staffId } = req

    await Controller._validation(body)

    if (!validator.isEmail(body.email)) {
      throw GeneralError.IncorrectFormatEmail()
    }

    req.sanitize(CreateSchema, body)
    const createdStaff = await MedicalRecordService.create({
      staff_id: staffId,
      ...body
    })

    return res.serializePost({
      id: createdStaff.id
    })
  }

  static async update (req, res) {
    const { body, params } = req
    const { id } = params

    await Controller._validation(body)
    req.sanitize(UpdateSchema, body)

    const medical_record = await MedicalRecordService.findById(id)
    if (!medical_record) throw GeneralError.notFound('Medical Record')
    await MedicalRecordService.update(id, body)

    return res.serialize({
      mesage: 'update profile medical record success'
    })
  }

  static async delete (req, res) {
    const { params } = req
    const { id } = params

    const medical_record = await MedicalRecordService.findById(id)

    if (!medical_record) {
      throw GeneralError.notFound('Medical Record')
    }

    await MedicalRecordService.delete(id)

    return res.serialize({
      mesage: 'delete my account medical record success'
    })
  }

  // PRIVATE METHODS
  static async _validation (body) {
    const bodyValues = Object.values(body)
    const isEmptyValue = bodyValues.some(value => value === null)
    if (isEmptyValue) throw GeneralError.emptyBody()
    return true
  }

  static async _getToken () {
    // const data = new URLSearchParams()
    const data = new URLSearchParams()
    data.append('client_id', process.env.CLIENT_ID)
    data.append('client_secret', process.env.CLIENT_SECRET)

    try {
      const response = await axios.post('https://api-satusehat-stg.dto.kemkes.go.id/oauth2/v1/accesstoken?grant_type=client_credentials', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      return response.data.access_token
    } catch (error) {
      console.error('Error getting access token:', error.response.data)
      return null
    }
  }

  static async _getProduct (params, token) {
    try {
      const response = await axios.get('https://api-satusehat-stg.dto.kemkes.go.id/kfa-v2/products/all', {
        params,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data
    } catch (error) {
      console.error('Error getting access token:', error.response.data)
      return null
    }
  }
}
