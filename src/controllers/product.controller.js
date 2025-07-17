const productService = require("../services/product.service");

exports.getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();

  res.json({
    message: "Product Found",
    data: products,
    success: true,
  });
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(Number(id));

  if (!product) {
    return res.status(404).json({
        message: "Product Not Found",
        data: null,
        success: false,
    });
  }

  res.json({
    message: "Product Found",
    data: product,
    success: true,
  });
};

// exports.createProduct = async (req, res) => {
//     const { name, price, stock } = req.body;
//     const product = await p
// }
