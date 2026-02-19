const productsData = [
  {
    name: "Wireless Bluetooth Headphones",
    description:
      "Over-ear wireless headphones with noise isolation and deep bass",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    name: "Gaming Mouse",
    description: "Ergonomic RGB gaming mouse with adjustable DPI",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1631749352438-7d576312185d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessories",
  },
  {
    name: "Mechanical Keyboard",
    description: "Compact mechanical keyboard with blue switches",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessories",
  },
  {
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better posture",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1709536777126-238639005f7a?q=80&w=1611&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Office",
  },
  {
    name: "USB-C Hub",
    description: "6-in-1 USB-C hub with HDMI and USB ports",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1616578273461-3a99ce422de6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    name: "Smartphone Tripod",
    description: "Flexible tripod for smartphones and action cameras",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1596568251367-1a391f2d8d6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Photography",
  },
  {
    name: "Portable Power Bank 20000mAh",
    description: "Fast charging power bank with dual USB output",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    name: "Wireless Earbuds",
    description: "True wireless earbuds with touch controls",
    price: 2199,
    image:
      "https://images.unsplash.com/photo-1632200004922-bc18602c79fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    name: "Phone Case",
    description: "Shockproof transparent phone case",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1623393945964-8f5d573f9358?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessories",
  },
  {
    name: "Desk Organizer",
    description: "Multi-compartment desk organizer for office supplies",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1644463589256-02679b9c0767?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Office",
  },
  {
    name: "Fitness Smart Watch",
    description: "Activity tracker with heart rate monitoring",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fitness",
  },
  {
    name: "Water Bottle (Steel)",
    description: "Insulated stainless steel water bottle (1L)",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1664714628878-9d2aa898b9e3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lifestyle",
  },
  {
    name: "Backpack",
    description: "Water-resistant backpack with laptop compartment",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lifestyle",
  },
  {
    name: "Table Lamp",
    description: "LED desk lamp with adjustable brightness",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Home",
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with powerful sound",
    price: 2699,
    image:
      "https://images.unsplash.com/photo-1582978571763-2d039e56f0c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad for smartphones",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1636297461709-0812290a9dcc?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    name: "Notebook Set",
    description: "Pack of 3 ruled notebooks for daily use",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1636014708703-36477b887ee4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Stationery",
  },
  {
    name: "Pen Stand",
    description: "Minimal metal pen holder for desk",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1751107756602-dc1f003e50b5?q=80&w=649&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Stationery",
  },
  {
    name: "Yoga Mat",
    description: "Non-slip yoga mat for home workouts",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fitness",
  },
  {
    name: "Cable Organizer",
    description: "Silicone cable organizer clips (pack of 5)",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1760348213270-7cd00b8c3405?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessories",
  },
];

export default productsData;
