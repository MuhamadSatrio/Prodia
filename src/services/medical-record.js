const { medicalRecord: MedicalRecord } = require('#models')
const QueryHelper = require('#helpers/QueryHelper')

const MedicalRecordService = {
  // PROPERTIES
  filterAttributes: [
  ],
  searchAttributes: [
    'email',
    'nama',
    'nomor_telepon',
    'tanggal_lahir'
  ],

  // METHODS
  async create (payload) {
    return await MedicalRecord.create(payload)
  },

  async list (query = {}) {
    const { searchAttributes, filterAttributes } = MedicalRecordService

    const { rows, count } = await MedicalRecord.findAndCountAll({
      ...QueryHelper.getPaginationQuery(query),
      order: [...QueryHelper.getSortQuery(query)],
      where: {
        ...QueryHelper.getSearchQuery(query, {
          searchAttributes
        }),
        ...QueryHelper.getFilterQuery(query, {
          filterAttributes
        })
      },
      subQuery: false
    })

    return {
      medicalRecord: rows,
      totalData: count,
      totalPage: QueryHelper.countTotalPage(query, count)
    }
  },

  async findById (id) {
    return await MedicalRecord.findOne({
      where: { id }
    })
  },

  async findByEmail (email) {
    return await MedicalRecord.findOne({
      where: { email }
    })
  },

  async update (id, payload) {
    return await MedicalRecord.update(payload, {
      where: { id }
    })
  },

  async delete (id) {
    return await MedicalRecord.destroy({
      where: { id }
    })
  }
}

module.exports = MedicalRecordService
