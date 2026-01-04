import { WEATHER_API_URL, WEATHER_API_KEY } from './src/api.js';

import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express();

// Enable CORS for all origins on your proxy server
app.use(cors({
    origin: "http://localhost:3000"
}));

// Define a weather route
app.get('/weather', async (req, res) => {
    try {
        const { lat, lon } = req.query;

        const url = `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        // Send OpenWeather data back to browser
        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch weather" });
    }
});

app.listen(5000, () => {
    console.log(`CORS proxy running on http://localhost:5000`);
});
