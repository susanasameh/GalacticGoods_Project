let isAuthenticated = false;
let currentPage = 'home';
let previousPage = '';
let cart = [];
let products = [{
    id: 1,
    name: 'Smartphone',
    category: 'Electronics',
    price: 699.99,
    image: 'images/smartPhone.jpeg',
    description: 'Experience the future in your hands with the Smartphone X500. Featuring a vibrant AMOLED display, a blazing-fast processor, and a versatile dual-camera setup, this phone redefines what\'s possible. Perfect for gaming, photography, and staying connected on the go.',
    details: {
        brand: 'Tech Innovations',
        model: 'X500',
        screen: '6.5" AMOLED Display',
        camera: '48MP + 12MP Dual Camera',
        storage: '128GB Internal Storage',
        battery: '4000 mAh Fast Charging Battery',
        features: ['5G Connectivity', 'Face Unlock', 'In-Display Fingerprint Sensor']
    },
    availability: 'In Stock'
},
{
    id: 13,
    name: 'Facial Cleanser',
    category: 'SkinCare',
    price: 24.99,
    image: 'images/facial.jpeg',
    description: 'Gentle and effective cleanser for daily use. Removes impurities and makeup while maintaining skin\'s natural moisture balance.',
    details: {
        brand: 'GlowSkin',
        type: 'Daily Facial Cleanser',
        skinType: ['All', 'Sensitive'],
        volume: '150ml',
        features: ['Hypoallergenic', 'Non-comedogenic', 'Fragrance-free']
    },
    availability: 'In Stock'
},
{
    id: 14,
    name: 'Moisturizing Cream',
    category: 'SkinCare',
    price: 29.99,
    image: 'images/moist.jpeg',
    description: 'Rich, hydrating cream for face and neck. Provides long-lasting moisture and improves skin elasticity.',
    details: {
        brand: 'AquaDerm',
        type: 'Hydrating Moisturizer',
        skinType: ['Dry', 'Normal'],
        volume: '50ml',
        features: ['Dermatologist-tested', 'Cruelty-free', 'Contains Hyaluronic Acid']
    },
    availability: 'In Stock'
},
{
    id: 15,
    name: 'Sunscreen SPF 50',
    category: 'SkinCare',
    price: 19.99,
    image: 'images/sun.jpeg',
    description: 'Broad spectrum SPF 50 sunscreen. Protects skin from UVA and UVB rays. Lightweight and non-greasy formula.',
    details: {
        brand: 'SunGuard',
        type: 'Broad Spectrum Sunscreen',
        spf: '50',
        skinType: ['All'],
        volume: '100ml',
        features: ['Water-resistant', 'Reef-safe', 'Invisible finish']
    },
    availability: 'In Stock'
},
{
    id: 2,
    name: 'Laptop',
    category: 'Electronics',
    price: 999.99,
    image: 'images/laptop.jpeg',
    description: 'The Laptop Pro 15 is engineered for professionals and gamers alike. With a powerful Intel Core i7 processor, 16GB of RAM, and a dedicated NVIDIA RTX 3060 graphics card, this laptop handles demanding tasks and intense gaming sessions with ease. Its sleek design and high refresh rate display enhance your productivity and entertainment.',
    details: {
        brand: 'Global Tech',
        model: 'Pro 15',
        processor: 'Intel Core i7 11th Gen',
        ram: '16GB DDR4 RAM',
        storage: '512GB NVMe SSD',
        graphics: 'NVIDIA GeForce RTX 3060',
        features: ['Backlit Keyboard', '144Hz High Refresh Rate Display', 'Thunderbolt 4 Ports']
    },
    availability: 'Out of Stock'
},
{
    id: 3,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 149.99,
    image: 'images/Headphone.jpeg',
    description: 'Immerse yourself in your favorite music with our Wireless Noise Cancelling Headphones. Featuring advanced noise cancellation technology and crystal-clear audio, these headphones provide an unparalleled listening experience. With up to 20 hours of battery life, they\'re perfect for travel, work, or relaxation.',
    details: {
        brand: 'Audio Dynamics',
        type: 'Over-Ear Wireless',
        connection: 'Bluetooth 5.0',
        batteryLife: 'Up to 20 hours with ANC Off',
        features: ['Active Noise Cancellation (ANC)', 'Built-in Microphone', 'Touch Controls']
    },
    availability: 'In Stock'
},
{
    id: 4,
    name: 'Smartwatch',
    category: 'Electronics',
    price: 299.99,
    image: 'images/watch.jpeg',
    description: 'Stay connected and track your fitness goals with the Smartwatch Elite. This smartwatch features a vibrant OLED display, comprehensive fitness tracking, and seamless compatibility with both iOS and Android devices. Monitor your heart rate, track your routes, and receive notifications right on your wrist.',
    details: {
        brand: 'FitGear',
        model: 'Elite Series 7',
        screen: '1.9" OLED Touchscreen',
        compatibility: 'iOS & Android Compatible',
        features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant up to 50m']
    },
    availability: 'In Stock'
},
{
    id: 5,
    name: 'Tablet',
    category: 'Electronics',
    price: 449.99,
    image: 'images/tablet.jpeg',
    description: 'The Tablet Pro 10 is your go-to device for entertainment and productivity. With a stunning 10.5" IPS LCD screen, ample storage, and stylus support, this tablet is perfect for watching movies, drawing, and browsing the web. Its quad speakers provide an immersive audio experience.',
    details: {
        brand: 'Digital Solutions',
        model: 'Tab Pro 10',
        screen: '10.5" IPS LCD Display',
        storage: '64GB Internal Storage',
        features: ['Stylus Support', 'Quad Stereo Speakers', 'USB-C Connectivity']
    },
    availability: 'In Stock'
},
{
    id: 6,
    name: 'Digital Camera',
    category: 'Electronics',
    price: 599.99,
    image: 'images/camera.jpeg',
    description: 'Capture your world in stunning clarity with the Digital Camera DSLR Pro. Featuring a 24.2MP APS-C sensor and a versatile 18-55mm kit lens, this camera delivers exceptional image quality and performance. Record 4K videos and use its image stabilization to ensure your shots are always crisp and clear.',
    details: {
        brand: 'Capture Pro',
        model: 'DSLR Pro',
        sensor: '24.2MP APS-C Sensor',
        lens: '18-55mm Kit Lens',
        features: ['4K Video Recording', 'Image Stabilization', 'Built-in Wi-Fi']
    },
    availability: 'In Stock'
},
{
    id: 7,
    name: 'T-Shirt',
    category: 'Clothing',
    price: 29.99,
    image: 'images/shirt.jpeg',
    description: 'Experience ultimate comfort and style with our Classic Cotton T-Shirt. Made from 100% premium cotton, this t-shirt is perfect for everyday wear. Available in multiple sizes and colors, it]s a versatile addition to your wardrobe.',
    details: {
        brand: 'Fashion Co.',
        material: '100% Premium Cotton',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Navy', 'Gray']
    },
    availability: 'In Stock'
},
{
    id: 8,
    name: 'Jeans',
    category: 'Clothing',
    price: 59.99,
    image: 'images/jeans.jpeg',
    description: 'Our Regular Fit Jeans are the epitome of comfort and durability. Made from a blend of cotton and spandex, they offer a comfortable fit and great flexibility. Available in classic blue and black, they are perfect for everyday wear.',
    details: {
        brand: 'Denim Style',
        material: '98% Cotton, 2% Spandex',
        fit: 'Regular Fit',
        sizes: ['30x32', '32x32', '34x34', '36x34'],
        colors: ['Blue', 'Black', 'Dark Wash']
    },
    availability: 'In Stock'
},
{
    id: 9,
    name: 'Sneakers',
    category: 'Shoes',
    price: 79.99,
    image: 'images/shoes.jpeg',
    description: 'Step out in style with our Urban Canvas Sneakers. These trendy sneakers are designed for comfort and style, perfect for all occasions. Made from breathable canvas, they are available in several colors to match your unique style.',
    details: {
        brand: 'Footwear Plus',
        material: 'Durable Canvas',
        sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
        colors: ['White', 'Black', 'Red', 'Blue']
    },
    availability: 'In Stock'
},
{
    id: 10,
    name: 'Running Shoes',
    category: 'Shoes',
    price: 129.99,
    image: 'images/running shoes.jpeg',
    description: 'Reach your fitness goals with our Performance Running Shoes. These shoes are designed with a cushioned sole and breathable mesh to provide ultimate comfort and support. Perfect for runners of all levels.',
    details: {
        brand: 'Runner\'s Choice',
        material: 'Breathable Mesh, Rubber Sole',
        sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
        features: ['Cushioned Sole', 'Breathable Design', 'Lightweight']
    },
    availability: 'In Stock'
},
{
    id: 11,
    name: 'Coffee Maker',
    category: 'Appliances',
    price: 99.99,
    image: 'images/coffee.jpeg',
    description: 'Start your day right with our Programmable Coffee Maker. This 12-cup drip coffee maker features a programmable timer and auto shut-off for safety and convenience. Enjoy fresh coffee at home, every day.',
    details: {
        brand: 'Home Brew',
        type: 'Drip Coffee Maker',
        capacity: '12 Cups',
        features: ['Programmable Timer', 'Auto Shut-Off', 'Pause and Serve Feature']
    },
    availability: 'In Stock'
},
{
    id: 12,
    name: 'Blender',
    category: 'Appliances',
    price: 79.99,
    image: 'images/blender.jpeg',
    description: 'Create smoothies, shakes, and more with our High-Power Blender Pro. With 1000 watts of power and variable speed settings, this blender is perfect for blending ice, fruits, and vegetables. The 64oz capacity is ideal for families and gatherings.',
    details: {
        brand: 'Kitchen Pro',
        power: '1000 Watts',
        capacity: '64 oz',
        features: ['Variable Speed Settings', 'Ice Crushing Capability', 'Dishwasher Safe Jar']
    },
    availability: 'In Stock'
},
{
    id: 16,
    name: 'Sleek Silver Laptop',
    category: 'Electronics',
    price: 1299.99,
    image: 'images/ssl.jpeg',
    description: 'Experience power and elegance with this sleek silver laptop. Perfect for professionals and creatives.',
    details: {
        brand: 'SilverTech',
        model: 'EliteBook 14',
        processor: 'Intel Core i9',
        ram: '32GB',
        storage: '1TB SSD',
        graphics: 'Integrated Graphics'
    },
    availability: 'In Stock'
},
{
    id: 17,
    name: 'Professional Juicer',
    category: 'Appliances',
    price: 149.99,
    image: 'images/pj.jpeg',
    description: 'Extract fresh juices effortlessly with this professional-grade juicer. Durable and easy to clean.',
    details: {
        brand: 'JuiceMaster',
        type: 'Centrifugal Juicer',
        power: '800W',
        features: ['Wide Feed Chute', 'Multiple Speed Settings', 'Pulp Ejection']
    },
    availability: 'In Stock'
},
{
    id: 18,
    name: 'Red Stand Mixer',
    category: 'Appliances',
    price: 249.99,
    image: 'images/rsm.jpeg',
    description: 'Bake like a pro with this vibrant red stand mixer. Powerful motor and versatile attachments included.',
    details: {
        brand: 'BakeBuddy',
        type: 'Stand Mixer',
        power: '500W',
        capacity: '5 Quarts',
        features: ['10 Speed Settings', 'Dough Hook', 'Whisk', 'Beater']
    },
    availability: 'In Stock'
},
{
    id: 19,
    name: 'Everyday Makeup Kit',
    category: 'SkinCare',
    price: 49.99,
    image: 'images/emk.jpeg',
    description: 'A complete makeup kit for your daily look. Includes eyeshadows, blush, and lip color.',
    details: {
        brand: 'GlamDaily',
        type: 'Makeup Set',
        includes: ['Eyeshadow Palette', 'Blush', 'Lipstick', 'Mascara'],
        skinType: ['All']
    },
    availability: 'In Stock'
},
{
    id: 20,
    name: 'Brush Set Professional',
    category: 'SkinCare',
    price: 39.99,
    image: 'images/bsp.jpeg',
    description: 'High-quality makeup brush set for flawless application. Soft bristles and ergonomic handles.',
    details: {
        brand: 'BrushPro',
        type: 'Makeup Brushes',
        includes: ['Foundation Brush', 'Powder Brush', 'Eyeshadow Brushes', 'Blush Brush'],
        material: 'Synthetic Fibers'
    },
    availability: 'In Stock'
},
{
    id: 21,
    name: 'Luxury Lipstick Duo',
    category: 'SkinCare',
    price: 59.99,
    image: 'images/lld.jpeg',
    description: 'Two richly pigmented lipsticks in classic shades. Long-lasting and moisturizing formula.',
    details: {
        brand: 'LuxeLips',
        type: 'Lipstick Set',
        colors: ['Ruby Red', 'Nude Beige'],
        features: ['Moisturizing', 'Long-lasting']
    },
    availability: 'In Stock'
},
{
    id: 22,
    name: 'Eyeshadow Palette - Neutrals',
    category: 'SkinCare',
    price: 29.99,
    image: 'images/epn.jpeg',
    description: 'Versatile neutral eyeshadow palette for creating endless looks. Highly pigmented and blendable.',
    details: {
        brand: 'ShadeMaster',
        type: 'Eyeshadow Palette',
        shades: ['Neutral Tones'],
        features: ['Highly Pigmented', 'Blendable']
    },
    availability: 'In Stock'
},
{
    id: 23,
    name: 'Foundation - Liquid Matte',
    category: 'SkinCare',
    price: 34.99,
    image: 'images/lm.jpeg',
    description: 'Full coverage liquid matte foundation for a flawless complexion. Long-wear and oil-free.',
    details: {
        brand: 'BasePerfect',
        type: 'Liquid Foundation',
        finish: 'Matte',
        coverage: 'Full',
        features: ['Oil-free', 'Long-wear']
    },
    availability: 'In Stock'
},
{
    id: 24,
    name: 'Blush Palette - Rosy Hues',
    category: 'SkinCare',
    price: 24.99,
    image: 'images/bp.jpeg',
    description: 'Palette of rosy blush shades to add a natural flush to your cheeks. Silky smooth texture.',
    details: {
        brand: 'CheekChic',
        type: 'Blush Palette',
        shades: ['Rosy Tones'],
        features: ['Silky Texture', 'Blendable']
    },
    availability: 'In Stock'
},
{
    id: 25,
    name: 'Mascara - Volumizing Black',
    category: 'SkinCare',
    price: 19.99,
    image: 'images/mas.jpeg',
    description: 'Volumizing black mascara for dramatic lashes. Smudge-proof and long-lasting formula.',
    details: {
        brand: 'LashBoost',
        type: 'Mascara',
        color: 'Black',
        features: ['Volumizing', 'Smudge-proof', 'Long-lasting']
    },
    availability: 'In Stock'
},
{
    id: 26,
    name: 'Concealer - Creamy Coverage',
    category: 'SkinCare',
    price: 22.99,
    image: 'images/ccc.jpeg',
    description: 'Creamy concealer for hiding imperfections and dark circles. Medium to full coverage.',
    details: {
        brand: 'CoverUp',
        type: 'Concealer',
        coverage: 'Medium to Full',
        features: ['Creamy Texture', 'Buildable Coverage']
    },
    availability: 'In Stock'
},
{
    id: 27,
    name: 'Classic Shoes',
    category: 'Shoes',
    price: 79.99,
    image: 'images/classic.jpeg',
    description: 'Classic shoes designed for comfort and style. Perfect for everyday wear with a timeless look.',
    details: {
        brand: 'Classic Footwear',
        type: 'Classic Shoes',
        material: 'Genuine Leather',
        features: ['Comfort Fit', 'Durable Sole', 'Versatile Design']
    },
    availability: 'In Stock'
},
{
    id: 28,
    name: 'Bronzer - Matte Finish',
    category: 'SkinCare',
    price: 27.99,
    image: 'images/bronzer.jpeg',
    description: 'Matte finish bronzer to add warmth and contour to your face. Natural-looking shade.',
    details: {
        brand: 'SunKissed',
        type: 'Bronzer',
        finish: 'Matte',
        shade: 'Natural Tan'
    },
    availability: 'In Stock'
},
{
    id: 29,
    name: 'Highlighter - Shimmering Glow',
    category: 'SkinCare',
    price: 25.99,
    image: 'images/high.jpeg',
    description: 'Shimmering highlighter to illuminate your best features. Fine texture and radiant finish.',
    details: {
        brand: 'GlowBeam',
        type: 'Highlighter',
        finish: 'Shimmering',
        texture: 'Fine'
    },
    availability: 'In Stock'
},
{
    id: 30,
    name: 'Setting Powder - Translucent',
    category: 'SkinCare',
    price: 29.99,
    image: 'images/spt.jpeg',
    description: 'Translucent setting powder to set makeup and control shine. Lightweight and finely milled.',
    details: {
        brand: 'SetStay',
        type: 'Setting Powder',
        finish: 'Translucent',
        texture: 'Lightweight, Finely Milled'
    },
    availability: 'In Stock'
},
{
    id: 31,
    name: 'Eyeliner - Liquid Black',
    category: 'SkinCare',
    price: 20.99,
    image: 'images/eye.jpeg',
    description: 'Liquid black eyeliner for precise lines and dramatic looks. Waterproof and long-wearing.',
    details: {
        brand: 'LineArt',
        type: 'Liquid Eyeliner',
        color: 'Black',
        features: ['Waterproof', 'Long-wearing', 'Precise Tip']
    },
    availability: 'In Stock'
},
{
    id: 32,
    name: 'Brow Pencil - Precision',
    category: 'SkinCare',
    price: 18.99,
    image: 'images/bpp.jpeg',
    description: 'Precision brow pencil to fill and shape your eyebrows. Natural-looking and easy to use.',
    details: {
        brand: 'BrowDefine',
        type: 'Brow Pencil',
        features: ['Precision Tip', 'Natural Finish', 'Easy to Use']
    },
    availability: 'In Stock'
},
{
    id: 33,
    name: 'Microwave',
    category: 'Appliances',
    price: 99.99,
    image: 'images/micro.jpeg',
    description: 'Compact microwave for quick and convenient cooking. Features multiple power settings and a sleek design.',
    details: {
        brand: 'QuickCook',
        type: 'Microwave Oven',
        features: ['Compact', 'Multiple Power Settings', 'Sleek Design']
    },
    availability: 'In Stock'
},
{
    id: 34,
    name: 'Red Puffer Jacket',
    category: 'Clothing',
    price: 89.99,
    image: 'images/rbj.jpeg',
    description: 'Stay warm and stylish in this vibrant red puffer jacket. Lightweight yet insulated for cold weather.',
    details: {
        brand: 'WarmWear',
        type: 'Puffer Jacket',
        color: 'Red',
        material: 'Polyester',
        features: ['Insulated', 'Lightweight', 'Water-resistant']
    },
    availability: 'In Stock'
},
{
    id: 35,
    name: 'Blue Winter Jacket',
    category: 'Clothing',
    price: 99.99,
    image: 'images/bwj.jpeg',
    description: 'Heavy-duty blue winter jacket for extreme cold conditions. Windproof and waterproof.',
    details: {
        brand: 'ArcticShield',
        type: 'Winter Jacket',
        color: 'Blue',
        material: 'Nylon, Fleece Lining',
        features: ['Windproof', 'Waterproof', 'Heavy Insulation']
    },
    availability: 'In Stock'
},
{
    id: 36,
    name: 'Polo Shirts Assortment',
    category: 'Clothing',
    price: 39.99,
    image: 'images/psa.jpeg',
    description: 'Set of four classic polo shirts in assorted colors. Comfortable and versatile for any casual occasion.',
    details: {
        brand: 'PoloBasics',
        type: 'Polo Shirt Set',
        quantity: '4',
        colors: ['Green', 'Gray', 'Blue', 'Orange'],
        material: 'Cotton Blend'
    },
    availability: 'In Stock'
},
{
    id: 37,
    name: 'Men\'s Dress Shirts Trio',
    category: 'Clothing',
    price: 79.99,
    image: 'images/mmtjpeg.jpeg',
    description: 'Collection of three elegant dress shirts for formal and business settings. Wrinkle-resistant fabric.',
    details: {
        brand: 'FormalFlair',
        type: 'Dress Shirt Set',
        quantity: '3',
        colors: ['Red', 'Blue', 'Gray'],
        material: 'Cotton-Polyester Blend',
        features: ['Wrinkle-resistant', 'Slim Fit']
    },
    availability: 'In Stock'
},
{
    id: 38,
    name: 'Casual Polo Shirts Pack',
    category: 'Clothing',
    price: 44.99,
    image: 'images/cpp.jpeg',
    description: 'Pack of three casual polo shirts perfect for everyday wear. Soft and breathable cotton.',
    details: {
        brand: 'EverydayPolo',
        type: 'Casual Polo Set',
        quantity: '3',
        colors: ['Red', 'Blue', 'Gray'],
        material: '100% Cotton',
        features: ['Breathable', 'Soft Fabric']
    },
    availability: 'In Stock'
},
{
    id: 39,
    name: 'heels',
    category: 'Shoes',
    price: 99.99,
    image: 'images/heels.jpeg',
    description: 'Stylish and elegant heels perfect for any occasion. Features a comfortable fit and chic design.',
    details: {
        brand: 'ShoeChic',
        type: 'Heels',
        color: 'Black',
        material: 'Synthetic Leather',
        style: 'Stiletto'
    },
    availability: 'In Stock'
},
{
    id: 40,
    name: 'Blue Cocktail Dress',
    category: 'Clothing',
    price: 79.99,
    image: 'images/bcd.jpeg',
    description: 'Stylish blue cocktail dress perfect for parties and events. Modern design and comfortable fit.',
    details: {
        brand: 'PartyStyle',
        type: 'Cocktail Dress',
        color: 'Blue',
        material: 'Polyester Blend',
        style: 'Fit and Flare'
    },
    availability: 'In Stock'
},
{
    id: 41,
    name: 'Boots',
    category: 'Shoes',
    price: 49.99,
    image: 'images/boots.jpeg',
    description: 'Stylish and comfortable boots perfect for any occasion. Durable material and trendy design.',
    details: {
        brand: 'FootwearCo',
        type: 'Boots',
        color: 'Black',
        material: 'Leather',
        style: 'Ankle Boots'
    },
    availability: 'In Stock'
}

];
let categories = [{
    id: 'electronics',
    name: 'Electronics',
    categoryImage: 'images/electronics/DALL·E 2025-01-29 17.37.03 - A collection of various electronic gadgets displayed on a modern table, including wireless earbuds, a smartphone, smartwatches, and other tech accesso.webp',
    bannerImage: 'images/electronics/eb384b9c-eb6b-415e-b053-706b87308d00.webp',
    description: 'Explore the latest in electronics and gadgets'
},
{
    id: 'clothing',
    name: 'Clothing',
    categoryImage: 'images/real image of only clothes.png',
    bannerImage: 'images/clothes/1.webp',
    description: 'Discover trendy and comfortable clothing for all occasions'
},
{
    id: 'shoes',
    name: 'Shoes',
    categoryImage: 'images/real image of shoes products.png',
    bannerImage: 'images/iloveimg-resized/DALL·E 2025-01-29 17.54.08 - A stylish display stand filled with various shoes, including sneakers, high heels, boots, and casual footwear. The shoes are neatly arranged on shelve.webp',
    description: 'Step up your style with our diverse shoe collection'
    },
{
    id: 'skincare',
    name: 'Skin Care',
    categoryImage: 'images/make up/DALL·E 2025-01-29 17.50.48 - A stylish display stand filled with various makeup and skincare products, including lipsticks, foundations, serums, and moisturizers. The products are.webp',
    bannerImage: 'images/make up/DALL·E 2025-01-29 17.51.51 - A stylish display stand filled with various makeup and skincare products, including lipsticks, foundation, eyeshadow palettes, moisturizers, and serum.webp',
    description: 'Nourish and protect your skin with our premium skin care products'
},
{
    id: 'appliances',
    name: 'Appliances',
    categoryImage: 'images/Gemini_Generated_Image_afdp0zafdp0zafdp.jpeg',
    bannerImage: 'images/electronics/DALL·E 2025-01-29 17.57.45 - A modern appliance store showcasing various home appliances, including refrigerators, washing machines, ovens, microwaves, and vacuum cleaners. The st.webp',
    description: 'Upgrade your home with our range of modern appliances'
},

];
let teamMembers = [
  {
    name: "Susana Sameh",
    role: "Lead Developer",
    image: "../images/team/WhatsApp Image 2023-11-25 at 5.43.19 PM.jpeg",
    linkedin: "https://www.linkedin.com/in/susana-sameh",
  },
  {
    name: "Mustafa Gamal",
    role: "Developer",
    image: "../images/team/3986d7eb-59c1-4d60-8120-b8ab84b25a12.jpeg",
    linkedin:
      "https://www.linkedin.com/in/mustafa-gamal-074099244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  // {
  //     name: 'Mina Ramzy',
  //     role: 'Developer',
  //     image: 'icons/profile.ico'
  // },
  // {
  //     name: 'Ahmed Elsayed',
  //     role: 'Developer',
  //     image: 'icons/profile.ico'
  // }
];
let loggedInUserName = '';
let loggedInUserEmail = '';
let displayedProducts = [...products];
let currentProductId = null;
let currentProfileSection = 'profile-info';
let favoriteProducts = []; 


function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    if (pageName === 'auth') {
        document.getElementById('authPage').classList.add('active');
        document.getElementById('container').classList.remove('active');
    } else {
        document.getElementById('authPage').classList.remove('active');
        document.getElementById(pageName + 'Page').classList.add('active');
    }

    document.body.classList.remove('category-electronics', 'category-clothing', 'category-shoes',
        'category-appliances', 'category-skincare');
    document.body.classList.remove('product-electronics', 'product-clothing', 'product-shoes',
        'product-appliances', 'product-skincare');

    previousPage = currentPage;
    currentPage = pageName;

    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const linkPage = link.textContent.toLowerCase().replace(/\s/g, '');
        if (linkPage === pageName.toLowerCase()) {
            link.classList.add('active');
        }
    });

    if (pageName === 'categories') {
        renderCategories();
    } else if (pageName === 'home') {
        renderHomePageCategories();
        renderFeaturedProducts(); 
    } else if (pageName === 'productDetail') {
        renderProductDetail();
    } else if (pageName === 'profile') {
        if (!isAuthenticated) {
            showToast('Please login to view your profile.');
            showPage('auth');
            return;
        }
        renderProfile();
        showProfileSection(currentProfileSection); 
    } else if (pageName === 'aboutUs') {
        renderAboutUs();
    } else if (pageName === 'contactUs') {

    } else if (pageName === 'checkout') {
        if (!isAuthenticated) {
            showToast('Please login to proceed to checkout.');
            showPage('auth');
            return;
        }
    } else if (pageName === 'auth') {
        showLoginForm();
        document.getElementById('authPage').classList.remove('register-active');
    }
}

function showPreviousPage() {
    showPage(previousPage);
}

// Validation Functions
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^[a-zA-Z0-9._%+-]{6,}$/;
    return passwordRegex.test(password);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10,}$/;
    return phoneRegex.test(phone);
}

function validateName(name) {
    const nameRegex = /^[a-zA-Z ]{2,}$/;
    return nameRegex.test(name);
}

function validateCountry(country) {
    const countryRegex = /^[a-zA-Z ]{2,}$/;
    return countryRegex.test(country);
}


function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showToast('Please fill in all fields');
        return;
    }

    if (!validateEmail(email)) {
        showToast("Invalid email format.");
        return;
    }


    //  local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        (user) => user.email === email && user.password === password
    );

    if (!user) {
        showToast("Invalid email or password.");
        return;
    }

    isAuthenticated = true;
    loggedInUserEmail = email;
    loggedInUserName = user.name; 
    localStorage.setItem('userName', loggedInUserName); 
    localStorage.setItem('userEmail', loggedInUserEmail);

    document.getElementById('authLink').style.display = 'none';
    document.getElementById('profileLink').style.display = 'inline-block';
    document.getElementById('logoutLink').style.display = 'inline-block';

    showToast('Login successful');
    showPage('home');
}

function logout() {
    isAuthenticated = false;
    loggedInUserName = '';
    loggedInUserEmail = '';
    localStorage.removeItem('userName'); 
    localStorage.removeItem('userEmail');

    document.getElementById('authLink').style.display = 'inline-block';
    document.getElementById('profileLink').style.display = 'none';
    document.getElementById('logoutLink').style.display = 'none';

    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('registerName').value = '';
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('country').value = '';

    showToast('Logged out successfully');
    showPage('home');
}

function renderFeaturedProducts() {
    const featuredProducts = products.slice(0, 4);
    const productGrid = document.querySelector('#homePage .featured-grid');
    productGrid.innerHTML = featuredProducts.map(product => `
<div class="product-card">
<img src="${product.image}" alt="${product.name}" class="product-image">
<div class="product-details">
<h3 class="product-title">${product.name}</h3>
<p class="product-price">$${product.price}</p>
</div>
<div class="product-overlay">
<a href="#" onclick="showProductDetail(${product.id}); return false;">View Details</a>
<button class="btn btn-primary" onclick="addToCart(${product.id})">
Add to Cart
</button>
</div>
</div>
`).join('');
}

function showProductDetail(productId) {
    currentProductId = productId;
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('productDetailName').textContent = product.name;
        document.getElementById('productDetailImage').src = product.image;
        document.getElementById('productDetailImage').alt = product.name;
        document.getElementById('productDetailDescription').textContent = product.description;
        document.getElementById('productDetailPrice').textContent = '$' + product.price;
        document.getElementById('productDetailAvailability').textContent = 'Availability: ' + product.availability;

        const moreDetailsList = document.getElementById('productDetailMoreInfo');
        moreDetailsList.innerHTML = '';

        for (const key in product.details) {
            const listItem = document.createElement('li');
            if (Array.isArray(product.details[key])) {
                listItem.innerHTML = `<strong>${key}:</strong> ${product.details[key].join(', ')}`;
            } else {
                listItem.innerHTML = `<strong>${key}:</strong> ${product.details[key]}`;
            }
            moreDetailsList.appendChild(listItem);
        }


        addToFavorites(product);

        showPage('productDetail');
    } else {
        showToast('Product not found');
    }
}

function openImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = document.getElementById('productDetailImage').src;
    modal.style.display = 'flex';
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function renderCategories() {
    const categoryGrid = document.querySelector('#categoriesPage .category-grid');
    categoryGrid.innerHTML = categories.map(category => `
<div class="category-card" onclick="showCategoryProducts('${category.id}', '${category.name}', '${category.bannerImage}')">
<img src="${category.categoryImage}" alt="${category.name}" class="category-image">
<h3 class="category-title">${category.name}</h3>
</div>
`).join('');
}

function renderHomePageCategories() {
    const homeCategoryGrid = document.querySelector('#homePage .home-categories-grid');
    homeCategoryGrid.innerHTML = categories.map(category => `
<div class="category-card" onclick="showCategoryProducts('${category.id}', '${category.name}', '${category.bannerImage}')">
<img src="${category.categoryImage}" alt="${category.name}" class="category-image">
<h3 class="category-title">${category.name}</h3>
</div>
`).join('');
}

function showCategoryProducts(categoryId, categoryName, bannerImage) {
    const filteredProducts = products.filter(product => product.category.toLowerCase() === categoryId);
    displayedProducts = [...filteredProducts];
    renderProductsForCategory(displayedProducts);

    document.getElementById('categoryBannerImage').src = bannerImage;
    document.getElementById('categoryName').textContent = categoryName;

    showPage('categoryProducts');
}

function renderProductsForCategory(productsToRender) {
    const productGrid = document.querySelector('#categoryProductsPage .product-grid');
    productGrid.innerHTML = productsToRender.map(product => `
<div class="product-card">
<img src="${product.image}" alt="${product.name}" class="product-image">
<div class="product-details">
<h3 class="product-title">${product.name}</h3>
<p class="product-price">$${product.price}</p>
</div>
<div class="product-overlay">
<a href="#" onclick="showProductDetail(${product.id}); return false;">View Details</a>
<button class="btn btn-primary" onclick="addToCart(${product.id})">
Add to Cart
</button>
</div>
</div>
`).join('');
}

function sortProducts() {
    const sortBy = document.getElementById('sort').value;
    switch (sortBy) {
        case 'price-low-high':
            displayedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-low':
            displayedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-az':
            displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    renderProductsForCategory(displayedProducts);
}

function addToCart(productId) {
    if (!isAuthenticated) {
        showToast('Please login to add items to cart');
        showPage('auth');
        return;
    }
    const product = products.find(p => p.id === productId);

    const cartItem = cart.find(item => item.id === productId);
    const itemToAdd = {
        ...product,
        quantity: 1
    }
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push(itemToAdd);
    }
    showToast('Added to cart');
    renderCart();
}

function updateQuantity(productId, delta) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = Math.max(0, cartItem.quantity + delta);
        if (cartItem.quantity === 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        renderCart();
    }
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
<div class="cart-item">
<img src="${item.image}" alt="${item.name}" class="cart-item-image">
<div class="cart-item-details">
    <div class="cart-item-title">${item.name}</div>
    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
    <div class="cart-item-quantity">
        <button onclick="event.stopPropagation(); updateQuantity(${item.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="event.stopPropagation(); updateQuantity(${item.id}, 1)">+</button>
    </div>
</div>
</div>
`).join('');
    }
    document.getElementById('cartTotal').textContent = total.toFixed(2);
    renderOrderSection();
}

function toggleSidebarCart() {
    const sidebarCart = document.getElementById('sidebarCart');
    if (isAuthenticated) {
        sidebarCart.classList.toggle('open');
    } else {
        showToast('Please login to view your cart.');
        showPage('auth');
    }
}


document.addEventListener('click', function (event) {
    const sidebarCart = document.getElementById('sidebarCart');
    const cartLink = document.getElementById('cartLink');
    if (!cartLink.contains(event.target) && !sidebarCart.contains(event.target) && sidebarCart.classList.contains(
        'open')) {
        sidebarCart.classList.remove('open');
    }
});


function placeOrder(event) {
    event.preventDefault();
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    cart = [];
    renderCart();
    renderOrderSection();
    showToast('Order placed successfully!');
    showPage('home');
}

function closeCartDropdown() {}

function checkoutAndClose() {
    if (!isAuthenticated) {
        showToast('Please login to proceed to checkout.');
        showPage('auth');
        return;
    }
    showPage('checkout');
    toggleSidebarCart()
}


function renderProfile() {
    document.getElementById('profileName').textContent = loggedInUserName;
    document.getElementById('profileEmail').textContent = loggedInUserEmail;
}

function showEditProfile() {
    document.getElementById('editFirstName').value = loggedInUserName.split(' ')[0];
    document.getElementById('editLastName').value = loggedInUserName.split(' ').slice(1).join(' ');
    document.getElementById('editEmail').value = loggedInUserEmail;
    showPage('editProfile');
}

function updateProfile(event) {
    event.preventDefault();
    const firstName = document.getElementById('editFirstName').value;
    const lastName = document.getElementById('editLastName').value;
    const email = document.getElementById('editEmail').value;
    loggedInUserName = `${firstName} ${lastName}`.trim();
    loggedInUserEmail = email;
    document.getElementById('profileName').textContent = loggedInUserName;
    document.getElementById('profileEmail').textContent = loggedInUserEmail;
    showToast('Profile updated successfully');
    showPage('profile');
}


function renderAboutUs() {
    const teamGrid = document.querySelector('#aboutUsPage .team-grid');
    teamGrid.innerHTML = teamMembers.map(member => `
<div class="team-member">
<a href="${member.linkedin}" target="_blank"> <img src="${member.image}" alt="${member.name}" class="member-image"></a>
<h3 class="member-name">${member.name}</h3>
<p class="member-role">${member.role}</p>
</div>
`).join('');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

function showLoginForm() {
    document.getElementById('authPage').classList.remove('register-active');
}


function register(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;

    // Basic Validations (You can add more robust validation)
    let isValid = true;
    if (!validateName(name)) {
        document.getElementById('wrongName').textContent = "Invalid name format.";
        isValid = false;
    } else {
        document.getElementById('wrongName').textContent = "";
    }
    if (!validateEmail(email)) {
        document.getElementById('wrongEmail').textContent = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById('wrongEmail').textContent = "";
    }
    if (!validatePassword(password)) {
        document.getElementById('wrongPass').textContent = "Password must be at least 6 characters.";
        isValid = false;
    } else {
        document.getElementById('wrongPass').textContent = "";
    }
    if (!validatePhone(phone)) {
        document.getElementById('wrongPhone').textContent = "Invalid phone number format (10 digits required).";
        isValid = false;
    } else {
        document.getElementById('wrongPhone').textContent = "";
    }
    if (!validateCountry(country)) {
        document.getElementById('wrongCountry').textContent = "Invalid country name format.";
        isValid = false;
    } else {
        document.getElementById('wrongCountry').textContent = "";
    }


    if (!isValid) return;


    // Store user in local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        showToast("Email already registered. Please login.");
        return;
    }

    const newUser = { name, email, password, phone, country };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));


    isAuthenticated = true;
    loggedInUserName = name;
    loggedInUserEmail = email;
    localStorage.setItem('userName', loggedInUserName); // Store for persistent login
    localStorage.setItem('userEmail', loggedInUserEmail);


    document.getElementById('authLink').style.display = 'none';
    document.getElementById('profileLink').style.display = 'inline-block';
    document.getElementById('logoutLink').style.display = 'inline-block';

    showToast('Registration successful!');
    showPage('home');
}

function closeAuthPage() {
    showPage(previousPage);
}


function init() {
    renderFeaturedProducts(); // Even though products are empty, keep the function for structure
    renderCategories();
    renderHomePageCategories();
    initAuth();
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    if (storedName && storedEmail) {
        loggedInUserName = storedName;
        loggedInUserEmail = storedEmail;
        isAuthenticated = true;
        document.getElementById('authLink').style.display = 'none';
        document.getElementById('profileLink').style.display = 'inline-block';
        document.getElementById('logoutLink').style.display = 'inline-block';
    }
}
window.onload = init;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (registerBtn && loginBtn) {
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }
});

function initAuth() {
    const authLink = document.getElementById('authLink');
    const profileLink = document.getElementById('profileLink');
    const logoutLink = document.getElementById('logoutLink');

    if (isAuthenticated) {
        authLink.style.display = 'none';
        profileLink.style.display = 'inline-block';
        logoutLink.style.display = 'inline-block';
    } else {
        authLink.style.display = 'inline-block';
        profileLink.style.display = 'none';
        logoutLink.style.display = 'none';
    }
}

function showProfileSection(sectionId) {
    document.querySelectorAll('.profile-section').forEach(section => {
        section.classList.remove('active');
    });

    const activeSectionId = sectionId || 'editProfile';
    document.getElementById(activeSectionId).classList.add('active');

    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(activeSectionId + 'Btn').classList.add('active');
    currentProfileSection = activeSectionId;

    if (activeSectionId === 'orders') {
        renderOrderSection();
    } else if (activeSectionId === 'favorites') {
        renderFavoritesSection();
    }
}

function renderOrderSection() {
    const ordersContent = document.getElementById('orders');
    if (cart.length === 0) {
        ordersContent.innerHTML = `<div class="card" style="margin-top: 1rem;">
    <div class="card-body">
        <h3>Your Orders</h3>
        <p>Your cart is empty. Add items to see them here.</p>
    </div>
</div>`;
    } else {
        const orderItemsHTML = cart.map(item => `
    <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-item-quantity">
                Quantity: <span>${item.quantity}</span>
            </div>
        </div>
    </div>`).join('');

        ordersContent.innerHTML = `<div class="card" style="margin-top: 1rem;">
    <div class="card-body">
        <h3>Your Orders</h3>
        <div class="cart-items profile-orders-items">
            ${orderItemsHTML}
        </div>
        <div class="cart-total" style="text-align: right; margin-top: 1rem;">
            Total: $<span id="orderTotal">${calculateCartTotal().toFixed(2)}</span>
        </div>
    </div>
</div>`;
    }
}

function calculateCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}


function addToFavorites(product) {
    const isFavorite = favoriteProducts.some(favProduct => favProduct.id === product.id);
    if (!isFavorite) {
        favoriteProducts.push(product);
    }
}

function renderFavoritesSection() {
    const favoritesContent = document.getElementById('favorites');
    if (favoriteProducts.length === 0) {
        favoritesContent.innerHTML = `<div class="card" style="margin-top: 1rem;">
    <div class="card-body">
        <h3>Your Favorites</h3>
        <p>No favorite products yet. View product details to add them here.</p>
    </div>
</div>`;
    } else {
        const favoriteItemsHTML = favoriteProducts.map(product => `
    <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-details">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
        </div>
        <div class="product-overlay">
            <a href="#" onclick="showProductDetail(${product.id}); return false;">View Details</a>
        </div>
    </div>`).join('');

        favoritesContent.innerHTML = `<div class="card" style="margin-top: 1rem;">
    <div class="card-body">
        <h3>Your Favorites</h3>
        <div class="product-grid profile-favorites-grid">
            ${favoriteItemsHTML}
        </div>
    </div>
</div>`;
    }
}

function submitContactForm(event, formId) {
    event.preventDefault();
    showToast('Message sent successfully!');
    showPage('home');

    if (formId === 'contactSectionHome') {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else if (formId === 'contactUsPage') {
        document.getElementById('nameContactPage').value = '';
        document.getElementById('emailContactPage').value = '';
        document.getElementById('messageContactPage').value = '';
    }
}