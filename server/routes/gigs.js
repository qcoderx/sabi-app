import express from 'express';
import Gig from '../models/Gig.js';

const router = express.Router();

// --- GET /api/gigs ---
// Fetches all available gigs. This is a public route for browsing opportunities.
router.get('/', async (req, res) => {
  try {
    // Finds all documents in the Gig collection and sorts them by newest first
    const gigs = await Gig.find().sort({ createdAt: -1 });
    res.status(200).json(gigs);
  } catch (err) {
    console.error("Error fetching gigs:", err);
    res.status(500).json({ message: 'A server error occurred while fetching gigs.' });
  }
});

// --- POST /api/gigs ---
// Creates a new gig or job opportunity.
// Abideen will add the Solana wallet verification logic here.
router.post('/', async (req, res) => {
  // The frontend will send the hirer's verified wallet address and other info in the request body.
  const {
    title,
    description,
    payment,
    requiredSkills,
    hirerName,
    hirerWalletAddress // This will come from the verified Solana wallet session
  } = req.body;

  // Basic validation for required fields
  if (!title || !payment || !hirerWalletAddress || !hirerName) {
    return res.status(400).json({ message: 'Please provide all required fields for the gig.' });
  }

  const newGig = new Gig({
    title,
    description,
    payment,
    requiredSkills,
    hirerName,
    hirerWalletAddress,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    // This will catch any validation errors defined in the Mongoose model
    res.status(400).json({ message: err.message });
  }
});

// --- POST /api/gigs/:id/apply ---
// Submits an application to a specific gig.
// This route would also be protected by Solana wallet verification.
router.post('/:id/apply', async (req, res) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) {
            return res.status(404).json({ message: 'Gig not found.' });
        }

        const {
            applicantWalletAddress, // This would come from the verified applicant's session
            applicantName,
            message,
            cvUrl
        } = req.body;

        if (!applicantWalletAddress || !applicantName) {
            return res.status(400).json({ message: 'Applicant name and wallet address are required.' });
        }

        const newApplication = {
            applicantWalletAddress,
            applicantName,
            message,
            cvUrl
        };

        gig.applications.push(newApplication);
        await gig.save();

        res.status(201).json(gig);

    } catch (err) {
        console.error("Error applying to gig:", err);
        res.status(500).json({ message: 'A server error occurred while applying to the gig.' });
    }
});


export default router;

