import admin from '../firebase.js'; // Import our initialized admin instance

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No authentication token provided. Access denied.' });
  }

  try {
    // Use the Firebase Admin SDK to verify the token
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Attach the user's info from the token to the request object
    // Now every protected route can know who the user is
    req.user = decodedToken; 
    
    next(); // If the token is valid, proceed to the actual API logic
  } catch (error) {
    console.error('Firebase token verification failed:', error);
    return res.status(403).json({ message: 'Invalid or expired token. Access forbidden.' });
  }
};

export default authMiddleware;