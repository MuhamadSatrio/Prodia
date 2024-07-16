'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('medical_record', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nomor_telepon: {
        type: Sequelize.STRING
      },
      diagnosa: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      resep_obat: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      saran_perawatan: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      staff_id: {
        type: Sequelize.STRING,
        references: {
          model: 'staff',
          key: 'staffId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('medical_record')
  }
}
