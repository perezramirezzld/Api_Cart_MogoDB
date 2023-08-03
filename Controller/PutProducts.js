const Cart = require('../Model/cart');

const putProduct = async (req, res) => {
  const { ProductId } = req.params;
  const { query } = req.query;
  const body = req.body;
  const existProduct = await Cart.findById(ProductId);

  if (!query) {
    res.status(400).json({ msg: 'need query' });
  }
  else if (existProduct && query === 'add') {
    body.amount = body.amount + 1;

    await Cart.findByIdAndUpdate(ProductId, body, {
      new: true,
    }).then((product) => {
      res.json({ msg: 'Product added to cart', product });
    }).catch((err) => { console.error(err); });
  }
  else if (existProduct && query === 'remove') {
    body.amount = body.amount - 1;

    await Cart.findByIdAndUpdate(ProductId, body, {
      new: true,
    }).then((product) => {
      res.json({ msg: 'Product added to cart', product });
    }).catch((err) => { console.error(err); });
  }
};

module.exports = putProduct;