const Cart = require('../Model/cart');
const Product = require('../Model/product');

const deleteCarP = async (req, res) => {
  const { ProductId } = req.params;

  // Buscamos el producto
  const existProductCart = await Cart.findById(ProductId);
 //buscamos el producto en la base de datos
  const {name, img, price, _id} = await Product.findOne({name: existProductCart.name});

  await Cart.findByIdAndDelete(ProductId);

  await Product.findByIdAndUpdate(
    _id,
    { inCart: false, name, img, price },
    { new: true }
  ).then(() => {
    res.json({ msg: 'Product deleted from cart'});
  }).catch((err) => { console.error(err); });
};

module.exports = deleteCarP;