
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true,

        },
        nome: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: true,

        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }


      });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');

  }
};
