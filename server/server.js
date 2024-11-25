require('dotenv').config(); // Load environment variables at the top
const express = require('express');
const cors = require('cors');
const foodRoutes = require('./routes/foods'); // Adjust the path based on your project structure

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// API Credentials
const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;

// Use the food search routes
app.use('/api/foods', foodRoutes);

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));