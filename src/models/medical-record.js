'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class medicalRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      medicalRecord.belongsTo(models.staff, { foreignKey: 'staff_id' })
    }
  }
  medicalRecord.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      validate: {
        notEmpty: true
      },
      allowNull: false,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomor_telepon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    diagnosa: {
      type: DataTypes.STRING
    },
    resep_obat: {
      type: DataTypes.STRING
    },
    saran_perawatan: {
      type: DataTypes.STRING
    },
    staff_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'medicalRecord',
    tableName: 'medical_record',
    timestamps: true,
    underscored: false
  })

  return medicalRecord
}
