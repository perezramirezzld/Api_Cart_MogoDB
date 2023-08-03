const Products = require('../Model/product');

const getProducts = async (req, res) => {
  const products = await Products.find();

  if(products){
    res.json({products});
  }
  else{
    res.json({msg: 'The product does not exist'});
  }
};

module.exports = getProducts;