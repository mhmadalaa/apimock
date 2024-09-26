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
      definition:
        'Animal manure (from cows, chickens, horses) that has been composted.',
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
      id: 1,
      name: 'Mint',
      'days-to-harvest': '60 - 90 days',
      'watering freq':
        'Water regularly; keep the soil consistently moist, about 2-3 times per week.',
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
      image: 'https://apimock-delta.vercel.app/img/1.png',
    },
    {
      id: 2,
      name: 'Basil',
      'days-to-harvest': '60-75 days',
      'watering freq':
        'Water regularly; avoid waterlogging, 2-3 times per week.',
      'watering amount': '16 - 33 ml of water per week.',
      fertilizer: 'Balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
      'fertilization cycle': 'Twice during the growing season.',
      soil: 'Well-drained, rich, moist soil.',
      temperature: '20-25°C',
      'steps to grow': [
        'Choose a sunny location: Basil grows best in full sunlight (6-8 hours).',
        'Prepare the soil: Use well-drained, rich, and moist soil.',
        'Planting: Plant basil seeds or transplants after the last frost, spacing them about 12-18 inches apart.',
        'Watering: Water 2-3 times per week, ensuring the soil stays moist. Basil requires 1-2 inches (16-33 ml) of water weekly.',
        'Fertilize: Apply balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
        'Harvest: Start harvesting leaves once the plant is about 6-8 inches tall (60-75 days).',
      ],
      image: 'https://apimock-delta.vercel.app/img/2.png',
    },
    {
      id: 3,
      name: 'Aloe Vera',
      'days-to-harvest': '2-3 years (for full growth)',
      'watering freq': 'Water sparingly, once every 2-3 weeks.',
      'watering amount':
        'Water deeply, but let the soil dry out between waterings.',
      fertilizer: 'Cactus fertilizer or balanced (10-40-10) once a year.',
      'fertilization cycle': 'Once per year, during spring or summer.',
      soil: 'Well-drained, sandy or cactus potting mix.',
      temperature: '18-26°C',
      'steps to grow': [
        'Choose a sunny spot: Aloe vera thrives in indirect sunlight or partial shade.',
        'Prepare the soil: Use well-drained, sandy soil or cactus potting mix.',
        'Planting: Plant aloe vera in pots with good drainage. Space them out well if planted in the ground.',
        'Watering: Water sparingly, once every 2-3 weeks, and let the soil dry between waterings. Deep water to a depth of 1-2 inches (16.4-32.8 ml).',
        'Fertilize: Use cactus fertilizer or a balanced fertilizer (10-40-10) once a year during spring or summer.',
        'Harvest: Harvest leaves after 2-3 years of growth by cutting mature outer leaves.',
      ],
      image: 'https://apimock-delta.vercel.app/img/3.png',
    },
    {
      id: 4,
      name: 'Thyme',
      'days-to-harvest': '70-90 days',
      'watering freq':
        'Water regularly; avoid waterlogging, 2-3 times per week.',
      'watering amount': '1 inch of water every 10-15 days.',
      fertilizer: 'Organic compost or balanced (5-5-5) once a month.',
      'fertilization cycle': 'Once a month during the growing season.',
      soil: 'Well-drained, slightly alkaline soil.',
      temperature: '18-25°C',
      'steps to grow': [
        'Choose a sunny spot: Thyme requires full sun for at least 6 hours daily.',
        'Prepare the soil: Use well-drained, slightly alkaline soil.',
        'Planting: Plant thyme seeds or transplants 12-24 inches apart.',
        'Watering: Water every 10-15 days. Allow the soil to dry out between waterings, applying 1 inch (16 ml) of water each time.',
        'Fertilize: Apply organic compost or balanced fertilizer (5-5-5) monthly during the growing season.',
        'Harvest: Harvest thyme leaves after 70-90 days by snipping small sprigs.',
      ],
      image: 'https://apimock-delta.vercel.app/img/4.png',
    },
    {
      id: 5,
      name: 'Strawberry',
      'days-to-harvest': '90-120 days',
      'watering freq':
        'Water deeply 2-3 times per week.',
      'watering amount': '16-25 ml  of water per week.',
      fertilizer: 'Balanced (10-10-10) or a fertilizer specifically for strawberries, once every 4-6 weeks.',
      'fertilization cycle': 'Every 4-6 weeks during growing season.',
      soil: 'Well-drained, sandy loam soil.',
      temperature: '15-24°C',
      'steps to grow': [
        'Choose a sunny spot: Strawberries require full sun for 6-8 hours daily.',
        'Prepare the soil: Use well-drained, sandy loam soil.',
        'Planting: Plant strawberries in early spring. Space plants 12-18 inches apart, leaving enough room for runners.',
        'Watering: Water deeply 2-3 times a week, ensuring the soil stays moist. Provide 1-1.5 inches (16-25 ml) of water per week.',
        'Fertilize: Use a balanced fertilizer (10-10-10) or strawberry-specific fertilizer every 4-6 weeks.',
        'Harvest: Harvest strawberries 90-120 days after planting when the fruit is red and fully ripe.',
      ],
      image: 'https://apimock-delta.vercel.app/img/5.png',
    },
    {
      id: 2,
      name: 'Basil',
      'days-to-harvest': '60-75 days',
      'watering freq':
        'Water regularly; avoid waterlogging, 2-3 times per week.',
      'watering amount': '16 - 33 ml of water per week.',
      fertilizer: 'Balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
      'fertilization cycle': 'Twice during the growing season.',
      soil: 'Well-drained, rich, moist soil.',
      temperature: '20-25°C',
      'steps to grow': [
        'Choose a sunny location: Basil grows best in full sunlight (6-8 hours).',
        'Prepare the soil: Use well-drained, rich, and moist soil.',
        'Planting: Plant basil seeds or transplants after the last frost, spacing them about 12-18 inches apart.',
        'Watering: Water 2-3 times per week, ensuring the soil stays moist. Basil requires 1-2 inches (16-33 ml) of water weekly.',
        'Fertilize: Apply balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
        'Harvest: Start harvesting leaves once the plant is about 6-8 inches tall (60-75 days).',
      ],
      image: 'https://apimock-delta.vercel.app/img/2.png',
    },
    {
      id: 2,
      name: 'Basil',
      'days-to-harvest': '60-75 days',
      'watering freq':
        'Water regularly; avoid waterlogging, 2-3 times per week.',
      'watering amount': '16 - 33 ml of water per week.',
      fertilizer: 'Balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
      'fertilization cycle': 'Twice during the growing season.',
      soil: 'Well-drained, rich, moist soil.',
      temperature: '20-25°C',
      'steps to grow': [
        'Choose a sunny location: Basil grows best in full sunlight (6-8 hours).',
        'Prepare the soil: Use well-drained, rich, and moist soil.',
        'Planting: Plant basil seeds or transplants after the last frost, spacing them about 12-18 inches apart.',
        'Watering: Water 2-3 times per week, ensuring the soil stays moist. Basil requires 1-2 inches (16-33 ml) of water weekly.',
        'Fertilize: Apply balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
        'Harvest: Start harvesting leaves once the plant is about 6-8 inches tall (60-75 days).',
      ],
      image: 'https://apimock-delta.vercel.app/img/2.png',
    },
    {
      id: 2,
      name: 'Basil',
      'days-to-harvest': '60-75 days',
      'watering freq':
        'Water regularly; avoid waterlogging, 2-3 times per week.',
      'watering amount': '16 - 33 ml of water per week.',
      fertilizer: 'Balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
      'fertilization cycle': 'Twice during the growing season.',
      soil: 'Well-drained, rich, moist soil.',
      temperature: '20-25°C',
      'steps to grow': [
        'Choose a sunny location: Basil grows best in full sunlight (6-8 hours).',
        'Prepare the soil: Use well-drained, rich, and moist soil.',
        'Planting: Plant basil seeds or transplants after the last frost, spacing them about 12-18 inches apart.',
        'Watering: Water 2-3 times per week, ensuring the soil stays moist. Basil requires 1-2 inches (16-33 ml) of water weekly.',
        'Fertilize: Apply balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
        'Harvest: Start harvesting leaves once the plant is about 6-8 inches tall (60-75 days).',
      ],
      image: 'https://apimock-delta.vercel.app/img/2.png',
    },
    {
      id: 2,
      name: 'Basil',
      'days-to-harvest': '60-75 days',
      'watering freq':
        'Water regularly; avoid waterlogging, 2-3 times per week.',
      'watering amount': '16 - 33 ml of water per week.',
      fertilizer: 'Balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
      'fertilization cycle': 'Twice during the growing season.',
      soil: 'Well-drained, rich, moist soil.',
      temperature: '20-25°C',
      'steps to grow': [
        'Choose a sunny location: Basil grows best in full sunlight (6-8 hours).',
        'Prepare the soil: Use well-drained, rich, and moist soil.',
        'Planting: Plant basil seeds or transplants after the last frost, spacing them about 12-18 inches apart.',
        'Watering: Water 2-3 times per week, ensuring the soil stays moist. Basil requires 1-2 inches (16-33 ml) of water weekly.',
        'Fertilize: Apply balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
        'Harvest: Start harvesting leaves once the plant is about 6-8 inches tall (60-75 days).',
      ],
      image: 'https://apimock-delta.vercel.app/img/2.png',
    },
    {
      id: 2,
      name: 'Basil',
      'days-to-harvest': '60-75 days',
      'watering freq':
        'Water regularly; avoid waterlogging, 2-3 times per week.',
      'watering amount': '16 - 33 ml of water per week.',
      fertilizer: 'Balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
      'fertilization cycle': 'Twice during the growing season.',
      soil: 'Well-drained, rich, moist soil.',
      temperature: '20-25°C',
      'steps to grow': [
        'Choose a sunny location: Basil grows best in full sunlight (6-8 hours).',
        'Prepare the soil: Use well-drained, rich, and moist soil.',
        'Planting: Plant basil seeds or transplants after the last frost, spacing them about 12-18 inches apart.',
        'Watering: Water 2-3 times per week, ensuring the soil stays moist. Basil requires 1-2 inches (16-33 ml) of water weekly.',
        'Fertilize: Apply balanced fertilizer (5-5-5 or 10-10-10) every 3-4 weeks.',
        'Harvest: Start harvesting leaves once the plant is about 6-8 inches tall (60-75 days).',
      ],
      image: 'https://apimock-delta.vercel.app/img/2.png',
    },
  ];
  res.json(plants);
});

module.exports = router;
