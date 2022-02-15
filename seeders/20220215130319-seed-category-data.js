const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const categoriesList = [];

    for (let i = 0; i < 2; i += 1) {
      categoriesList.push({
        name: faker.commerce.department(),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    try {
      const result = await queryInterface.bulkInsert('categories', categoriesList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    await queryInterface.sequelize.query('UPDATE items SET category_id = 1 WHERE id <= 50');
    await queryInterface.sequelize.query('UPDATE items SET category_id = 2 WHERE id > 50');
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query('UPDATE items SET category_id = null');
    await queryInterface.bulkDelete('categories', null, {});
  },
};
