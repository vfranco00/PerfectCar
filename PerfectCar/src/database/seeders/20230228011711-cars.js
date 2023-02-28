'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cars',
    [
      {
        plate: 'NAS4123N',
        color: 'BLACK',
        brand: 'FORD',
      },
      {
        plate: 'ASK2130P',
        color: 'WHITE',
        brand: 'FIAT',
      },
      {
        plate: 'PWD9874Y',
        color: 'YELLOW',
        brand: 'CHEVROLLET',
      },
      {
        plate: 'ESL0394W',
        color: 'RED',
        brand: 'BENTLEY',
      },
      {
        plate: 'PTO3378N',
        color: 'PURPLE',
        brand: 'CHERY',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('cars', null, {})
  }
};
