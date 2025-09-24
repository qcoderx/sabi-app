import express from 'express';
import MarketItem from '../models/MarketItem.js';

const router = express.Router();

// --- GET /api/market ---
// Fetches all items for sale. This is a public route for browsing.
router.get('/', async (req, res) => {
  try {
    // Finds all documents in the MarketItem collection and sorts them by newest first
    const items = await MarketItem.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching market items:", err);
    res.status(500).json({ message: 'A server error occurred while fetching market items.' });
  }
});

// --- POST /api/market ---
// Creates a new item for sale.
// Abideen will add the Solana wallet verification logic to this endpoint.
router.post('/', async (req, res) => {
  // The frontend will send the seller's verified wallet address and other info in the request body.
  const {
    title,
    description,
    price,
    category,
    imageUrl,
    sellerName,
    sellerContact,
    sellerWalletAddress // This will come from the verified Solana wallet session
  } = req.body;

  // Basic validation for required fields
  if (!title || !price || !category || !sellerWalletAddress || !sellerName) {
    return res.status(400).json({ message: 'Please provide all required fields for the item.' });
  }

  const newItem = new MarketItem({
    title,
    description,
    price,
    category,
    imageUrl,
    sellerName,
    sellerContact,
    sellerWalletAddress,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    // This will catch any validation errors defined in the Mongoose model
    res.status(400).json({ message: err.message });
  }
});

export default router;

