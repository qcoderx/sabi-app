import mongoose from 'mongoose';

const stayListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Listing title is required.'],
  },
  location: {
    type: String,
    required: [true, 'Location is required.'],
  },
  price: {
    type: String,
    required: [true, 'Price is required.'],
  },
  description: {
    type: String,
    required: [true, 'A description is required.'],
  },
  imageUrl: {
    type: String,
    required: [true, 'An image URL is required.'],
  },
  listerName: {
    type: String,
    required: true,
  },
  whatsappContact: {
    type: String,
    required: [true, 'A WhatsApp contact number is required.'],
  },
  gmail: {
    type: String,
    required: [true, 'A Gmail contact is required.'],
  },
  // Link to the lister via their Solana wallet address.
  listerWalletAddress: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const StayListing = mongoose.model('StayListing', stayListingSchema);
export default StayListing;
