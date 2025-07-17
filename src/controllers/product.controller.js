const productService = require("../services/product.service");
const { validationResult } = require("express-validator");

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

exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({
      message: errors.mapped(),
      data: null,
      success: false,
    });
  }

  const { name, price, stock } = req.body;

  const product = await productService.createProduct(
    name,
    parseFloat(price),
    Number(stock)
  );

  res.status(201).json({
    message: "Product Created",
    data: product,
    success: true,
  });
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(403).json({
      message: errors.mapped(),
      data: null,
      success: false,
    });
  }

  const { name, price, stock } = req.body;

  const product = await productService.updateProduct(Number(id), {
    name,
    price: parseFloat(price),
    stock: Number(stock),
  });

  try {
    res.status(201).json({
      message: "Product Updated",
      data: product,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Product Not Found",
      data: null,
      success: false,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await productService.deleteProduct(Number(id));
    res.status(200).json({
      message: "Product Deleted",
      data: null,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Product Not Found",
      data: null,
      success: false,
    });
  }
};