const cart = require('../Model/cart');

const getProductsCar = async (req, res) => {
  const productsCart = await cart.find();

  if(productsCart){
    res.json({ productsCart});
  }else {
    res.status(400).json({ msg: 'The product does not exist in cart' });
  }
};

module.exports = getProductsCar;