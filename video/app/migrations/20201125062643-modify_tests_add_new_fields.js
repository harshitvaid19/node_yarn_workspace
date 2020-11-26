'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return Promise.all([
        queryInterface.addColumn(
          'tests', // table name
          'testColumn', // new field name
          {
            type: Sequelize.STRING,
            allowNull: true,
          },
        ),
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return Promise.all([
      queryInterface.removeColumn('tests', 'testColumn'),
    ]);
  }
};
