import express from 'express';
import StayListing from '../models/StayListing.js';

const router = express.Router();

// --- GET /api/stay ---
// Fetches all accommodation listings. This is a public route.
router.get('/', async (req, res) => {
  try {
    // Finds all documents in the StayListing collection and sorts them by newest first
    const listings = await StayListing.find().sort({ createdAt: -1 });
    res.status(200).json(listings);
  } catch (err) {
    console.error("Error fetching stay listings:", err);
    res.status(500).json({ message: 'A server error occurred while fetching listings.' });
  }
});

// --- POST /api/stay ---
// Creates a new accommodation listing.
// Abideen will add the Solana wallet verification logic here.
router.post('/', async (req, res) => {
  // In a real scenario, you'd first verify the user's Solana signature
  // and get their wallet address and name before proceeding.
  const {
    title,
    location,
    price,
    description,
    imageUrl,
    listerName,
    whatsappContact,
    gmail,
    listerWalletAddress // This would come from the verified wallet session
  } = req.body;

  // Basic validation
  if (!title || !location || !price || !listerWalletAddress || !listerName) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  const newListing = new StayListing({
    title,
    location,
    price,
    description,
    imageUrl,
    listerName,
    whatsappContact,
    gmail,
    listerWalletAddress,
  });

  try {
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (err) {
    // Catches validation errors from the Mongoose model
    res.status(400).json({ message: err.message });
  }
});

export default router;
