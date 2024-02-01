// seed.js

const Product = require('./models/Product');
const db = require('./db');


const seedData = [
    { "id": "101", "name": "apple", "price": 10 },
    { "id": "102", "name": "banana", "price": 20 },
    { "id": "103", "name": "pear", "price": 15 },
    { "id": "104", "name": "orange", "price": 18 },
    { "id": "105", "name": "grape", "price": 25 },
    { "id": "106", "name": "kiwi", "price": 12 },
    { "id": "107", "name": "pineapple", "price": 30 },
    { "id": "108", "name": "strawberry", "price": 8 },
    { "id": "109", "name": "blueberry", "price": 22 },
    { "id": "110", "name": "mango", "price": 28 },
    { "id": "111", "name": "peach", "price": 16 },
    { "id": "112", "name": "plum", "price": 14 },
    { "id": "113", "name": "cherry", "price": 26 },
    { "id": "114", "name": "lemon", "price": 9 },
    { "id": "115", "name": "lime", "price": 7 },
    { "id": "116", "name": "raspberry", "price": 24 },
    { "id": "117", "name": "blackberry", "price": 23 },
    { "id": "118", "name": "cantaloupe", "price": 32 },
    { "id": "119", "name": "honeydew", "price": 35 },
    { "id": "120", "name": "fig", "price": 13 },
    { "id": "121", "name": "pomegranate", "price": 19 },
    { "id": "122", "name": "nectarine", "price": 17 },
    { "id": "123", "name": "apricot", "price": 21 },
    { "id": "124", "name": "coconut", "price": 36 },
    { "id": "125", "name": "avocado", "price": 40 },
    { "id": "126", "name": "peanut", "price": 5 },
    { "id": "127", "name": "cashew", "price": 8 },
    { "id": "128", "name": "almond", "price": 15 },
    { "id": "129", "name": "walnut", "price": 12 },
    { "id": "130", "name": "pecan", "price": 18 },
    { "id": "131", "name": "macadamia", "price": 30 },
    { "id": "132", "name": "pistachio", "price": 25 },
    { "id": "133", "name": "chestnut", "price": 14 },
    { "id": "134", "name": "date", "price": 11 },
    { "id": "135", "name": "passion fruit", "price": 27 },
    { "id": "136", "name": "dragon fruit", "price": 33 },
    { "id": "137", "name": "guava", "price": 21 },
    { "id": "138", "name": "kiwano", "price": 29 },
    { "id": "139", "name": "persimmon", "price": 24 },
    { "id": "140", "name": "jackfruit", "price": 38 },
    { "id": "141", "name": "kiwifruit", "price": 16 },
    { "id": "142", "name": "rhubarb", "price": 13 },
    { "id": "143", "name": "cranberry", "price": 11 },
    { "id": "144", "name": "gooseberry", "price": 14 },
    { "id": "145", "name": "elderberry", "price": 20 },
    { "id": "146", "name": "boysenberry", "price": 18 },
    { "id": "147", "name": "loganberry", "price": 19 },
    { "id": "148", "name": "mulberry", "price": 17 },
    { "id": "149", "name": "currant", "price": 12 },
    { "id": "150", "name": "watermelon", "price": 30 }
];

async function seedDatabase() {
  try {
    db.connect()
    // Clear existing data
    await Product.deleteMany({});
    console.log('Cleared existing data');

    // Insert seed data one by one
    for (const productData of seedData) {
      const product = new Product(productData);
      await product.save();
      console.log(`Inserted product: ${product.name}`);
    }

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
	db.disconnect();
  }
}

seedDatabase();
