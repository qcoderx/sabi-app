import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import all the route handlers
import marketRoutes from './routes/market.js';
import gigRoutes from './routes/gigs.js';
import stayRoutes from './routes/stay.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
// Enable Cross-Origin Resource Sharing for your frontend to communicate with the backend
app.use(cors());
// Enable the express app to parse JSON formatted request bodies
app.use(express.json());

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully.'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// --- API Routes ---
// Mount the imported route handlers to their specific base paths
app.use('/api/market', marketRoutes);
app.use('/api/gigs', gigRoutes);
app.use('/api/stay', stayRoutes);

// A simple base route to confirm the server is running
app.get('/', (req, res) => {
    res.send('Sabi App Backend is running!');
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});

export default app;
