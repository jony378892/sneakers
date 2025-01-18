import { Product } from "./product-interface";

export const products: Product[] =
[
  {
    id: "mc001",
    title: "Eames Lounge Chair",
    description: "Mid-century modern classic featuring molded plywood and premium leather upholstery. Ergonomic design provides exceptional comfort and support while adding sophisticated style to any space.",
    color: "Black",
    size: {
      width: 32.75,
      depth: 32.75,
      height: 32,
      unit: "inches"
    },
    quantity: 15,
    price: 1295.00,
    image: '/images/chair1.jpg',
  },
  {
    id: "mc002",
    title: "Scandinavian Dining Chair",
    description: "Minimalist dining chair with solid oak frame and woven cord seat. Perfect blend of comfort and Nordic design principles for modern dining spaces.",
    color: "Natural Oak",
    size: {
      width: 18.5,
      depth: 20,
      height: 30,
      unit: "inches"
    },
    quantity: 24,
    price: 299.99,
    image: "/images/chair2.jpg"
  },
  {
    id: "mc003",
    title: "Velvet Accent Chair",
    description: "Luxurious velvet upholstered accent chair with gold-finished steel legs. Adds a touch of glamour to any living room or bedroom setting.",
    color: "Emerald Green",
    size: {
      width: 27,
      depth: 29,
      height: 31,
      unit: "inches"
    },
    quantity: 18,
    price: 449.99,
    image: "/images/chair3.jpg"
  },
  {
    id: "mc004",
    title: "Ergonomic Office Chair",
    description: "Premium mesh office chair with adjustable lumbar support, headrest, and armrests. Features synchronized tilt mechanism and height adjustment for optimal comfort during long work hours.",
    color: "Gray",
    size: {
      width: 26,
      depth: 26,
      height: 42-46,
      unit: "inches"
    },
    quantity: 30,
    price: 599.99,
    image: "/images/chair4.jpg"
  },
  {
    id: "mc005",
    title: "Molded Plastic Side Chair",
    description: "Contemporary side chair with molded plastic seat and beech wood dowel legs. Stackable design perfect for modern dining rooms or as accent seating.",
    color: "White",
    size: {
      width: 18,
      depth: 21,
      height: 31.5,
      unit: "inches"
    },
    quantity: 40,
    price: 129.99,
    image: "/images/chair5.jpg"
  },
  {
    id: "mc006",
    title: "Leather Swivel Armchair",
    description: "Modern swivel armchair upholstered in premium Italian leather. Features 360-degree rotation and tilting mechanism for versatile seating comfort.",
    color: "Cognac Brown",
    size: {
      width: 30,
      depth: 32,
      height: 34,
      unit: "inches"
    },
    quantity: 12,
    price: 899.99,
    image: "/images/chair6.jpg"
  },
  {
    id: "mc007",
    title: "Rattan Lounge Chair",
    description: "Handwoven rattan lounge chair with powder-coated steel frame. Brings natural texture and bohemian charm to indoor or covered outdoor spaces.",
    color: "Natural",
    size: {
      width: 28,
      depth: 30,
      height: 33,
      unit: "inches"
    },
    quantity: 20,
    price: 379.99,
    image: "/images/chair1.jpg"
  },
  {
    id: "mc008",
    title: "Bouclé Accent Chair",
    description: "Contemporary accent chair featuring soft bouclé fabric and curved silhouette. Foam-padded seat and backrest provide plush comfort with modern style.",
    color: "Cream",
    size: {
      width: 29,
      depth: 31,
      height: 32,
      unit: "inches"
    },
    quantity: 16,
    price: 649.99,
    image: "/images/chair2.jpg"
  }
];