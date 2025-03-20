export interface Product {
  id: string;
  name: string;
  price: number;
  image: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
}

export const productsBaby = [
  {
    id: "1",
    name: "Vestido largo estampado",
    price: 49.95,
    image: ["/public/image/baby2.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "2",
    name: "Vestido evento",
    price: 49.95,
    image: ["/public/image/baby3.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "3",
    name: "Ranita rayas",
    price: 49.95,
    image: ["/public/image/baby5.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "4",
    name: "Vestido largo estampado 2",
    price: 49.95,
    image: ["/public/image/baby2.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "5",
    name: "Vestido evento 2",
    price: 49.95,
    image: ["/public/image/baby3.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "6",
    name: "Ranita rayas 2",
    price: 49.95,
    image: ["/public/image/baby5.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
];
export const productsChildren = [
  {
    id: "1",
    name: "Vestido largo estampado",
    price: 49.95,
    image: ["/public/image/baby2.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "2",
    name: "Vestido evento",
    price: 49.95,
    image: ["/public/image/baby3.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "3",
    name: "Ranita rayas",
    price: 49.95,
    image: ["/public/image/baby5.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "4",
    name: "Vestido largo estampado 2",
    price: 49.95,
    image: ["/public/image/baby2.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "5",
    name: "Vestido evento 2",
    price: 49.95,
    image: ["/public/image/baby3.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
  {
    id: "6",
    name: "Ranita rayas 2",
    price: 49.95,
    image: ["/public/image/baby5.jpg"],
    colors: ["#000000", "#FFFFFF", "#A52A2A"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
  },
];

export const getProductById = (id: string) => {
  const allProducts = [
    ...productsBaby,
    ...productsChildren,
  ];
  return allProducts.find((product) => product.id === id);
};