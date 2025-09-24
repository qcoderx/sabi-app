import mongoose from 'mongoose';

const marketItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Item title is required.'],
  },
  description: {
    type: String,
    required: [true, 'Item description is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
  },
  category: {
    type: String,
    required: [true, 'Category is required.'],
    enum: ['Electronics', 'Books', 'Fashion', 'Other'],
  },
  imageUrl: {
    type: String,
    required: [true, 'An image URL is required.'],
  },
  sellerName: {
    type: String,
    required: true,
  },
  sellerContact: {
    type: String,
    required: [true, 'A contact method is required.'],
  },
  // Link to the seller via their Solana wallet address.
  sellerWalletAddress: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const MarketItem = mongoose.model('MarketItem', marketItemSchema);
export default MarketItem;

