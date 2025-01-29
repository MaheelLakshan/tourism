import { Tour } from '@/types/types';
import Images from '@/constants/Images';

export const SampleTours: Tour[] = [
  {
    id: 1,
    name: 'City Tour',
    rating: 5,
    cost: '350',
    days: 5,
    thumbnail: Images.city_tour_thubmnail,
    // image: Images.city_tour_map, hidration error challenge
    image: 'https://www.researchgate.net/profile/Pgrni-Pussella/publication/317647093/figure/fig1/AS:668909233528832@1536491797058/Study-area-Left-Sri-Lanka-map-Right-Colombo-city-map.png',

    places: [
      {
        id: 1,
        name: 'Lord Buddha',
        x: 550,
        y: 170,
        description: 'Majestic golden Buddha statue surrounded by tranquil gardens. A spiritual oasis in the city center featuring intricate carvings and meditation spaces. Evening prayers create a serene atmosphere with chanting monks. Visitors can learn about Buddhist philosophy through guided tours. Perfect spot for cultural immersion and peaceful reflection.',
        image: Images.city_tour_buddha,
      },
      {
        id: 2,
        name: 'Lotus Tower',
        x: 480,
        y: 200,
        description: 'Iconic 350-meter tower shaped like a blooming lotus flower. Offers panoramic city views from its observation decks. Features high-tech telecommunications museum and rotating restaurant. Illuminated at night with colorful LED light displays. Symbolizes Sri Lanka technological advancement and cultural heritage.',
        image: Images.city_tour_lotusTower,
      },
      {
        id: 3,
        name: 'Muslim Religon Place',
        x: 500,
        y: 300,
        description: 'Historic Jami Ul-Alfar Mosque with striking red-and-white candy-stripe architecture. Active place of worship since 1909 featuring Indo-Saracenic design elements. Intricate geometric patterns adorn prayer halls and minarets. Visitors can observe daily prayers and learn about Islamic traditions. Combines spiritual significance with architectural grandeur.',
        image: Images.city_tour_Muslim,
      },
      {
        id: 4,
        name: 'Planet ware',
        x: 520,
        y: 420,
        description: 'Modern shopping complex with luxury boutiques and local artisan stalls. Features interactive technology exhibits and virtual reality experiences. Rooftop food court offers diverse international cuisine options. Regular cultural performances and fashion shows in central atrium. Ideal for tech enthusiasts and shopaholics alike.',
        image: Images.city_tour_planetWare,
      },
    ],
  },
  {
    id: 2,
    rating: 3,
    days: 4,
    cost: '550',
    name: 'Hill Country Bliss',
    thumbnail: Images.Hill_Country_Bliss,
    // image: Images.Hill_Country_Bliss_map, hidration error challenge
    image: 'https://www.researchgate.net/profile/Mohammed-Ibrahim-Kaleel-2/publication/322695863/figure/fig1/AS:586569589202944@1516860496732/Study-Area_Q320.jpg',
    places: [
      {
        id: 1,
        name: 'Seegiriya',
        x: 550,
        y: 280,
        description: 'Ancient rock fortress rising 200 meters above lush jungles. UNESCO site featuring 5th-century frescoes and mirror wall inscriptions. Challenging climb rewards with panoramic views of surrounding plains. Historic lion paw gateway leads to royal palace ruins. Combines archaeological wonder with natural beauty.',
        image: Images.hill_country_bliss_seegiriya,
      },
      {
        id: 2,
        name: 'Green sky',
        x: 500,
        y: 210,
        description: 'Verdant tea plantations stretching across rolling hills in geometric patterns. Working estates offer guided tours of tea processing from leaf to cup. Mist-covered valleys create ethereal morning landscapes. Charming colonial-era planter bungalows available for heritage stays. Fresh mountain air scented with camellia blossoms.',
        image: Images.hill_country_bliss_green,
      },
      {
        id: 3,
        name: 'Jungle',
        x: 400,
        y: 320,
        description: 'Dense rainforest ecosystem teeming with endemic wildlife. Guided safaris reveal elephants bathing in natural waterholes. Canopy walks through epiphyte-covered trees at 30m height. Night tours discover rare amphibians and glowing fungi. Conservation center educates on biodiversity protection efforts.',
        image: Images.hill_country_bliss_elephant,
      },
    ],
  },
  {
    id: 3,
    name: 'Colombo City',
    rating: 5,
    cost: '350',
    days: 5,
    thumbnail: Images.city_tour_thubmnail,
    // image: Images.city_tour_map, hidration error challenge
    image: 'https://www.researchgate.net/profile/Pgrni-Pussella/publication/317647093/figure/fig1/AS:668909233528832@1536491797058/Study-area-Left-Sri-Lanka-map-Right-Colombo-city-map.png',

    places: [
      {
        id: 1,
        name: 'Lord Buddha',
        x: 550,
        y: 170,
        description: 'Majestic golden Buddha statue surrounded by tranquil gardens. A spiritual oasis in the city center featuring intricate carvings and meditation spaces. Evening prayers create a serene atmosphere with chanting monks. Visitors can learn about Buddhist philosophy through guided tours. Perfect spot for cultural immersion and peaceful reflection.',
        image: Images.city_tour_buddha,
      },
      {
        id: 2,
        name: 'Lotus Tower',
        x: 480,
        y: 200,
        description: 'Iconic 350-meter tower shaped like a blooming lotus flower. Offers panoramic city views from its observation decks. Features high-tech telecommunications museum and rotating restaurant. Illuminated at night with colorful LED light displays. Symbolizes Sri Lanka technological advancement and cultural heritage.',
        image: Images.city_tour_lotusTower,
      },
      {
        id: 3,
        name: 'Muslim Religon Place',
        x: 500,
        y: 300,
        description: 'Historic Jami Ul-Alfar Mosque with striking red-and-white candy-stripe architecture. Active place of worship since 1909 featuring Indo-Saracenic design elements. Intricate geometric patterns adorn prayer halls and minarets. Visitors can observe daily prayers and learn about Islamic traditions. Combines spiritual significance with architectural grandeur.',
        image: Images.city_tour_Muslim,
      },
      {
        id: 4,
        name: 'Planet ware',
        x: 520,
        y: 420,
        description: 'Modern shopping complex with luxury boutiques and local artisan stalls. Features interactive technology exhibits and virtual reality experiences. Rooftop food court offers diverse international cuisine options. Regular cultural performances and fashion shows in central atrium. Ideal for tech enthusiasts and shopaholics alike.',
        image: Images.city_tour_planetWare,
      },
    ],
  },
];
