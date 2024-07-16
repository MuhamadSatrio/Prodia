const CreateSchema = {
  type: 'object',
  properties: {
    nama: {
      type: 'string'
    },
    tanggal_lahir: {
      type: 'string',
      format: 'date'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    nomor_telepon: {
      type: 'string'
    },
    diagnosa: {
      type: 'string'
    },
    resep_obat: {
      type: 'string'
    },
    saran_perawatan: {
      type: 'string'
    },
    staffId: {
      type: 'string'
    }
  },
  additionalProperties: false,
  required: ['nama', 'tanggal_lahir', 'email', 'nomor_telepon', 'diagnosa', 'resep_obat', 'saran_perawatan']
}

const UpdateSchema = {
  type: 'object',
  properties: {
    nama: {
      type: 'string'
    },
    tanggal_lahir: {
      type: 'string',
      format: 'date'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    nomor_telepon: {
      type: 'string'
    },
    diagnosa: {
      type: 'string'
    },
    resep_obat: {
      type: 'string'
    },
    saran_perawatan: {
      type: 'string'
    }
  },
  additionalProperties: false,
  required: []
}

module.exports = { CreateSchema, UpdateSchema }
