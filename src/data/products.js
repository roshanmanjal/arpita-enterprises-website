/**
 * products.js — Master product catalogue for Arpita Enterprises
 * Images: extracted from official EatBit + Craveto brochures
 * Paths: /products/eatbit/*.jpg  |  /products/craveto/*.jpg
 */

export const brands = ["EatBit", "Craveto"];

export const categories = [
  "Chikki",
  "Wafer Biscuits",
  "Wafer Rolls",
  "Wafer Cubes",
  "Makhana",
  "Juices",
];

// ─── BRAND METADATA ──────────────────────────────────────────────────────────
export const brandMeta = {
  EatBit: {
    slug: "eatbit",
    tagline: "Traditional Indian Sweets & Brittles",
    description:
      "EatBit was started with one vision — to bring a revolutionary assortment of Indian sweets pan-India, with a twist. Crafted with pure jaggery and premium nuts, every bite celebrates heritage and flavour. From classic peanut chikki to artisan dryfruit brittles, EatBit honours centuries of Indian confectionery tradition.",
    categories: ["Chikki"],
    palette: {
      bg: "from-amber-50 to-orange-50",
      accent: "text-amber-800",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-800",
      banner: "from-[#5E3100] to-[#8B4513]",
    },
    manufacturer: "Shree Gayatri Food & Beverages",
    website: "www.eat-bit.com",
  },
  Craveto: {
    slug: "craveto",
    tagline: "Modern Snacking Redefined",
    description:
      "In a world constantly seeking budget-friendly quality snacks, Craveto was founded to provide the best Indian-made snacks catering to all cravings. From crispy wafer biscuits and rolls to healthy makhana and refreshing Nata-de-Coco juices — Craveto is built for today's on-the-go lifestyle.",
    categories: ["Wafer Biscuits", "Wafer Rolls", "Wafer Cubes", "Makhana", "Juices"],
    palette: {
      bg: "from-yellow-50 to-amber-50",
      accent: "text-yellow-700",
      border: "border-yellow-200",
      badge: "bg-yellow-100 text-yellow-800",
      banner: "from-[#1a1a2e] to-[#16213e]",
    },
    manufacturer: "Craveto Foods",
    website: "www.craveto.in",
  },
};

// ─── CATEGORY METADATA ───────────────────────────────────────────────────────
export const categoryMeta = {
  Chikki: {
    slug: "chikki",
    icon: "🍬",
    desc: "Traditional jaggery brittles in classic and artisan flavours",
    longDesc:
      "Chikki is one of India's oldest sweets. EatBit's range spans classic peanut to artisan dryfruit and chocolate fudge variants — crafted with pure jaggery and no artificial preservatives.",
    color: "bg-amber-50 border-amber-100 hover:border-amber-300",
    text: "text-amber-800",
    banner: "from-amber-800 to-orange-900",
  },
  "Wafer Biscuits": {
    slug: "wafer-biscuits",
    icon: "🍪",
    desc: "Crispy layered wafers with premium cream fillings",
    longDesc:
      "Craveto's wafer biscuits feature multiple crispy layers with generous cream fillings. Available in family packs (150g), standard packs (60g), and mini packs (75g) — in flavours from classic vanilla and chocolate to tiramisu and hazelnut.",
    color: "bg-blue-50 border-blue-100 hover:border-blue-300",
    text: "text-blue-700",
    banner: "from-blue-800 to-indigo-900",
  },
  "Wafer Rolls": {
    slug: "wafer-rolls",
    icon: "🥐",
    desc: "Crunchy rolled wafer sticks loaded with cream",
    longDesc:
      "Craveto Wafer Rolls are premium quality wafer sticks — crunchy, creamy, and simply loaded with yumminess. Available in tin packs of 200g in strawberry, chocolate, and coffee flavours.",
    color: "bg-sky-50 border-sky-100 hover:border-sky-300",
    text: "text-sky-700",
    banner: "from-sky-800 to-blue-900",
  },
  "Wafer Cubes": {
    slug: "wafer-cubes",
    icon: "🎲",
    desc: "Bite-sized cube wafers perfect for sharing",
    longDesc:
      "Craveto Wafer Cubes are bite-sized snacks with multiple wafer layers and rich cream fillings. Available in 75g mini packs in red velvet and vanilla — ideal for sharing, gifting, and party platters.",
    color: "bg-indigo-50 border-indigo-100 hover:border-indigo-300",
    text: "text-indigo-700",
    banner: "from-indigo-800 to-purple-900",
  },
  Makhana: {
    slug: "makhana",
    icon: "🌾",
    desc: "Premium roasted fox nuts in bold flavours",
    longDesc:
      "Craveto Makhana is the brand's first step towards healthy but tasty snacking. Roasted fox nuts in 45g mini packs — available in salt & pepper, jaggery, and cheese flavours. High protein, naturally gluten-free, and low in calories.",
    color: "bg-green-50 border-green-100 hover:border-green-300",
    text: "text-green-700",
    banner: "from-green-800 to-emerald-900",
  },
  Juices: {
    slug: "juices",
    icon: "🧃",
    desc: "Refreshing Nata-de-Coco fruit juices",
    longDesc:
      "Craveto's Nata-de-Coco fruit juices are refreshing summer drinks with the goodness of coconut. Available in 5 vibrant fruit flavours — green apple, strawberry, mango, mixed berry, and lychee.",
    color: "bg-orange-50 border-orange-100 hover:border-orange-300",
    text: "text-orange-700",
    banner: "from-orange-700 to-red-800",
  },
};

// ─── EATBIT PRODUCTS ─────────────────────────────────────────────────────────
// Source: eatbit-lemaon-ras-jar-220-pcs.pdf
// All images extracted from official brochure

const eatbitProducts = [
  {
    id: 1,
    name: "Peanut Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "40g",
    packInfo: "1 Box = 10 pcs | 1 Master Carton = 12 Kg",
    description:
      "Classic Indian chikki made with roasted peanuts and pure jaggery. A timeless snack that delivers a satisfying crunch with natural sweetness in every bite. No artificial preservatives — just pure, wholesome ingredients.",
    image: "/products/eatbit/peanut-chikki.jpg",
    featured: true,
    tags: ["bestseller", "classic"],
  },
  {
    id: 2,
    name: "Peanut Mawa Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "40g",
    packInfo: "1 Box = 10 pcs | 1 Master Carton = 12 Kg",
    description:
      "A rich fusion of roasted peanuts and creamy mawa (khoya) bound together with premium jaggery. Indulgently soft yet crunchy — a festive favourite reimagined for everyday snacking.",
    image: "/products/eatbit/peanut-mawa-chikki.jpg",
    featured: true,
    tags: ["festive", "premium"],
  },
  {
    id: 3,
    name: "Rose Petal Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "40g",
    packInfo: "1 Box = 10 pcs | 1 Master Carton = 12 Kg",
    description:
      "Delicately perfumed with dried rose petals, this artisan chikki brings a floral elegance to a beloved classic. Made with mixed nuts and natural rose essence — perfect as a gifting option.",
    image: "/products/eatbit/rose-petal-chikki.jpg",
    featured: false,
    tags: ["gifting", "artisan"],
  },
  {
    id: 4,
    name: "Chocolate Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "40g",
    packInfo: "1 Box = 10 pcs | 1 Master Carton = 12 Kg",
    description:
      "Traditional chikki gets a modern twist — real cocoa blended into jaggery brittle with roasted peanuts. A delightful treat that bridges heritage flavours with contemporary taste preferences.",
    image: "/products/eatbit/chocolate-chikki.jpg",
    featured: false,
    tags: ["modern", "kids"],
  },
  {
    id: 5,
    name: "Coconut Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "30g",
    packInfo: "1 Box = 10 pcs | 1 Master Carton = 9 Kg",
    description:
      "Sun-dried coconut flakes caramelised with jaggery to create a crispy, aromatic chikki. Light, tropical, and naturally gluten-free — a snack that transports you to the coast.",
    image: "/products/eatbit/coconut-chikki.jpg",
    featured: false,
    tags: ["gluten-free", "tropical"],
  },
  {
    id: 6,
    name: "Sesame Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "30g",
    packInfo: "1 Box = 10 pcs | 1 Master Carton = 9 Kg",
    description:
      "Til chikki crafted from toasted white sesame seeds and pure sugarcane jaggery. Rich in calcium and iron — a nutrient-dense, crispy brittle that honours centuries of Indian tradition.",
    image: "/products/eatbit/sesame-chikki.jpg",
    featured: false,
    tags: ["nutritious", "traditional"],
  },
  {
    id: 7,
    name: "Vanilla Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "100g",
    packInfo: "1 Box = 5 pcs | 1 Master Carton = 12 Kg",
    description:
      "Smooth vanilla infused into a jaggery and mixed-nut brittle. A subtly sweet, aromatic chikki that makes for a refined everyday indulgence for adults and children alike.",
    image: "/products/eatbit/vanilla-chikki.jpg",
    featured: false,
    tags: ["premium", "large-pack"],
  },
  {
    id: 8,
    name: "Coffee Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "125g",
    packInfo: "1 Box = 5 pcs | 1 Master Carton = 15 Kg",
    description:
      "Bold coffee notes meet crunchy peanuts in a jaggery brittle that packs a flavourful punch. Made for coffee lovers who want their snack fix with a caffeine-inspired twist.",
    image: "/products/eatbit/coffee-chikki.jpg",
    featured: false,
    tags: ["bold", "large-pack"],
  },
  {
    id: 9,
    name: "Chocolate Fudge Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "125g",
    packInfo: "1 Box = 5 pcs | 1 Master Carton = 15 Kg",
    description:
      "Decadent chocolate fudge pieces embedded in a jaggery-nut brittle. Richer and softer than classic chikki, this premium variant is perfect for festive hampers and gifting.",
    image: "/products/eatbit/chocolate-fudge-chikki.jpg",
    featured: false,
    tags: ["gifting", "premium", "festive"],
  },
  {
    id: 10,
    name: "Dryfruit Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "80g",
    packInfo: "1 Box = 5 pcs | 1 Master Carton = 9.6 Kg",
    description:
      "A premium blend of cashews, almonds, pistachios, and raisins set in pure jaggery. Nutritious, indulgent, and beautifully presented — our most gifted chikki variant during festive season.",
    image: "/products/eatbit/dryfruit-chikki.jpg",
    featured: true,
    tags: ["premium", "gifting", "bestseller"],
  },
  {
    id: 11,
    name: "Cranberry Chikki",
    brand: "EatBit",
    category: "Chikki",
    weight: "80g",
    packInfo: "1 Box = 5 pcs | 1 Master Carton = 9.6 Kg",
    description:
      "Tangy dried cranberries combined with roasted almonds in a lightly sweetened jaggery base. A modern chikki that balances tart fruitiness with nutty crunch — bold, healthy, and unique.",
    image: "/products/eatbit/cranberry-chikki.jpg",
    featured: false,
    tags: ["modern", "healthy"],
  },
];

// ─── CRAVETO PRODUCTS ────────────────────────────────────────────────────────
// Source: craveto-wafer-juice-chocolate.pdf
// All images extracted from official brochure

const cravetoProducts = [
  // ── Wafer Biscuits — Family Pack 150g ──────────────────────────────────────
  {
    id: 12,
    name: "French Vanilla Wafer Biscuits",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "150g",
    packInfo: "Family Pack",
    description:
      "Three layers of crispy wafer with two generous layers of Bourbon vanilla cream filling. A classic flavour loved across generations — light, airy, and satisfying.",
    image: "/products/craveto/vanilla-wafer-biscuits-150g.jpg",
    featured: true,
    tags: ["bestseller", "family-pack", "vanilla"],
  },
  {
    id: 13,
    name: "Fresh Strawberry Wafer Biscuits",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "150g",
    packInfo: "Family Pack",
    description:
      "Three crispy wafer layers holding two layers of fresh strawberry cream. Fruity, sweet, and utterly snackable — popular with children and adults equally.",
    image: "/products/craveto/strawberry-wafer-biscuits-150g.jpg",
    featured: false,
    tags: ["fruity", "family-pack"],
  },
  {
    id: 14,
    name: "Tangy Orange Wafer Biscuits",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "150g",
    packInfo: "Family Pack",
    description:
      "Crispy wafer layers with tangy orange cream filling. The fresh citrus flavour makes this a refreshing snack choice for any time of day.",
    image: "/products/craveto/orange-wafer-biscuits-150g.jpg",
    featured: false,
    tags: ["tangy", "family-pack", "citrus"],
  },
  {
    id: 15,
    name: "Tropical Pineapple Wafer Biscuits",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "150g",
    packInfo: "Family Pack",
    description:
      "Three crispy wafer layers with two layers of tropical pineapple cream. A fruity, exotic flavour that brings a taste of the tropics to everyday snacking.",
    image: "/products/craveto/pineapple-wafer-biscuits-150g.jpg",
    featured: false,
    tags: ["tropical", "family-pack"],
  },
  {
    id: 16,
    name: "Rich Chocolate Wafer Biscuits",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "150g",
    packInfo: "Family Pack",
    description:
      "Three crispy wafers with two layers of rich chocolate cream made with premium Barry Callebaut cocoa. A classic combination that is always irresistible.",
    image: "/products/craveto/chocolate-wafer-biscuits-150g.jpg",
    featured: true,
    tags: ["bestseller", "chocolate", "family-pack"],
  },
  // ── Wafer Biscuits — Mini Pack 75g ─────────────────────────────────────────
  {
    id: 17,
    name: "Tiramisu Wafer Biscuits",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "75g",
    packInfo: "Mini Pack",
    description:
      "A blend of coffee and chocolate cream between crunchy wafer layers. For those who want something beyond the classic sweet wafer — sophisticated and indulgent.",
    image: "/products/craveto/tiramisu-wafer-biscuits-75g.jpg",
    featured: false,
    tags: ["premium", "mini-pack", "coffee"],
  },
  {
    id: 18,
    name: "Chocolate Hazelnut Wafer Biscuits",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "75g",
    packInfo: "Mini Pack",
    description:
      "Chocolate hazelnut cream between layers of crunchy wafer biscuits. A premium combination that delivers rich, nutty indulgence in every bite.",
    image: "/products/craveto/hazelnut-wafer-biscuits-75g.jpg",
    featured: false,
    tags: ["premium", "mini-pack", "hazelnut"],
  },
  // ── Mini Bites — Bite-sized 75g ────────────────────────────────────────────
  {
    id: 19,
    name: "Vanilla Mini Bites",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "75g",
    packInfo: "Mini Pack",
    description:
      "Bite-sized wafer cookies with creamy vanilla filling. Perfect for snacking straight from the pack or sharing with friends and family.",
    image: "/products/craveto/vanilla-mini-bites-75g.jpg",
    featured: false,
    tags: ["mini-bites", "vanilla", "snack"],
  },
  {
    id: 20,
    name: "Chocolate Mini Bites",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "75g",
    packInfo: "Mini Pack",
    description:
      "Delightful bite-sized wafer cookies loaded with rich chocolate cream. A perfect small snack that delivers maximum flavour in every tiny piece.",
    image: "/products/craveto/chocolate-mini-bites-75g.jpg",
    featured: false,
    tags: ["mini-bites", "chocolate", "snack"],
  },
  // ── Waffle Bites — Premium 100g ────────────────────────────────────────────
  {
    id: 21,
    name: "Chocolate Waffle Bites",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "100g",
    packInfo: "Pack",
    description:
      "Premium chocolate waffle bites with layers of cocoa-infused cream. A gourmet snack that elevates everyday indulgence.",
    image: "/products/craveto/chocolate-waffle-bites-100g.jpg",
    featured: false,
    tags: ["waffle-bites", "chocolate", "premium"],
  },
  {
    id: 22,
    name: "Coffee Waffle Bites",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "100g",
    packInfo: "Pack",
    description:
      "Aromatic coffee-flavored waffle bites with creamy filling. Perfect for coffee lovers who want a gourmet snack experience.",
    image: "/products/craveto/coffee-waffle-bites-100g.jpg",
    featured: false,
    tags: ["waffle-bites", "coffee", "premium"],
  },
  // ── Hazelnut Bonbons ───────────────────────────────────────────────────────
  {
    id: 23,
    name: "Hazelnut Bonbons",
    brand: "Craveto",
    category: "Wafer Biscuits",
    weight: "100g",
    packInfo: "Pack",
    description:
      "Artisanal hazelnut-filled wafer bonbons. A premium confectionery that brings European elegance to your snack time.",
    image: "/products/craveto/hazelnut-bonbons-100g.jpg",
    featured: false,
    tags: ["bonbons", "hazelnut", "premium"],
  },
  // ── Wafer Rolls — Tin Pack 200g ────────────────────────────────────────────
  {
    id: 24,
    name: "Strawberry Wafer Rolls",
    brand: "Craveto",
    category: "Wafer Rolls",
    weight: "200g",
    packInfo: "Tin Pack",
    description:
      "Premium quality wafer sticks — crunchy, creamy, and loaded with strawberry flavour. A fun finger-shaped snack that is great for on-the-go munching.",
    image: "/products/craveto/strawberry-wafer-rolls-200g.jpg",
    featured: true,
    tags: ["tin-pack", "premium"],
  },
  {
    id: 25,
    name: "Chocolate Wafer Rolls",
    brand: "Craveto",
    category: "Wafer Rolls",
    weight: "200g",
    packInfo: "Tin Pack",
    description:
      "Premium quality chocolate wafer sticks in a premium tin pack. Crunchy, creamy, and perfect for sharing — a crowd favourite in every household.",
    image: "/products/craveto/chocolate-wafer-rolls-200g.jpg",
    featured: false,
    tags: ["tin-pack", "chocolate"],
  },
  {
    id: 26,
    name: "Coffee Wafer Rolls",
    brand: "Craveto",
    category: "Wafer Rolls",
    weight: "200g",
    packInfo: "Tin Pack",
    description:
      "Premium wafer sticks with a rich coffee cream filling. Crunchy, creamy, and perfect for coffee lovers who enjoy a snack with their brew.",
    image: "/products/craveto/coffee-wafer-rolls-200g.jpg",
    featured: false,
    tags: ["tin-pack", "coffee"],
  },
  // ── Wafer Cubes — Mini Pack 75g ────────────────────────────────────────────
  {
    id: 27,
    name: "Red Velvet Wafer Cubes",
    brand: "Craveto",
    category: "Wafer Cubes",
    weight: "75g",
    packInfo: "Mini Pack",
    description:
      "Creamy red velvet wafer cubes — perfect for celebrations, gifting, and special occasions. A unique and indulgent snack that stands out on any shelf.",
    image: "/products/craveto/red-velvet-wafer-cubes-75g.jpg",
    featured: false,
    tags: ["gifting", "premium", "mini-pack"],
  },
  {
    id: 28,
    name: "Vanilla Wafer Cubes",
    brand: "Craveto",
    category: "Wafer Cubes",
    weight: "75g",
    packInfo: "Mini Pack",
    description:
      "Five generous layers of vanilla cream filling between four layers of crispy wafer. A classic flavour in a fun cube format — ideal for sharing and snacking.",
    image: "/products/craveto/vanilla-wafer-cubes-75g.jpg",
    featured: false,
    tags: ["classic", "mini-pack"],
  },
  // ── Makhana — Mini Pack 45g ────────────────────────────────────────────────
  {
    id: 29,
    name: "Salt & Pepper Makhana",
    brand: "Craveto",
    category: "Makhana",
    weight: "45g",
    packInfo: "Mini Pack",
    description:
      "Roasted fox nuts seasoned with salt and pepper. A guilt-free, high-protein snack that is naturally gluten-free, low in calories, and big on flavour.",
    image: "/products/craveto/salt-pepper-makhana-45g.jpg",
    featured: true,
    tags: ["healthy", "protein", "mini-pack"],
  },
  {
    id: 30,
    name: "Jaggery Makhana",
    brand: "Craveto",
    category: "Makhana",
    weight: "45g",
    packInfo: "Mini Pack",
    description:
      "Roasted fox nuts with a natural jaggery coating. A sweet, healthy snack that combines the goodness of makhana with the natural sweetness of jaggery.",
    image: "/products/craveto/jaggery-makhana-45g.jpg",
    featured: false,
    tags: ["healthy", "sweet", "mini-pack"],
  },
  {
    id: 31,
    name: "Cheese Makhana",
    brand: "Craveto",
    category: "Makhana",
    weight: "45g",
    packInfo: "Mini Pack",
    description:
      "Roasted makhana dusted with cheese seasoning. A savoury, gourmet snack that bridges western flavours with an ancient Indian superfood.",
    image: "/products/craveto/cheese-makhana-45g.jpg",
    featured: false,
    tags: ["savoury", "healthy", "mini-pack"],
  },
  // ── Nata-de-Coco Juices ────────────────────────────────────────────────────
  {
    id: 32,
    name: "Green Apple Nata-de-Coco Juice",
    brand: "Craveto",
    category: "Juices",
    weight: "200ml",
    packInfo: "Bottle",
    description:
      "Refreshing green apple juice with Nata-de-Coco coconut jelly pieces. A cool, fruity summer drink with the goodness of coconut.",
    image: "/products/craveto/green-apple-juice-200ml.jpg",
    featured: false,
    tags: ["nata-de-coco", "summer"],
  },
  {
    id: 33,
    name: "Strawberry Nata-de-Coco Juice",
    brand: "Craveto",
    category: "Juices",
    weight: "200ml",
    packInfo: "Bottle",
    description:
      "Vibrant strawberry juice with Nata-de-Coco coconut jelly pieces. Sweet, fruity, and refreshing — a favourite summer drink for all ages.",
    image: "/products/craveto/strawberry-juice-200ml.jpg",
    featured: false,
    tags: ["nata-de-coco", "summer", "bestseller"],
  },
  {
    id: 34,
    name: "Mango Nata-de-Coco Juice",
    brand: "Craveto",
    category: "Juices",
    weight: "200ml",
    packInfo: "Bottle",
    description:
      "Tropical mango juice with Nata-de-Coco coconut jelly pieces. Rich, vibrant, and packed with tropical flavour — perfect chilled straight from the fridge.",
    image: "/products/craveto/mango-juice-200ml.jpg",
    featured: true,
    tags: ["nata-de-coco", "tropical", "bestseller"],
  },
  {
    id: 35,
    name: "Mixed Berry Nata-de-Coco Juice",
    brand: "Craveto",
    category: "Juices",
    weight: "200ml",
    packInfo: "Bottle",
    description:
      "A bold mixed berry juice with Nata-de-Coco coconut jelly pieces. Vibrant, refreshing, and packed with fruity flavour — a standout on any shelf.",
    image: "/products/craveto/mixed-berry-juice-200ml.jpg",
    featured: false,
    tags: ["nata-de-coco", "berry"],
  },
  {
    id: 36,
    name: "Lychee Nata-de-Coco Juice",
    brand: "Craveto",
    category: "Juices",
    weight: "200ml",
    packInfo: "Bottle",
    description:
      "Delicately sweet lychee juice with Nata-de-Coco coconut jelly pieces. Elegant, refreshing, and naturally hydrating — a seasonal favourite enjoyed year-round.",
    image: "/products/craveto/lychee-juice-200ml.jpg",
    featured: false,
    tags: ["nata-de-coco", "summer"],
  },
];

// ─── EXPORTS ─────────────────────────────────────────────────────────────────
export const products = [...eatbitProducts, ...cravetoProducts];
export const featuredProducts = products.filter((p) => p.featured);

// Helper: get products by brand slug
export function getProductsByBrand(slug) {
  const name = Object.keys(brandMeta).find((k) => brandMeta[k].slug === slug);
  return name ? products.filter((p) => p.brand === name) : [];
}

// Helper: get products by category slug
export function getProductsByCategory(slug) {
  const name = Object.keys(categoryMeta).find((k) => categoryMeta[k].slug === slug);
  return name ? products.filter((p) => p.category === name) : [];
}

// Analytics stubs — wire to real analytics in future phase
export const analytics = {
  trackProductView:  (productId)           => { /* TODO */ },
  trackCategoryView: (category)            => { /* TODO */ },
  trackContactClick: (source)              => { /* TODO */ },
  trackSearch:       (query, resultsCount) => { /* TODO */ },
};

// Inquiry data model — ready for backend integration
export const createInquiry = (data) => ({
  id:           null,
  name:         data.name,
  phone:        data.phone,
  email:        data.email        || null,
  businessName: data.business     || null,
  message:      data.message,
  products:     data.products     || [],
  source:       data.source       || "contact-form",
  status:       "new",
  createdAt:    new Date().toISOString(),
});
