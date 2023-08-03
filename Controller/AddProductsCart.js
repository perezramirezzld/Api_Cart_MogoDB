const Cart = require('../Model/cart');
const Product = require('../Model/product');

const addCar = async (req, res) => {
  const {name ,img,price} = req.body;
  const exists = await Product.findOne({name});
  const validDate = name !== '' && img !== '' && price !== '';
  const existProduct = await Cart.findOne({name});

  if(!exists){
    return res.status(400).json({msg: 'The product does not exist'});
  }
  else if(validDate && !existProduct){
    const newProductInCart = new Cart({name ,img,amount : 1,price});

  await Product.findByIdAndUpdate(
    exists?._id,
    { inCart: true,name,img,price },
    { new: true }
  ).then((product) => {
    newProductInCart.save();
    res.json({ msg: 'Product added to cart', product });
  }).catch((err) => { console.error(err); });

}
else if(existProduct){
  await Cart.findByIdAndUpdate(
    existProduct._id,
    { amount: existProduct.amount + 1 },
    { new: true }
  ).then((product) => {
    res.json({ msg: 'Product added to cart again', product });
  }).catch((err) => { console.error(err); });
}
};

module.exports = addCar;