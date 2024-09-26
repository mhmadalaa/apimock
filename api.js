// routes/api.js

const express = require('express');
const router = express.Router();

// fertilizers
router.get('/fertilizers', (req, res) => {
  const fertilizers = [
    {
      id: 1,
      name: 'Compost',
      definition:
        'Decomposed organic matter (kitchen scraps, leaves, grass clippings).',
      benefits:
        'Provides a balanced range of nutrients and improves soil structure.',
      instructions:
        'Mix into the soil before planting or top-dress around plants during the growing season.',
    },
    {
      id: 2,
      name: 'Coffee Grounds',
      definition: 'Used coffee grounds from brewing.',
      benefits:
        'Rich in nitrogen, improves soil structure, and attracts beneficial earthworms.',
      instructions:
        'Spread a thin layer around the base of plants or mix into compost.',
    },
    {
      id: 3,
      name: 'Eggshells',
      definition: 'Crushed or powdered eggshells.',
      benefits:
        'High in calcium, which helps strengthen plant cell walls and prevent diseases like blossom-end rot (in tomatoes).',
      instructions:
        'Crush or grind shells and sprinkle around plants or add to compost.',
    },
    {
      id: 4,
      name: 'Banana Peels',
      definition: 'Decomposing banana peels.',
      benefits:
        'Rich in potassium, phosphorus, and calcium, which help with fruiting and flowering.',
      instructions:
        'Chop up and bury near the base of plants or add to compost.',
    },
    {
      id: 5,
      name: 'Epsom Salt',
      definition: 'A natural source of magnesium sulfate.',
      benefits:
        'Provides magnesium and sulfur, which are essential for plant growth, improving chlorophyll production and nutrient absorption.',
      instructions:
        'Dissolve 1 tablespoon in 4 liters of water and water plants every few weeks.',
    },
    {
      id: 6,
      name: 'Fish Emulsion',
      definition: 'A liquid fertilizer made from decomposed fish.',
      benefits:
        'Rich in nitrogen, phosphorus, and potassium; promotes lush green growth.',
      instructions:
        'Dilute according to package instructions and apply as a foliar spray or soil drench.',
    },
    {
      id: 7,
      name: 'Wood Ash',
      definition: 'Ash from burned, untreated wood.',
      benefits:
        'Rich in potassium and calcium carbonate; raises soil pH for acid-loving plants.',
      instructions:
        'Sprinkle a small amount around plants or mix into compost.',
    },
    {
      id: 8,
      name: 'Seaweed',
      definition: 'Dried or fresh seaweed.',
      benefits:
        'Contains trace minerals and growth hormones that improve plant vigor.',
      instructions:
        'Make seaweed tea by soaking it in water for a few days, then use the liquid to water plants.',
    },
    {
      id: 9,
      name: 'Molasses',
      definition: 'A byproduct of sugar production.',
      benefits:
        'Rich in potassium, calcium, and iron; helps feed beneficial soil microbes.',
      instructions:
        'Dilute 1 tablespoon in 4 liters of water and apply to the soil.',
    },
    {
      id: 10,
      name: 'Manure (Aged)',
      definition: 'Animal manure (from cows, chickens, horses) that has been composted.',
      benefits:
        'Adds organic matter and nutrients like nitrogen, phosphorus, and potassium.',
      instructions:
        'Incorporate into the soil well before planting, or use as a top-dressing during the growing season.',
    },
  ];
  res.json(fertilizers);
});

// plants
router.get('/plants', (req, res) => {
  const plants = [
    {
      name: 'Mint',
      'days-to-harvest': '60 - 90 days',
      'watering freq':
        ' Water regularly; keep the soil consistently moist, about 2-3 times per week.',
      'watering amount': '16 - 33 ml of water weekly',
      fertilizer:
        'Organic compost or balanced fertilizer (10-10-10) once a month.',
      'fertilization cycle': ' Once per growing season.',
      soil: 'Well-drained, loamy soil rich in organic matter.',
      temperature: '15 - 21°C',
      'steps to grow': [
        'Choose a location: Mint prefers partial shade but can tolerate full sun if watered frequently.',
        'Prepare the soil: Use well-drained, loamy soil rich in organic matter.',
        'Planting: You can plant mint either from seeds, cuttings, or transplants. Space plants about 18-24 inches apart.',
        'Watering: Water regularly, keeping the soil consistently moist. Ensure the plant receives 1-2 inches (16-33 ml) of water per week.',
        'Fertilize: Use organic compost or balanced fertilizer (10-10-10) once a month.',
        'Harvest: You can start harvesting mint leaves after 60-90 days by pinching off leaves or stems as needed.',
      ],
      image: 'https://apimock-delta.vercel.app/img/2.png',
    },
    {
      name: 'Mint',
      'days-to-harvest': '60 - 90 days',
      'watering freq':
        ' Water regularly; keep the soil consistently moist, about 2-3 times per week.',
      'watering amount': '16 - 33 ml of water weekly',
      fertilizer:
        'Organic compost or balanced fertilizer (10-10-10) once a month.',
      'fertilization cycle': ' Once per growing season.',
      soil: 'Well-drained, loamy soil rich in organic matter.',
      temperature: '15 - 21°C',
      'steps to grow': [
        'Choose a location: Mint prefers partial shade but can tolerate full sun if watered frequently.',
        'Prepare the soil: Use well-drained, loamy soil rich in organic matter.',
        'Planting: You can plant mint either from seeds, cuttings, or transplants. Space plants about 18-24 inches apart.',
        'Watering: Water regularly, keeping the soil consistently moist. Ensure the plant receives 1-2 inches (16-33 ml) of water per week.',
        'Fertilize: Use organic compost or balanced fertilizer (10-10-10) once a month.',
        'Harvest: You can start harvesting mint leaves after 60-90 days by pinching off leaves or stems as needed.',
      ],
      image: 'https://apimock-delta.vercel.app/img/2.png',
    },
  ];
  res.json(plants);
});

module.exports = router;
