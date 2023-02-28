'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('drivers',
    [
      {
        name: 'Jorge Benjor',
      },
      {
        name: 'Gerald of Rivia',
      },
      {
        name: 'Carlos Felino',
      },
      {
        name: 'Dominic Toreto',
      },
      {
        name: 'Caetano Veloso',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('drivers', null, {})
  }
};
