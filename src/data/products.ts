import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  altImage: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  brand: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cashmere Crew Sweater",
    price: 245,
    category: "Women",
    image: product1,
    altImage: product1,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#F5F0E8" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    description: "Luxuriously soft cashmere crew neck sweater with ribbed trim. A timeless layering essential crafted from premium Mongolian cashmere.",
    brand: "MAISON",
  },
  {
    id: "2",
    name: "Tailored Wool Trousers",
    price: 320,
    category: "Men",
    image: product2,
    altImage: product2,
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Charcoal", hex: "#333" },
    ],
    description: "Impeccably tailored high-waisted trousers in Italian wool. Features a clean front pleat and tapered leg.",
    brand: "MAISON",
  },
  {
    id: "3",
    name: "Cotton Oxford Shirt",
    price: 165,
    category: "Men",
    image: product3,
    altImage: product3,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#fff" },
      { name: "Light Blue", hex: "#B8C9D9" },
    ],
    description: "Classic button-down oxford shirt in premium organic cotton. Relaxed fit with a softly curved hem.",
    brand: "MAISON",
  },
  {
    id: "4",
    name: "Silk V-Neck Blouse",
    price: 285,
    category: "Women",
    image: product4,
    altImage: product4,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Cream", hex: "#F5E6D0" },
      { name: "Blush", hex: "#E8C4B8" },
    ],
    description: "Elegant silk blouse with a flattering V-neckline and puff sleeves. Crafted from mulberry silk with mother-of-pearl buttons.",
    brand: "MAISON",
  },
  {
    id: "5",
    name: "Wool Overcoat",
    price: 580,
    category: "Men",
    image: product5,
    altImage: product5,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C4943A" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    description: "Statement overcoat in double-faced wool. Single-breasted silhouette with notch lapels and a relaxed fit.",
    brand: "MAISON",
  },
  {
    id: "6",
    name: "Knit Polo Shirt",
    price: 195,
    category: "Men",
    image: product6,
    altImage: product6,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Forest", hex: "#2D4A3E" },
    ],
    description: "Fine-gauge knit polo in premium mercerised cotton. Clean collar with two-button placket.",
    brand: "MAISON",
  },
];
