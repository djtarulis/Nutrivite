require('dotenv').config(); // Load environment variables
const express = require('express');
const axios = require('axios'); // If using Edamam or another external API
const router = express.Router();

const EDAMAM_API_URL = "https://api.edamam.com/api/food-database/v2/parser";
const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;
router.get('/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        // Call the Edamam API
        const response = await axios.get(EDAMAM_API_URL, {
            params: {
                ingr: query,
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY
            }
        });

        // Process the results
        const foods = response.data.hints.map(food => ({
            label: food.food.label,
            carbs: food.food.nutrients.CHOCDF || 0,
            fats: food.food.nutrients.FAT || 0,
            sugars: food.food.nutrients.SUGAR || 0,
            calories: food.food.nutrients.ENERC_KCAL || 0
        }));

        res.json(foods);
    } catch (error) {
        console.error('Error connecting to Edamam API:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from Edamam API' });
    }
});

module.exports = router;
