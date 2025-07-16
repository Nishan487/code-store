import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const addProduct = async (req, res) => {
  const { name, type, price, imageUrl } = req.body;
  const product = await Product.create({ name, type, price, imageUrl });
  res.status(201).json(product);
};
