import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  applicantWalletAddress: { type: String, required: true },
  applicantName: String,
  message: String,
  // Link to a CV or portfolio, if provided
  cvUrl: String, 
}, { timestamps: true });

const gigSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Gig title is required.'],
  },
  description: {
    type: String,
    required: [true, 'Gig description is required.'],
  },
  payment: {
    type: String,
    required: [true, 'Payment details are required.'],
  },
  requiredSkills: [{
    type: String
  }],
  hirerName: {
    type: String,
    required: true,
  },
  // Link to the hirer via their Solana wallet address.
  hirerWalletAddress: {
    type: String,
    required: true,
  },
  // Embed applications directly within the gig document.
  applications: [applicationSchema],
}, { timestamps: true });

const Gig = mongoose.model('Gig', gigSchema);
export default Gig;

