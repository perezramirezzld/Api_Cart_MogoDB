const express = require('express');
const cors = require('cors');
const db = require('./Database');
const controllers = require('./Controller');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
  db();
});
//Routes
app.get('/products', controllers.getProducts);
app.get('/products-cart', controllers.getProductsCar);
//Add
app.post('/add-product', controllers.addCar);
//Delete
app.delete('/products-cart/:ProductId', controllers.deleteCarP);
//Update
app.put('/products-cart/:ProductId', controllers.putProduct);

module.exports = app;