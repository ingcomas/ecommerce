const faker = require('faker');
const User = require('../db/models/User');
const Cart = require('../db/models/Cart');
const Product = require('../db/models/Product');
const Category = require('../db/models/Category');
const Order = require('../db/models/Order');
const Review = require('../db/models/Review');
const db = require('../db/index');

const createCategory = () => Category.create({
  name: faker.commerce.department(),
});
const createCategories = (n) => {
  const categoriesPromises = [];
  for (let i = 0; i < n; i += 1) {
    categoriesPromises.push(createCategory());
  }
  return Promise.all(categoriesPromises);
};
const createProduct = () => Product.create({
  name: 'akdjals',
  description: faker.lorem.paragraph(),
  stock: Math.round(Math.random()*25),
  price: faker.commerce.price(),
  images : ['ofakfoskaf','jfanoaknfas']
});
const createCatalogue = (n) => {
  const productPromises = [];
  for (let i = 0; i < n; i += 1) {
    productPromises.push(createProduct());
  }
  return Promise.all(productPromises);
};
const createUser = () => User.create({
  first_name : faker.name.firstName(),
  last_name : faker.name.lastName(),
  email : faker.internet.email(),
  password : faker.internet.password(),
  address : faker.address.city(),
  dni : 123456789,
  cellphone : 123456987,
  access : 'Admin'
});
const createUsers = (n) => {
  const UsersPromises = [];
  for (let i = 0; i < n; i += 1) {
    UsersPromises.push(createUser());
  }
  return Promise.all(UsersPromises);
};


const generateShop = (nCat, nProd, nUser) =>
  db.sync({ force: true })
    .then(() => createCategories(nCat))
    .then(categories => createCatalogue(nProd))
    .then(products=> createUsers(nUser))
    .catch(err=>console.log('///////-----------------------///////////',err));

generateShop(5, 5, 5);


// const createCartItem = productId => Cart.create({
//   quantity: faker.random.number(9) + 1,
//   productId,
// });

// const createCart = (n, products) => {
//   const cartItemPromises = [];
//   for (let i = 0; i < n; i += 1) {
//     const productId = faker.random.arrayElement(products).id;
//     cartItemPromises.push(createCartItem(productId));
//   }
//   return Promise.all(cartItemPromises);
// };