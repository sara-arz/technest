export const categories = [
  {
    id: "apple",
    name: "Apple",
    image: "https://cdn.simpleicons.org/apple/111827",
    laptopImage:
      "https://dam.elcorteingles.es/producto/www-001054715513948-00.jpg?height=440&impolicy=Resize&width=440",
  },
  {
    id: "dell",
    name: "Dell",
    image: "https://cdn.simpleicons.org/dell/0672CB",
    laptopImage:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502939_sd.jpg",
  },
  {
    id: "lenovo",
    name: "Lenovo",
    image: "https://cdn.simpleicons.org/lenovo/E2231A",
    laptopImage:
      "https://p4-ofp.static.pub//fes/cms/2024/05/17/gshvrbmi7vcvszlriky5rf57g0w2w8161192.png?width=584&height=584",
  },
  {
    id: "hp",
    name: "HP",
    image: "https://cdn.simpleicons.org/hp/0096D6",
    laptopImage:
      "https://hp.widen.net/content/xrfmzzssxz/webp/xrfmzzssxz.png?color=ffffff00&dpi=72&h=430&w=573",
  },
  {
    id: "asus",
    name: "ASUS",
    image: "https://cdn.simpleicons.org/asus/111827",
    laptopImage:
      "https://s13emagst.akamaized.net/products/51481/51480220/images/res_37ee6df3ed3bdca36d4abcf323c17ae4.jpg",
  },
  {
    id: "acer",
    name: "Acer",
    image: "https://cdn.simpleicons.org/acer/83B81A",
    laptopImage:
      "https://mediacore.kyuubi.it/aedgaming/media/img/2025/6/26/651947-large-acer-nb-15-6-aspire-5-ryzen-5-5625u-16gb-512gb-ssd-win-11-home.jpg",
  },
];

export const products = [
  {
    id: "macbook-air-m2",
    name: "MacBook Air M2",
    brand: "apple",
    brandId: "apple",
    price: 185000,
    currency: "DZD",
    description:
      "Apple MacBook Air powered by the M2 chip with a slim aluminum design.",
    specs: {
      processor: "Apple M2",
      ram: "8GB",
      storage: "256GB SSD",
      screen: "13.6-inch",
    },
  },
  {
    id: "macbook-pro-m3",
    name: "MacBook Pro 14 M3",
    brand: "apple",
    brandId: "apple",
    price: 285000,
    currency: "DZD",
    description:
      "Powerful MacBook Pro for professional work and creative applications.",
    specs: {
      processor: "Apple M3",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14.2-inch",
    },
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air 15 M3",
    brand: "apple",
    brandId: "apple",
    price: 245000,
    currency: "DZD",
    description: "Lightweight 15-inch MacBook Air with Apple's M3 processor.",
    specs: {
      processor: "Apple M3",
      ram: "8GB",
      storage: "512GB SSD",
      screen: "15.3-inch",
    },
  },

  // DELL
  {
    id: "dell-xps-13",
    name: "Dell XPS 13",
    brand: "dell",
    brandId: "dell",
    price: 195000,
    currency: "DZD",
    description:
      "Premium Dell ultrabook with a modern design and excellent portability.",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "13.4-inch",
    },
  },
  {
    id: "dell-latitude-5420",
    name: "Dell Latitude 5420",
    brand: "dell",
    brandId: "dell",
    price: 112000,
    currency: "DZD",
    description:
      "Reliable business laptop for studying, office work and multitasking.",
    specs: {
      processor: "Intel Core i5-1145G7",
      ram: "16GB",
      storage: "256GB SSD",
      screen: "14-inch",
    },
  },
  {
    id: "dell-g15",
    name: "Dell G15 Gaming",
    brand: "dell",
    brandId: "dell",
    price: 235000,
    currency: "DZD",
    description: "Powerful Dell gaming laptop with dedicated NVIDIA graphics.",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "15.6-inch 165Hz",
      graphics: "RTX 4060",
    },
  },

  // LENOVO
  {
    id: "thinkpad-x1-carbon",
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "lenovo",
    brandId: "lenovo",
    price: 210000,
    currency: "DZD",
    description:
      "Premium Lenovo business laptop with a lightweight carbon design.",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14-inch",
    },
  },
  {
    id: "ideapad-slim-5",
    name: "Lenovo IdeaPad Slim 5",
    brand: "lenovo",
    brandId: "lenovo",
    price: 139000,
    currency: "DZD",
    description:
      "Versatile Lenovo laptop for productivity and everyday entertainment.",
    specs: {
      processor: "AMD Ryzen 7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "15.6-inch",
    },
  },

  // HP
  {
    id: "hp-spectre-x360",
    name: "HP Spectre x360",
    brand: "hp",
    brandId: "hp",
    price: 225000,
    currency: "DZD",
    description:
      "Premium HP convertible laptop with touchscreen and flexible design.",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14-inch OLED",
    },
  },
  {
    id: "hp-pavilion-15",
    name: "HP Pavilion 15",
    brand: "hp",
    brandId: "hp",
    price: 125000,
    currency: "DZD",
    description:
      "Everyday HP laptop suitable for university, work and entertainment.",
    specs: {
      processor: "Intel Core i5",
      ram: "8GB",
      storage: "512GB SSD",
      screen: "15.6-inch",
    },
  },

  // ASUS
  {
    id: "asus-zenbook-14",
    name: "ASUS Zenbook 14 OLED",
    brand: "asus",
    brandId: "asus",
    price: 189000,
    currency: "DZD",
    description:
      "Premium ASUS ultrabook featuring an OLED display and slim design.",
    specs: {
      processor: "Intel Core Ultra 5",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14-inch OLED",
    },
  },
  {
    id: "asus-rog-strix-g16",
    name: "ASUS ROG Strix G16",
    brand: "asus",
    brandId: "asus",
    price: 295000,
    currency: "DZD",
    description:
      "ASUS ROG gaming laptop designed for demanding games and intensive workloads.",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "1TB SSD",
      screen: "16-inch 165Hz",
      graphics: "RTX 4060",
    },
  },

  // ACER
  {
    id: "acer-swift-go-14",
    name: "Acer Swift Go 14",
    brand: "acer",
    brandId: "acer",
    price: 155000,
    currency: "DZD",
    description: "Slim Acer laptop with an OLED display and portable design.",
    specs: {
      processor: "Intel Core Ultra 5",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14-inch OLED",
    },
  },
  {
    id: "acer-nitro-v15",
    name: "Acer Nitro V15",
    brand: "acer",
    brandId: "acer",
    price: 198000,
    currency: "DZD",
    description:
      "Acer gaming laptop with dedicated NVIDIA graphics and a high refresh rate screen.",
    specs: {
      processor: "Intel Core i5-13420H",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "15.6-inch 144Hz",
      graphics: "RTX 4050",
    },
  },
];

products.forEach((product) => {
  const brandCategory = categories.find(
    (category) => category.id === product.brandId,
  );

  if (brandCategory) {
    product.category = brandCategory.name;
    product.image = brandCategory.laptopImage;
  }
});

export const featured = [...products]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
