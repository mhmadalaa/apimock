// routes/api.js

const express = require('express');
const router = express.Router();

// fertilizers
router.get('/fertilizers', (req, res) => {
  let message;
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
   if (fertilizers && fertilizers.length > 0) {
    message = 'success';
    res.status(200).json({ message, fertilizers });
  } else {
    message = 'failure';
    res.status(500).json({ message });
  }
 
});

// plants
router.get('/plants', (req, res) => {
  let message;
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
      image: 'https://apimock-delta.vercel.app/img/1.jpg',
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
      image: 'https://apimock-delta.vercel.app/img/2.jpg',
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
      image: 'https://apimock-delta.vercel.app/img/3.jpg',
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
      image: 'https://apimock-delta.vercel.app/img/4.jpg',
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
      image: 'https://apimock-delta.vercel.app/img/5.jpg',
    },
    {
      id: 6,
      name: 'Tomato',
      'days-to-harvest': '60-100 days (depending on variety)',
      'watering freq':
        'Water deeply 1-2 times per week.',
      'watering amount': '16 - 25 ml of water per week.',
      fertilizer: 'Balanced fertilizer (10-10-10) or high-potassium fertilizer, every 2-3 weeks.',
      'fertilization cycle': 'Every 2-3 weeks during the growing season.',
      soil: 'Well-drained, rich, moist soil.',
      temperature: '18-26°C',
      'steps to grow': [
        'Choose a sunny spot: Tomatoes need full sun for at least 6-8 hours daily.',
        'Prepare the soil: Use well-drained, fertile soil rich in organic matter.',
        'Planting: Plant tomato seedlings or seeds 24-36 inches apart. Provide stakes or cages for support.',
        'Watering: Water deeply 1-2 times per week, ensuring the soil receives 1-1.5 inches (16-25 ml) of water.',
        'Fertilize: Apply a balanced fertilizer (10-10-10) or a high-potassium fertilizer every 2-3 weeks.',
        'Harvest: Harvest tomatoes 60-100 days after planting, depending on the variety, when the fruit is firm and fully colored.',
      ],
      image: 'https://apimock-delta.vercel.app/img/6.jpg',
    },
    {
      id: 7,
      name: 'Parsley',
      'days-to-harvest': '70-90 days',
      'watering freq':
        'Water regularly, keeping the soil moist, 2-3 times per week.',
      'watering amount': '16 - 33 ml of water per week.',
      fertilizer: 'Balanced (10-10-10) or organic fertilizer every 4-6 weeks.',
      'fertilization cycle': 'Every 4-6 weeks during the growing season.',
      soil: 'Well-drained, rich soil.',
      temperature: '16-21°C',
      'steps to grow': [
        'Choose a sunny spot: Parsley can grow in full sun or partial shade.',
        'Prepare the soil: Use well-drained, rich soil.',
        'Planting: Plant parsley seeds or seedlings 6-12 inches apart.',
        'Watering: Water regularly, keeping the soil moist. Provide 1-2 inches (16-33 ml) of water per week.',
        'Fertilize: Apply a balanced fertilizer (10-10-10) every 4-6 weeks.',
        'Harvest: Harvest parsley after 70-90 days by cutting the outer leaves.',
      ],
      image: 'https://apimock-delta.vercel.app/img/7.jpg',
    },
    {
      id: 8,
      name: 'Green Onion',
      'days-to-harvest': '60-70 days',
      'watering freq':
        'Water regularly, 2-3 times per week.',
      'watering amount': '16-33 ml of water per week.',
      fertilizer: 'Nitrogen-rich fertilizer (e.g., 10-10-10) every 3-4 weeks.',
      'fertilization cycle': 'Every 3-4 weeks during growing season.',
      soil: 'Well-drained, loamy soil.',
      temperature: '15-25°C',
      'steps to grow': [
        'Choose a sunny spot: Green onions grow best in full sun.',
        'Prepare the soil: Use well-drained, loamy soil.',
        'Planting: Plant seeds or transplants 2-3 inches apart in rows 12 inches apart.',
        'Watering: Water 2-3 times per week, keeping the soil moist. Provide 1-2 inches (16-33 ml) of water per week.',
        'Fertilize: Use a nitrogen-rich fertilizer (10-10-10) every 3-4 weeks.',
        'Harvest: Harvest green onions 60-70 days after planting when the leaves reach 6-8 inches tall.',
      ],
      image: 'https://apimock-delta.vercel.app/img/8.jpg',
    },
    {
      id: 9,
      name: 'Peas',
      'days-to-harvest': '60-70 days',
      'watering freq':
        'Water regularly, 2-3 times per week.',
      'watering amount': '16 - 25 ml of water per week.',
      fertilizer: 'Organic compost or balanced (5-10-10) before planting and once during mid-growth.',
      'fertilization cycle': 'Twice during the growing season.',
      soil: 'Well-drained, fertile soil.',
      temperature: '13-24°C',
      'steps to grow': [
        'Choose a sunny spot: Peas grow best in full sunlight.',
        'Prepare the soil: Use well-drained, fertile soil.',
        'Planting: Plant peas in early spring, spacing seeds 1-2 inches apart.',
        'Watering: Water 2-3 times per week, keeping the soil moist. Provide 1-1.5 inches (16-24 ml) of water weekly.',
        'Fertilize: Apply organic compost or balanced fertilizer (5-10-10) before planting and again during mid-growth.',
        'Harvest: Harvest peas 60-70 days after planting when the pods are plump and green.',
      ],
      image: 'https://apimock-delta.vercel.app/img/9.jpg',
    },
    {
      id: 10,
      name: 'Ginger',
      'days-to-harvest': '8-10 months',
      'watering freq':
        'Water deeply 2-3 times per week; keep soil consistently moist but not waterlogged.',
      'watering amount': '16 - 25 ml of water per week.',
      fertilizer: 'Organic compost or balanced fertilizer (10-10-10) every 4-6 weeks.',
      'fertilization cycle': 'Every 4-6 weeks during growing season.',
      soil: 'Well-drained, loamy or sandy soil rich in organic matter.',
      temperature: '20-30°C',
      'steps to grow': [
        'Choose Rhizomes: Select fresh ginger rhizomes with visible "eyes."',
        'Prepare Soil: Use well-drained, sandy or loamy soil rich in organic matter.',
        'Planting: Cut rhizomes into pieces with eyes and plant about 2-4 inches deep, spaced 12-18 inches apart.',
        'Watering: Keep the soil consistently moist but not soggy, about 1 inch (16 ml) of water per week.',
        'Fertilizing: Use a balanced fertilizer (10-10-10) or organic compost every 4-6 weeks.',
        'Harvesting: Harvest when leaves begin to yellow, around 8-10 months after planting.',
      ],
      image: 'https://apimock-delta.vercel.app/img/10.jpg',
    },
    {
      id: 11,
      name: 'Garlic',
      'days-to-harvest': '180-210 days',
      'watering freq':
        'Water every 7-10 days during dry periods; reduce watering as it approaches maturity.',
      'watering amount': '16 ml of water per week.',
      fertilizer: 'High-nitrogen fertilizer (e.g., 10-10-10) in early growth, phosphorus-rich fertilizer for bulb development.',
      'fertilization cycle': 'Once at planting, and again during mid-growth.',
      soil: 'Well-drained, fertile soil with high organic content.',
      temperature: '13-24°C',
      'steps to grow': [
        'Select Seed Garlic: Choose healthy, disease-free garlic bulbs (softneck or hardneck).',
        'Prepare Soil: Loosen well-drained soil enriched with organic matter.',
        'Planting: Break bulbs into cloves and plant 2 inches deep, pointy side up, spaced 4-6 inches apart.',
        'Watering: Water regularly, keeping the soil moist about 1 inch (16 ml ) of water per week.',
        'Mulch: Apply mulch to retain moisture and suppress weeds.',
        'Harvesting: Harvest when leaves turn yellow and dry, approximately 8-9 months after planting.',
      ],
      image: 'https://apimock-delta.vercel.app/img/11.jpg',
    },
    {
      id: 12,
      name: 'Lettuce ',
      'days-to-harvest': '45-55 days',
      'watering freq':
        'Water regularly, about 2-3 times per week.',
      'watering amount': '16 - 25 ml of water per week; keep the soil moist but not waterlogged.',
      fertilizer: 'Nitrogen-rich fertilizer (e.g., 10-10-10) or organic compost every 2-4 weeks.',
      'fertilization cycle': 'Every 2-4 weeks during the growing season.',
      soil: 'Well-drained, loose, fertile soil with high organic matter.',
      temperature: '10-20°C – prefers cooler temperatures.',
      'steps to grow': [
        'Select Variety: Choose your preferred variety of lettuce (leaf, romaine, or head).',
        'Prepare Soil: Use fertile, well-drained soil with organic matter, aiming for a pH of 6.0-7.0.',
        'Planting: Sow seeds 0.24 inch deep and space them according to variety (6-12 inches apart).',
        'Watering: Keep the soil consistently moist, providing about 16 ml  of water per week.',
        'Mulch: Apply mulch to help retain moisture and suppress weeds.',
        'Harvest: Harvest leaves as needed or cut heads when mature, usually 30-70 days after planting. ',
      ],
      image: 'https://apimock-delta.vercel.app/img/12.jpg',
    },
  ];

   if (plants && plants.length > 0) {
    message = 'success';
    res.status(200).json({ message, fertilizers });
  } else {
    message = 'failure';
    res.status(500).json({ message });
  }
  

});

module.exports = router;
