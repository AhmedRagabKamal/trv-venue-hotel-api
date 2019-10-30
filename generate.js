const priceCategories = ['low', 'medium', 'high'];
const amenities = [
  'free_parking',
  'free_wifi',
  'pets',
  'restaurant',
  'gym',
  'pool',
  'spa'
];
const origin = 'http://localhost:3000';

module.exports = function() {
  const faker = require('faker');
  const _ = require('lodash');
  return {
    hotels: _.times(6, n => {
      return {
        id: `${n}1c9665f-3c08-45ec-88d3-5029af3269c8`,
        name: faker.address.city(),
        description: faker.lorem.paragraph(),
        distance_to_venue: faker.random.number(10000),
        rating: faker.finance.amount(0, 5, 1),
        price_category: faker.random.arrayElement(priceCategories),
        amenities: _.times(
          Math.floor(Math.random() * amenities.length) + 1,
          am => {
            return faker.random.arrayElement(amenities);
          }
        ),
        images: _.times(3, imn => {
          return `${origin}/images/${n + 1}/${imn + 1}.jpg`;
        }),
        rooms: _.times(Math.floor(Math.random() * 4) + 2, rn => {
          return {
            id: `bf2b9853-7cec-47bf-ba3d-3ba765061db${rn}`,
            name: faker.address.state(),
            description: faker.lorem.paragraph(),
            max_occupancy: faker.random.number({ min: 1, max: 5 }),
            price_in_usd: faker.finance.amount()
          };
        })
      };
    })
  };
};
