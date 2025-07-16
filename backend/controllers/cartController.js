
import CartItem from '../models/CartItem.js';

// Get all cart items
export const getCartItems = async (req, res) => {
  try {
    const items = await CartItem.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  const { itemName, itemType, itemDetails } = req.body;

  try {
    const newItem = await CartItem.create({
      itemName,
      itemType,
      itemDetails,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

// Delete item from cart
export const removeFromCart = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await CartItem.findByPk(id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    await item.destroy();
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove item' });
  }
};
