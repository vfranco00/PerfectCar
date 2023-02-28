'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      plate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startUseAt: {
        type: Sequelize.DATE,
        allowNull: true,
        // field: 'startUse_at',
      },
      endUseAt: {
        type: Sequelize.DATE,
        allowNull: true,
        // field: 'endUse_at',
      },
      driverId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      motiveUse: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};
