// routes/api.js

const express = require('express');
const router = express.Router();

// fertilizers
router.get('/fertilizers', (req, res) => {
  const fertilizers = [
    {
      name: 'Compost',
      definition:
        'Decomposed organic matter (kitchen scraps, leaves, grass clippings).',
      benefits:
        'Provides a balanced range of nutrients and improves soil structure.',
      instructions:
        'Mix into the soil before planting or top-dress around plants during the growing season.',
    },
    {
      name: 'Compost',
      definition:
        'Decomposed organic matter (kitchen scraps, leaves, grass clippings).',
      benefits:
        'Provides a balanced range of nutrients and improves soil structure.',
      instructions:
        'Mix into the soil before planting or top-dress around plants during the growing season.',
    },
    {
      name: 'Compost',
      definition:
        'Decomposed organic matter (kitchen scraps, leaves, grass clippings).',
      benefits:
        'Provides a balanced range of nutrients and improves soil structure.',
      instructions:
        'Mix into the soil before planting or top-dress around plants during the growing season.',
    },
  ];
  res.json(fertilizers);
});

// plants
router.get('/plants', (req, res) => {
  const plants = [
    {
      "name":"Mint",
      "days-to-harvest": "60 - 90 days",
      "watering freq": " Water regularly; keep the soil consistently moist, about 2-3 times per week.",
      "watering amount": "16 - 33 ml of water weekly",
      "fertilizer": "Organic compost or balanced fertilizer (10-10-10) once a month.",
      "fertilization cycle": " Once per growing season.",
      "soil": "Well-drained, loamy soil rich in organic matter.",
      "temperature": "15 - 21°C",
      "steps to grow": [
        "Choose a location: Mint prefers partial shade but can tolerate full sun if watered frequently.",
        "Prepare the soil: Use well-drained, loamy soil rich in organic matter.",
        "Planting: You can plant mint either from seeds, cuttings, or transplants. Space plants about 18-24 inches apart.",
        "Watering: Water regularly, keeping the soil consistently moist. Ensure the plant receives 1-2 inches (16-33 ml) of water per week.",
        "Fertilize: Use organic compost or balanced fertilizer (10-10-10) once a month.",
        "Harvest: You can start harvesting mint leaves after 60-90 days by pinching off leaves or stems as needed."
      ]
    }, 
    {
      "name":"Mint",
      "days-to-harvest": "60 - 90 days",
      "watering freq": " Water regularly; keep the soil consistently moist, about 2-3 times per week.",
      "watering amount": "16 - 33 ml of water weekly",
      "fertilizer": "Organic compost or balanced fertilizer (10-10-10) once a month.",
      "fertilization cycle": " Once per growing season.",
      "soil": "Well-drained, loamy soil rich in organic matter.",
      "temperature": "15 - 21°C",
      "steps to grow": [
        "Choose a location: Mint prefers partial shade but can tolerate full sun if watered frequently.",
        "Prepare the soil: Use well-drained, loamy soil rich in organic matter.",
        "Planting: You can plant mint either from seeds, cuttings, or transplants. Space plants about 18-24 inches apart.",
        "Watering: Water regularly, keeping the soil consistently moist. Ensure the plant receives 1-2 inches (16-33 ml) of water per week.",
        "Fertilize: Use organic compost or balanced fertilizer (10-10-10) once a month.",
        "Harvest: You can start harvesting mint leaves after 60-90 days by pinching off leaves or stems as needed."
      ]
    }, 
  ]
  res.json(plants);
});

module.exports = router;
