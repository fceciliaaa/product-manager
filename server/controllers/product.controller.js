const Products = require ('./../models/product.model');

module.exports.createProduct = (req, res) =>{
  const  { title, price, description } = req.body
  Products.create( { title, price, description })
    .then((newProduct) => {
      return res.status(201).json(newProduct);
    })
    .catch((error) => {
        return res.status(400).json(error);
    });
}

module.exports.allProducts = (req, res) => {
  Products.find()
      .then((productList) => {
          return res.status(200).json(productList);
      })
      .catch((error) => {
          return res.status(400).json(error);
      });
};

module.exports.deleteProduct = (req, res) =>{
  Products.findOneAndDelete({_id: req.params.id})
    .then(() => {
      return res.status(200).end();
    })
    .catch((error) => {
        return res.status(400).json(error);
    });
}