const bcryptjs = require('bcryptjs');
module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert(
      'users', [{
        nome: 'John Doe',
        email: 'john@example.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },{
        nome: 'Will Smitch',
        email: 'will@example.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },{
        nome: 'Jane Smitch',
        email: 'jane@example.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),







      }], {});

  },

  async down() {

  }
};
