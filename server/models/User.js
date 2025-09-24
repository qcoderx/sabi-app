import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // The user's public Solana wallet address will be their unique identifier.
  walletAddress: {
    type: String,
    required: [true, 'Solana wallet address is required.'],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    // Name isn't required upon creation, can be added in profile settings.
    default: 'Sabi User',
  },
  email: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple users to have no email, but emails that exist must be unique.
  },
  // This is the core of the Sabi ID protocol.
  isUnilagVerified: {
    type: Boolean,
    default: false,
  },
  profilePictureUrl: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    enum: ['student', 'driver'],
    required: [true, 'User role must be specified.'],
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
