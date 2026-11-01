import { MenuItem, CateringPackage, CateringService, Testimonial } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Biryani & Rice
  {
    id: 'biryani-hyderabadi-dum',
    name: 'Royal Hyderabadi Dum Chicken Biryani',
    category: 'biryani',
    subCategory: 'Royal Dum Biryani',
    dietary: 'non-veg',
    spiceLevel: 'Spicy',
    pricePerPlateEst: 260,
    description: 'Slow-cooked marinated spring chicken layered with long-grain basmati rice, caramelized onions (birista), saffron milk, and royal aromatics cooked in sealed clay pots.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Prime Farm Chicken', 'Aged Basmati Rice', 'Kashmiri Saffron', 'Pure Desi Ghee', 'Whole Cardamom & Mace'],
    allergens: ['Dairy'],
    portionServing: '350g per serving with Mirchi Ka Salan & Burrani Raita'
  },
  {
    id: 'biryani-mutton-lucknowi',
    name: 'Awadhi Mutton Dum Biryani',
    category: 'biryani',
    subCategory: 'Royal Dum Biryani',
    dietary: 'non-veg',
    spiceLevel: 'Medium',
    pricePerPlateEst: 340,
    description: 'Tender baby goat meat marinated overnight in royal Awadhi spice potli, layered with kewra-scented basmati rice, saffron, and cooked on slow charcoal embers.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Tender Goat Meat', 'Select Aged Basmati', 'Awadhi Shahi Potli Masala', 'Rose Water', 'Kewra & Saffron'],
    allergens: ['Dairy', 'Nuts'],
    portionServing: '380g per serving served with Royal Salan'
  },
  {
    id: 'biryani-paneer-tikka-dum',
    name: 'Smoked Paneer Tikka Dum Biryani',
    category: 'biryani',
    subCategory: 'Vegetarian Specialties',
    dietary: 'veg',
    spiceLevel: 'Medium',
    pricePerPlateEst: 220,
    description: 'Charcoal-grilled malai paneer cubes tossed in tandoori marinade, layered with fragrant basmati, fried cashews, fresh mint, and slow dum cooked.',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: true,
    ingredients: ['Organic Malai Paneer', 'Basmati Rice', 'Charcoal Smoke Infusion', 'Golden Cashews', 'Fresh Mint & Coriander'],
    allergens: ['Dairy', 'Nuts'],
    portionServing: '320g per serving with Boondi Raita'
  },
  {
    id: 'biryani-subz-e-bahar',
    name: 'Nawabi Subz-e-Bahar Biryani',
    category: 'biryani',
    subCategory: 'Vegetarian Specialties',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 200,
    description: 'Fresh seasonal florets, baby potatoes, green peas, carrots, and sweet bell peppers simmered in a yogurt-cardamom broth and sealed with saffron rice.',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: false,
    ingredients: ['Garden Fresh Vegetables', 'Basmati Rice', 'Yogurt Dum Marinade', 'Saffron', 'Whole Spices'],
    allergens: ['Dairy'],
    portionServing: '300g per serving with Cucumber Mint Raita'
  },
  {
    id: 'jeera-pulao-zafrani',
    name: 'Zafrani Kaju Pulao & Jeera Rice',
    category: 'biryani',
    subCategory: 'Rice Delicacies',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 140,
    description: 'Long-grain basmati rice infused with whole Shahjeera, roasted golden cashews, clarified butter, and subtle saffron threads.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: false,
    ingredients: ['Basmati Rice', 'Shah Jeera', 'Desi Ghee', 'Roasted Cashews'],
    allergens: ['Dairy', 'Nuts'],
    portionServing: '250g per serving'
  },

  // Starters & Kebabs
  {
    id: 'starter-chimichurri-chicken',
    name: 'AZ Signature Chimichurri Chicken Tikka',
    category: 'starters',
    subCategory: 'Tandoor Grill',
    dietary: 'non-veg',
    spiceLevel: 'Spicy',
    pricePerPlateEst: 240,
    description: 'Our iconic Chembur crowd-favorite! Tender chicken breast chunks infused with garlic cilantro chimichurri, cooked over blazing charcoal embers.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Boneless Chicken Breast', 'Fresh Coriander & Parsley', 'Smoked Garlic', 'Olive Oil & Lime Juice', 'Crushed Birdseye Chili'],
    allergens: [],
    portionServing: '4 succulent pieces per guest'
  },
  {
    id: 'starter-galouti-kebab',
    name: 'Royal Lucknowi Galouti Kebab with Ulte Tawe Ka Paratha',
    category: 'starters',
    subCategory: 'Royal Mughlai Kebabs',
    dietary: 'non-veg',
    spiceLevel: 'Medium',
    pricePerPlateEst: 290,
    description: 'Melt-in-mouth finely minced lamb kebabs marinated with raw papaya and 28 secret whole spices, served on mini saffron coin parathas.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Finely Minced Tender Lamb', 'Raw Papaya Pulp', '28 Royal Spices', 'Pure Ghee', 'Saffron'],
    allergens: ['Dairy', 'Gluten'],
    portionServing: '3 kebabs on mini parathas'
  },
  {
    id: 'starter-murgh-malai-tikka',
    name: 'Murgh Malai Reshmi Kebab',
    category: 'starters',
    subCategory: 'Tandoor Grill',
    dietary: 'non-veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 230,
    description: 'Supreme chicken thigh fillets marinated in clotted cream, cardamom, processed cheese, and white pepper, glazed to golden perfection.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: true,
    ingredients: ['Chicken Thigh', 'Fresh Heavy Cream', 'Cardamom', 'White Pepper', 'Processed Cheddar'],
    allergens: ['Dairy'],
    portionServing: '4 tender kebabs'
  },
  {
    id: 'starter-tandoori-mushroom-cheese',
    name: 'Tandoori Stuffed Mushroom Cheese Melt',
    category: 'starters',
    subCategory: 'Vegetarian Starters',
    dietary: 'veg',
    spiceLevel: 'Medium',
    pricePerPlateEst: 190,
    description: 'Button mushroom caps filled with spiced jalapeno-paneer cheese fondue, skewered and baked in clay tandoor with roasted bell pepper salsa.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Fresh Button Mushrooms', 'Mozzarella & Processed Cheese', 'Finely Diced Jalapenos', 'Tandoor Marinade'],
    allergens: ['Dairy'],
    portionServing: '4 stuffed caps'
  },
  {
    id: 'starter-dahi-ke-kebab',
    name: 'Crispy Awadhi Dahi Ke Kebab',
    category: 'starters',
    subCategory: 'Vegetarian Starters',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 180,
    description: 'Hung yogurt discs seasoned with chopped green chilies, cilantro, and roasted cumin, coated in golden panko and shallow fried till crunchy.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: true,
    ingredients: ['Hung Curd (Chakka)', 'Roasted Cumin', 'Green Chilies', 'Fresh Coriander', 'Crumbs'],
    allergens: ['Dairy', 'Gluten'],
    portionServing: '3 crispy medallions'
  },
  {
    id: 'starter-soya-chaap-afghani',
    name: 'Charcoal Afghani Malai Soya Chaap',
    category: 'starters',
    subCategory: 'Vegetarian Starters',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 175,
    description: 'Soybean chaap rolls marinated in cashew-yogurt paste, tossed in cracked black pepper and melted butter over live coals.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: false,
    ingredients: ['Soya Chaap', 'Cashew Paste', 'Yogurt', 'Crushed Peppercorns', 'Butter'],
    allergens: ['Dairy', 'Soy', 'Nuts'],
    portionServing: '4 pieces'
  },

  // Curries & Main Course
  {
    id: 'curry-butter-chicken-old-delhi',
    name: 'Old Delhi Style Butter Chicken (Murgh Makhani)',
    category: 'curries',
    subCategory: 'Non-Vegetarian Curries',
    dietary: 'non-veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 270,
    description: 'Smoked tandoori chicken tikka simmered in a satin-smooth gravy of vine-ripened tomatoes, honey, fenugreek leaves (kasuri methi), and white butter.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Charcoal-Grilled Chicken Tikka', 'Vine Ripe Tomatoes', 'Makhan (White Butter)', 'Kasuri Methi', 'Honey & Cream'],
    allergens: ['Dairy', 'Nuts'],
    portionServing: '250g per bowl'
  },
  {
    id: 'curry-chicken-bhuna-masala',
    name: 'AZ Darbar Chicken Bhuna Gosht Style',
    category: 'curries',
    subCategory: 'Non-Vegetarian Curries',
    dietary: 'non-veg',
    spiceLevel: 'Spicy',
    pricePerPlateEst: 260,
    description: 'Boneless chicken morsels slow-braised with sliced onions, ginger juliennes, garlic, and fresh ground dry-roasted coriander and red chilies.',
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: true,
    ingredients: ['Chicken Thigh', 'Caramelized Onion Gravy', 'Ginger Juliennes', 'Whole Garam Masala', 'Fresh Coriander'],
    allergens: [],
    portionServing: '250g rich gravy'
  },
  {
    id: 'curry-dal-makhani-darbar',
    name: 'AZ 24-Hour Charcoal Dal Makhani',
    category: 'curries',
    subCategory: 'Vegetarian Curries',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 190,
    description: 'Black urad lentils and kidney beans slow-simmered over tandoor charcoal embers for 24 hours with tomato reduction, cream, and churned butter.',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Whole Black Urad Lentils', 'Rajma Beans', 'Slow Smoke Charcoal', 'Desi Butter & Cream'],
    allergens: ['Dairy'],
    portionServing: '250g thick velvety dal'
  },
  {
    id: 'curry-paneer-lababdar',
    name: 'Shahi Paneer Lababdar',
    category: 'curries',
    subCategory: 'Vegetarian Curries',
    dietary: 'veg',
    spiceLevel: 'Medium',
    pricePerPlateEst: 220,
    description: 'Soft cottage cheese cubes cooked in a chunky spiced tomato-onion reduction infused with grated paneer and melon seed paste.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: true,
    ingredients: ['Malai Paneer', 'Melon Seeds (Magaz)', 'Tomatoes', 'Capsicum', 'Cashew Cream'],
    allergens: ['Dairy', 'Nuts'],
    portionServing: '250g gravy'
  },
  {
    id: 'curry-mutton-rogan-josh',
    name: 'Kashmiri Mutton Rogan Josh',
    category: 'curries',
    subCategory: 'Non-Vegetarian Curries',
    dietary: 'non-veg',
    spiceLevel: 'Spicy',
    pricePerPlateEst: 350,
    description: 'Prime mutton cuts braised in an aromatic crimson gravy enriched with Kashmiri degi mirch, mawal flower, fennel powder, and dried ginger.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Tender Bone-in Mutton', 'Kashmiri Red Chilies', 'Fennel Powder (Saunf)', 'Ginger (Sonth)', 'Mustard Oil'],
    allergens: [],
    portionServing: '280g royal mutton curry'
  },

  // Indian Breads
  {
    id: 'bread-garlic-butter-naan',
    name: 'Charcoal Garlic Butter Naan & Cheese Naan',
    category: 'breads',
    subCategory: 'Tandoor Breads',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 65,
    description: 'Freshly stretched leavened refined flour flatbread baked on the inner walls of live clay tandoor, brushed with roasted garlic butter and cilantro.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: true,
    ingredients: ['Refined Flour', 'Fresh Yeast', 'Milk', 'Roasted Garlic', 'Ghee Butter'],
    allergens: ['Gluten', 'Dairy'],
    portionServing: 'Live baked on-site at event'
  },
  {
    id: 'bread-laccha-paratha',
    name: 'Multi-Layered Pudina Laccha Paratha',
    category: 'breads',
    subCategory: 'Tandoor Breads',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 55,
    description: 'Flaky, spiral whole-wheat paratha layered with clarified butter and sprinkled with dried mint flakes, cooked to crisp golden perfection.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: false,
    ingredients: ['Whole Wheat Flour', 'Desi Ghee', 'Dry Mint Leaves'],
    allergens: ['Gluten', 'Dairy'],
    portionServing: '1 large crispy layered paratha'
  },
  {
    id: 'bread-roomali-roti',
    name: 'Handkerchief Roomali Roti (Live Tawe Pe)',
    category: 'breads',
    subCategory: 'Tandoor Breads',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 45,
    description: 'Paper-thin handkerchief rotis hand-spun and flipped on an inverted spherical wok (ulta tawa) live in front of guests.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Wheat & Maida Blend', 'Milk', 'Salt'],
    allergens: ['Gluten', 'Dairy'],
    portionServing: 'Freshly spun on live counter'
  },

  // Live Food Stations
  {
    id: 'live-chaat-station',
    name: 'Live Purani Dilli Chaat & Pani Puri Counter',
    category: 'live-counters',
    subCategory: 'Live Interactive Stations',
    dietary: 'veg',
    spiceLevel: 'Medium',
    pricePerPlateEst: 160,
    description: 'Live interactive counter offering crisp Purani Dilli Golgappas with 5 flavored waters (Hing, Pudina, Khatta Meetha, Jeera, Garlic), Dahi Papdi Chaat, and Sev Puri.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Semolina Crispy Puris', 'Spiced Potato & Sprout Filling', '5 Herb Waters', 'Sweet Tamarind Chutney'],
    allergens: ['Gluten'],
    portionServing: 'Unlimited live counter setup for 3 hours'
  },
  {
    id: 'live-bbq-tandoor',
    name: 'Live Charcoal Tandoor & Sigri BBQ Station',
    category: 'live-counters',
    subCategory: 'Live Interactive Stations',
    dietary: 'non-veg',
    spiceLevel: 'Spicy',
    pricePerPlateEst: 320,
    description: 'Dedicated live charcoal tandoor operated by our tandoori ustaad, serving piping hot kebabs, tikkas, and stuffed kulchas straight from the skewers.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Charcoal Sigri', 'Live Iron Skewers', 'Marinades', 'Fresh Mint Chutney'],
    allergens: ['Dairy'],
    portionServing: 'Live cooking station with 2 dedicated chefs'
  },
  {
    id: 'live-jalebi-rabdi',
    name: 'Live Hot Kesari Jalebi & Laccha Rabdi Counter',
    category: 'live-counters',
    subCategory: 'Live Interactive Stations',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 130,
    description: 'Live sweet station featuring spiral crispy golden jalebis fried in pure desi ghee and dipped in saffron syrup, served hot with chilled creamy laccha rabdi.',
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Fermented Batter', 'Desi Ghee', 'Saffron Sugar Syrup', 'Full Cream Milk Rabdi', 'Pistachio Flakes'],
    allergens: ['Gluten', 'Dairy', 'Nuts'],
    portionServing: 'Live dessert setup with sweet master'
  },

  // Desserts
  {
    id: 'dessert-shahi-tukda',
    name: 'Shahi Tukda with Zafrani Khoya Rabdi',
    category: 'desserts',
    subCategory: 'Royal Desserts',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 120,
    description: 'Golden fried brioche crisps steeped in cardamom sugar nectar, topped with thick condensed saffron rabdi, silver varq, and crushed silvered almonds.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: true,
    isPopular: true,
    ingredients: ['Milk Bread Ghee Toast', 'Saffron Cardamom Syrup', 'Mawa Rabdi', 'Almonds & Pistachios'],
    allergens: ['Dairy', 'Gluten', 'Nuts'],
    portionServing: '2 pieces per guest'
  },
  {
    id: 'dessert-gulab-jamun-pista',
    name: 'Desi Ghee Angoori Gulab Jamun',
    category: 'desserts',
    subCategory: 'Royal Desserts',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 95,
    description: 'Fresh milk solids hand-rolled and gently fried in desi ghee, soaked in rose-infused green cardamom syrup.',
    image: 'https://images.unsplash.com/photo-1605197148560-6b6f70dc01b7?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: true,
    ingredients: ['Fresh Khoya (Mawa)', 'Chhena', 'Cardamom', 'Gulab Jal (Rose Water)'],
    allergens: ['Dairy'],
    portionServing: '2 hot jamuns'
  },
  {
    id: 'dessert-matka-kulfi',
    name: 'Traditional Royal Malai Matka Kulfi',
    category: 'desserts',
    subCategory: 'Chilled Treats',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 110,
    description: 'Authentic slow-reduced buffalo milk kulfi infused with saffron threads and green cardamom, frozen and served inside miniature earthen clay pots (matkas).',
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: false,
    ingredients: ['Slow Reduced Milk', 'Saffron', 'Cardamom', 'Pistachio'],
    allergens: ['Dairy', 'Nuts'],
    portionServing: '1 earthenware pot per guest'
  },

  // Beverages
  {
    id: 'bev-shahi-rose-sherbet',
    name: 'Shahi Rooh Afza Rose Thandai & Mint Cooler',
    category: 'beverages',
    subCategory: 'Welcome Drinks',
    dietary: 'veg',
    spiceLevel: 'Mild',
    pricePerPlateEst: 70,
    description: 'Refreshing welcome drinks station featuring chilled royal rose sherbet with chia seeds and our signature spiced cumin mint coolers.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    isChefsSpecial: false,
    isPopular: false,
    ingredients: ['Rose Essence', 'Sabja (Basil) Seeds', 'Fresh Mint', 'Lime Juice', 'Rock Salt'],
    allergens: [],
    portionServing: 'Unlimited welcome drinks on arrival'
  }
];

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'package-silver-gathering',
    name: 'Silver Classic Gathering',
    tagline: 'Ideal for intimate family get-togethers, puja feasts, and house parties',
    pricePerPlate: 499,
    minGuests: 25,
    badge: 'Popular for House Parties',
    recommendedFor: 'House Parties, Birthdays, Anniversaries (25 - 80 Guests)',
    inclusions: {
      welcomeDrinks: 1,
      starters: 3,
      mainCurries: 2,
      biryaniRice: 1,
      breads: 2,
      desserts: 1
    },
    sampleItems: [
      'Welcome: Spiced Mint Shikanji',
      'Starters: Chimichurri Chicken Tikka, Crispy Dahi Ke Kebab, Veg Spring Rolls',
      'Mains: Old Delhi Butter Chicken, Dal Makhani Darbar',
      'Rice: Royal Hyderabadi Dum Chicken Biryani or Veg Dum Biryani',
      'Breads: Butter Tandoori Naan & Laccha Paratha',
      'Dessert: Hot Angoori Gulab Jamun with Rabdi'
    ],
    features: [
      'Chafing dishes and high-grade food warmers included',
      'Standard eco-friendly biodegradable tableware or melamine plates',
      'Delivery, setup, and teardown included within Mumbai & Navi Mumbai',
      'Dedicated buffet attendant for smooth replenishment'
    ]
  },
  {
    id: 'package-gold-celebration',
    name: 'Gold Corporate & Celebration',
    tagline: 'Premium multi-course spread crafted for corporate annual galas, sangeet, and festive milestones',
    pricePerPlate: 799,
    minGuests: 50,
    badge: 'Best Value for Events',
    recommendedFor: 'Corporate Dinners, Pre-Wedding Cocktails, Engagement Parties (50 - 250 Guests)',
    inclusions: {
      welcomeDrinks: 2,
      starters: 5,
      mainCurries: 4,
      biryaniRice: 2,
      breads: 3,
      desserts: 2,
      liveStationsIncluded: 1
    },
    sampleItems: [
      'Welcome Drinks: Shahi Rose Sherbet + Fresh Mint Cooler',
      'Starters: Murgh Malai Tikka, Chimichurri Chicken, Tandoori Mushroom Melt, Galouti on Mini Paratha, Paneer Tikka',
      'Live Station Included: Live Purani Dilli Chaat & Pani Puri Counter',
      'Mains: Chicken Bhuna Masala, Shahi Paneer Lababdar, 24-Hour Charcoal Dal Makhani, Subz Diwani Handi',
      'Rice: Hyderabadi Chicken Biryani + Zafrani Kaju Pulao',
      'Breads: Garlic Naan, Pudina Laccha Paratha, Tandoori Roti',
      'Desserts: Shahi Tukda Zafrani + Royal Matka Kulfi'
    ],
    features: [
      'Live interactive food station with dedicated live chef',
      'Porcelain bone china crockery, polished brass silverware, and glassware',
      'Uniformed catering captains and buffet servers (1 server per 25 guests)',
      'Pre-event food tasting session for 2 host representatives'
    ]
  },
  {
    id: 'package-royal-diamond-wedding',
    name: 'Royal Diamond Wedding Banquet',
    tagline: 'An opulent royal feast with live tandoor sigris, signature dum handis, and luxury banquet presentation',
    pricePerPlate: 1299,
    minGuests: 100,
    badge: 'Grand Wedding Choice',
    recommendedFor: 'Grand Weddings, Receptions, Luxury Banquets (100 - 1500+ Guests)',
    inclusions: {
      welcomeDrinks: 3,
      starters: 6,
      mainCurries: 5,
      biryaniRice: 2,
      breads: 4,
      desserts: 3,
      liveStationsIncluded: 2
    },
    sampleItems: [
      'Welcome Drinks: Thandai Shot Bar + Virgin Mojito + Saffron Badam Milk',
      'Live Stations: Live Charcoal Sigri Tandoor + Live Hot Kesari Jalebi Counter',
      'Starters: Royal Galouti Kebabs, Chimichurri Chicken, Malai Murgh Reshmi, Tandoori Mushroom Cheese Melt, Dahi Ke Kebab, Amritsari Fish Tikka',
      'Mains: Kashmiri Mutton Rogan Josh, Old Delhi Butter Chicken, Shahi Paneer Lababdar, 24-Hour Dal Makhani, Dum Aloo Kashmiri',
      'Rice: Awadhi Mutton Dum Biryani + Hyderabadi Chicken Biryani + Subz Pulao',
      'Breads: Live Roomali Roti, Garlic Butter Naan, Laccha Paratha, Missi Roti',
      'Desserts: Live Jalebi Rabdi + Shahi Tukda + Angoori Gulab Jamun + Assorted Kulfi'
    ],
    features: [
      '2 Live interactive counters with culinary master chefs',
      'Royal copper & brass banquet chafing displays with decorative florals',
      'Complete hospitality team: Event Banquet Manager, Head Chefs, Bartenders/Mocktail Masters, and Uniformed Waitstaff',
      'VIP table service for host elders and bridal entourage',
      'Complimentary tasting session for 4 family members prior to wedding'
    ]
  },
  {
    id: 'package-mughlai-dastarkhwan',
    name: 'The Shahi Mughlai Dastarkhwan',
    tagline: 'Centuries-old royal recipes celebrating the zenith of North Indian and Awadhi culinary heritage',
    pricePerPlate: 999,
    minGuests: 40,
    badge: 'Chef’s Signature Dastarkhwan',
    recommendedFor: 'Eid Feasts, Dawats, Family Reunions, Royal Dinner Galas',
    inclusions: {
      welcomeDrinks: 2,
      starters: 4,
      mainCurries: 4,
      biryaniRice: 2,
      breads: 3,
      desserts: 2,
      liveStationsIncluded: 1
    },
    sampleItems: [
      'Starters: Galouti Kebab, Chimichurri Chicken, Murgh Malai Tikka, Paneer Angara',
      'Live Station: Live Roomali Roti flipping station on inverted wok',
      'Mains: Mutton Nihari with Khameeri Roti, Chicken Bhuna Gosht, 24-hr Dal Makhani, Paneer Lababdar',
      'Rice: Awadhi Mutton Dum Biryani & Chicken Dum Biryani',
      'Desserts: Shahi Tukda with Khoya Rabdi & Phirni in Clay Earthen Pots'
    ],
    features: [
      'Traditional Dastarkhwan floor seating or royal banquet setup option',
      'Hand-crafted brass clay chillum handi presentation',
      'Dedicated carver and Biryani Deg Master'
    ]
  }
];

export const CATERING_SERVICES: CateringService[] = [
  {
    id: 'wedding-catering',
    title: 'Grand Wedding & Reception Catering',
    shortDescription: 'From intimate Haldi & Sangeet gatherings to grand 1,500+ guest wedding feasts, we design majestic dining experiences.',
    fullDescription: 'Your wedding day represents a milestone of unforgettable memories. AZ Catering brings culinary majesty to every ritual, starting with colorful street-food chaat counters during Mehendi, fiery live tandoor sigris for cocktail night, through to majestic multi-tier royal buffets with sealed clay pot biryanis for the grand reception dinner.',
    iconName: 'Crown',
    bannerImage: 'https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80'
    ],
    guestCapacity: '100 to 2,000+ Guests',
    pricingStartsAt: '₹799 per plate',
    idealEvents: ['Wedding Receptions', 'Sangeet & Cocktail Nights', 'Haldi & Mehendi Lunches', 'Engagement Ceremonies'],
    whatWeProvide: [
      'Grand Royal copper chafers and floral banquet setup',
      'Interactive live food stations (Chaat, Tandoor, Jalebi, Mocktail bar)',
      'VIP table service for family dignitaries and bridal party',
      'Pre-event multi-course menu tasting with Executive Chef',
      'Full staff including Event Captain, Chefs, Baristas & Waitstaff',
      'Hygienic waste segregation and venue cleanup support'
    ],
    staffingDetails: '1 Event Director, 2 Sous Chefs, 1 Captain per 50 guests, 1 Server per 20 guests',
    setupTime: 'Setup begins 4 hours prior to guest arrival'
  },
  {
    id: 'corporate-catering',
    title: 'Corporate Galas & Office Summits',
    shortDescription: 'Professional, punctual, and impeccable catering for boardroom meetings, product launches, and annual celebrations.',
    fullDescription: 'Elevate your corporate image with dining that mirrors your standard of excellence. AZ Catering delivers seamless culinary coordination for corporate events across Mumbai, BKC, Lower Parel, and Navi Mumbai. We manage everything from compact boxed gourmet executive lunches to grand conference buffets.',
    iconName: 'Briefcase',
    bannerImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80'
    ],
    guestCapacity: '30 to 1,000 Guests',
    pricingStartsAt: '₹450 per plate',
    idealEvents: ['Annual Corporate Day', 'Boardroom Executive Luncheons', 'Investor Summits & Conferences', 'Company Milestones & Townhalls'],
    whatWeProvide: [
      'Punctual on-time delivery and silent setup',
      'Clear dietary labeling (Veg, Jain, Halal, Gluten-Free, Vegan)',
      'Gourmet meal boxes or full silver buffet layouts',
      'Corporate invoicing with GST compliance',
      'Beverage and artisan coffee/tea stations'
    ],
    staffingDetails: 'Corporate liaison manager, dedicated buffet technicians, and uniformed servers',
    setupTime: 'Arrives 90 minutes prior to meeting schedule'
  },
  {
    id: 'house-party-catering',
    title: 'Private House Parties & Milestones',
    shortDescription: 'Bring restaurant-quality biryanis and piping hot tikkas to your home without lifting a finger.',
    fullDescription: 'Hosting 25 to 100 close friends or family at home or a clubhouse? Leave the cooking, presentation, and warmers to AZ Catering. We arrive with compact chafing dishes, hot tandoor platters, and sealed degs of biryani, setting up an exquisite buffet that keeps food piping hot throughout your evening.',
    iconName: 'Home',
    bannerImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
    ],
    guestCapacity: '20 to 100 Guests',
    pricingStartsAt: '₹399 per plate',
    idealEvents: ['Housewarming (Griha Pravesh)', 'Birthdays & Anniversaries', 'Festive Dinners (Diwali, Eid, New Year)', 'Cricket & Game Night Watch Parties'],
    whatWeProvide: [
      'Compact chafing warmers and fuel canisters',
      'Choice of disposable eco-areca plates or premium ceramic setup',
      'Pre-portioned garnishes, raitas, chutneys, and breads',
      'Optional private chef or helper on request'
    ],
    staffingDetails: '1 Delivery Lead + Optional Butler / Server for 4 hours',
    setupTime: '45 minutes before party starts'
  },
  {
    id: 'live-food-stations',
    title: 'Live Interactive Food Stations',
    shortDescription: 'Theater of food: Live sigri tandoor, street-style chaat counters, and flipping roomali rotis before your guests’ eyes.',
    fullDescription: 'Nothing enlivens an event quite like the sights, sounds, and aromas of live culinary theater. Our live interactive stations turn dining into entertainment. Watch our tandoori masters pull sizzling skewers from red-hot coals, our chaat makers craft customized spicy golgappas, and our halwais swirl crispy golden jalebis dipped in saffron syrup.',
    iconName: 'Flame',
    bannerImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80'
    ],
    guestCapacity: '50 to 1,500+ Guests',
    pricingStartsAt: '₹150 add-on per station / guest',
    idealEvents: ['Sangeet & Cocktail Parties', 'Outdoor Lawn Events', 'Festival Carnivals', 'Wedding Receptions'],
    whatWeProvide: [
      'Dedicated rustic live cart stalls with custom signage',
      'Complete safety-compliant live cooking equipment & fuel',
      'Culinary master chefs and helpers in chef whites',
      'Customized spice adjustments for individual guests'
    ],
    staffingDetails: '2 Culinary Masters and 1 Counter Attendant per live station',
    setupTime: '2 hours prior to counter opening'
  },
  {
    id: 'bulk-deg-delivery',
    title: 'Bulk Biryani Deg & Meal Boxes',
    shortDescription: 'Freshly sealed 5kg to 50kg traditional dum biryani degs delivered hot right to your doorstep.',
    fullDescription: 'Craving the genuine Mumbai/Chembur biryani magic for your community feast or weekend gathering? We deliver authentic clay or brass sealed Degs of Hyderabadi Dum Chicken or Mutton Biryani, accompanied by giant tubs of Mirchi Ka Salan and Burrani Raita. Also available in hygienic individual gourmet three-compartment boxes for easy distribution.',
    iconName: 'Package',
    bannerImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
    ],
    guestCapacity: '15 to 500+ Portions',
    pricingStartsAt: 'From ₹1,800 per 1kg Biryani Deg (Serves 6-8)',
    idealEvents: ['Community Feasts', 'Sports Tournaments', 'Shoot & Production Catering', 'Charity & NGO Events'],
    whatWeProvide: [
      'Sealed thermal insulated delivery packaging',
      'Atta-dough sealed traditional degs that retain aromatic steam',
      'Included accompaniments: Salan, Raita, Sirka Onions, Gulab Jamuns',
      'Eco-friendly cutlery kits & serving ladles'
    ],
    staffingDetails: 'Direct hot transport driver + unload assistant',
    setupTime: 'Delivered 30 minutes before your meal time'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    clientName: 'Vikram & Radhika Singhania',
    event: 'Grand Wedding Reception (650 Guests)',
    location: 'Chembur Gymkhana Banquet, Mumbai',
    rating: 5,
    date: 'February 2026',
    comment: 'AZ Catering surpassed all our expectations! Having loved their food previously as Belly Darbar, their elevated catering arm for our wedding was pure royalty. The Hyderabadi Mutton Biryani and the Chimichurri Chicken had guests raving. The live jalebi counter was a showstopper!',
    dishesMentioned: ['Awadhi Mutton Biryani', 'Chimichurri Chicken Tikka', 'Live Kesari Jalebi']
  },
  {
    id: 'review-2',
    clientName: 'Pooja Deshmukh',
    event: '50th Birthday Party (85 Guests)',
    location: 'Deonar Clubhouse, Mumbai',
    rating: 5,
    date: 'January 2026',
    comment: 'The 24-hour slow charcoal Dal Makhani and Tandoori Mushroom Cheese Melt were the stars of the evening! Punctual delivery, spotless brass chafers, and courteous servers who treated every guest like family. Truly the best catering in Mumbai.',
    dishesMentioned: ['24-Hour Charcoal Dal Makhani', 'Stuffed Mushroom Cheese Melt', 'Garlic Naan']
  },
  {
    id: 'review-3',
    clientName: 'Rohit Kulkarni',
    event: 'Annual Tech Corporate Gala (320 Attendees)',
    location: 'BKC Business Center, Bandra East',
    rating: 5,
    date: 'March 2026',
    comment: 'Flawless execution for our annual summit. From the prompt GST invoicing to the dietary separation for Jain and Non-Veg executives, AZ Catering handled the entire crowd with calm professionalism. Food was served piping hot.',
    dishesMentioned: ['Old Delhi Butter Chicken', 'Shahi Paneer Lababdar', 'Zafrani Kaju Pulao']
  },
  {
    id: 'review-4',
    clientName: 'Farhan & Sana Shaikh',
    event: 'Eid Dawat Gathering (120 Guests)',
    location: 'Chembur East, Mumbai',
    rating: 5,
    date: 'April 2026',
    comment: 'Their Dastarkhwan package is unmatched. Authentic spices, authentic slow dum technique, and tender mutton that fell off the bone. We will never hire another caterer for our family events.',
    dishesMentioned: ['Royal Galouti Kebab', 'Awadhi Mutton Dum Biryani', 'Shahi Tukda']
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Royal Biryani Clay Deg Presentation',
    category: 'Food Styling',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
    description: 'Slow-dum aromatic biryani sealed with dough and garnished with caramelized onions and saffron.'
  },
  {
    id: 'gal-2',
    title: 'Live Sigri Charcoal Tandoor',
    category: 'Live Counters',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    description: 'Fresh chicken tikkas and kebabs cooked to smoky perfection over glowing coconut charcoals.'
  },
  {
    id: 'gal-3',
    title: 'Grand Banquet Table Setting',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    description: 'Gold charger plates, polished cutlery, and bespoke floral runners for an evening reception.'
  },
  {
    id: 'gal-4',
    title: 'Crispy Pani Puri & Street Chaat Counter',
    category: 'Live Counters',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80',
    description: 'Interactive live station featuring 5 herbal flavored waters and freshly crushed sev.'
  },
  {
    id: 'gal-5',
    title: 'Executive Corporate Buffet Display',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    description: 'Clean line chafers and labeled multi-cuisine curries for corporate leadership summit.'
  },
  {
    id: 'gal-6',
    title: 'Live Desi Ghee Jalebi & Rabdi Station',
    category: 'Live Counters',
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=900&q=80',
    description: 'Swirling hot saffron jalebis fried live in pure desi ghee, served with thick laccha rabdi.'
  },
  {
    id: 'gal-7',
    title: 'Velvety Shahi Dal Makhani & Breads',
    category: 'Food Styling',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=900&q=80',
    description: 'Simmered for 24 hours on slow embers, crowned with churned white butter.'
  },
  {
    id: 'gal-8',
    title: 'Intimate Sangeet Night Dining',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
    description: 'Romantic outdoor lawn seating with customized live cocktail and kebab corners.'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How far in advance should we book AZ Catering for our event?',
    answer: 'For large weddings and banquets (over 150 guests), we recommend booking 4 to 8 weeks in advance to guarantee your preferred date and equipment. For private house parties and corporate gatherings (25-100 guests), a notice of 3 to 5 days is usually sufficient.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer a food tasting session prior to finalizing the booking?',
    answer: 'Yes! We offer comprehensive food tasting sessions for confirmed wedding packages and corporate galas exceeding 75 guests at our Chembur tasting kitchen. You can sample your shortlisted biryanis, starters, and curries with our Executive Chef to fine-tune spice levels and textures.'
  },
  {
    id: 'faq-3',
    question: 'What is your minimum guest count for catering services?',
    answer: 'Our standard buffet catering with chafing warmers begins at 25 guests. For smaller gatherings (15-24 guests), we offer our sealed Bulk Biryani Degs and Meal Box delivery services with complete accompaniments.'
  },
  {
    id: 'faq-4',
    question: 'Can you accommodate strict Jain, Halal, and Vegan dietary requirements?',
    answer: 'Absolutely. We maintain strict hygiene and kitchen segregation. All our meats are 100% Halal certified, and we prepare separate Jain-friendly curries (no onion, garlic, or root vegetables) in dedicated cookware with separate serving spoons.'
  },
  {
    id: 'faq-5',
    question: 'Are service staff, crockery, and buffet warmers included?',
    answer: 'Yes. All our Silver, Gold, and Royal Diamond packages include complete buffet setup, chafing warmers, and tableware. Gold and Diamond tiers include uniformed service captains, live station chefs, and waitstaff. For house parties, additional dedicated servers are available upon request.'
  },
  {
    id: 'faq-6',
    question: 'Which areas do you deliver and cater to?',
    answer: 'We cater extensively across Mumbai (Chembur, Ghatkopar, BKC, South Mumbai, Bandra, Andheri, Powai, Thane) and Navi Mumbai (Vashi, Nerul, Belapur, Kharghar). For destination weddings across Maharashtra (Lonavala, Alibaug, Karjat), please consult our team for travel logistics.'
  },
  {
    id: 'faq-7',
    question: 'What is your payment and cancellation policy?',
    answer: 'A 30% advance deposit secures your date on our calendar. 50% is due 48 hours prior to the event, and the remaining 20% is settled upon event conclusion. Cancellations made 14 days or more before the event receive an 80% refund of the advance.'
  }
];
