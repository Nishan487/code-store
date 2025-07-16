import express from 'express';
import {
  getCartItems,
  addToCart,
  removeFromCart,
} from '../controllers/cartController.js';

const router = express.Router();

router.get('/', getCartItems);
router.post('/', addToCart);
router.delete('/:id', removeFromCart);

export default router;
