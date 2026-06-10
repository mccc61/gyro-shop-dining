export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  tag?: string;
};

export type MenuCategory = {
  name: string;
  description: string;
  image: string;
  items: MenuItem[];
};

const image = (path: string) => `/menu-images/${path.split("/").at(-1)}`;

export const menuCategories: MenuCategory[] = [
  {
    name: "Gyro Sandwiches",
    description: "Fresh halal gyro sandwiches served in warm pita.",
    image: image("2018/06/greek-gyro-with-fries-close-up-2026-03-25-00-56-26-utc-390x390.jpg"),
    items: [
      { name: "Regular Gyro", description: "Comes with lettuce, tomato, onion and tzatziki sauce.", price: "$11.99", image: image("2018/06/greek-gyro-with-fries-close-up-2026-03-25-00-56-26-utc-390x390.jpg"), tag: "Popular" },
      { name: "Chicken Gyro", description: "Comes with lettuce, tomato, onion and tzatziki sauce.", price: "$11.99", image: image("2018/06/tasty-fresh-wrap-sandwich-2026-01-09-00-41-19-utc-390x390.jpg") },
      { name: "Falafel Gyro", description: "Comes with lettuce, tomato, onion and tzatziki sauce.", price: "$9.99", image: image("2018/06/close-up-view-of-falafel-with-sauce-and-vegetables-2026-03-11-03-16-40-utc-390x390.jpg"), tag: "Vegetarian" },
    ],
  },
  {
    name: "Platters",
    description: "Generous platters served with salad, sauce, and pita bread.",
    image: image("2026/04/grilled-meat-with-fried-potatoes-and-vegetable-sal-2026-01-09-14-53-31-utc-390x390.jpg"),
    items: [
      { name: "Mix Platter", description: "Comes with a small tossed salad, meat, tzatziki sauce on the side, and pita bread.", price: "$14.99", image: image("2026/04/grilled-meat-with-fried-potatoes-and-vegetable-sal-2026-01-09-14-53-31-utc-390x390.jpg"), tag: "Popular" },
      { name: "Gyro Platter", description: "Comes with a small tossed salad, gyro meat, tzatziki sauce on the side, and pita bread.", price: "$14.99", image: image("2018/06/plate-of-kebab-vegetables-and-french-fries-2026-01-09-11-50-11-utc-390x390.jpg") },
      { name: "Chicken Platter", description: "Comes with a small tossed salad, chicken meat, tzatziki sauce on the side, and pita bread.", price: "$14.99", image: image("2018/06/greek-gyros-on-a-pita-bread-2026-03-16-01-26-16-utc-390x390.jpg") },
      { name: "Falafel Platter", description: "Comes with hummus, a small tossed salad, falafel, tzatziki sauce on the side, and pita bread.", price: "$12.99", image: image("2018/06/salad-with-hummus-falafel-and-vegetables-2026-03-25-05-02-25-utc-390x390.jpg"), tag: "Vegetarian" },
    ],
  },
  {
    name: "Combos",
    description: "Your favorite gyro served with fries and a drink.",
    image: image("2018/06/greek-gyro-pita-wrap-2026-03-20-03-12-19-utc-390x390.jpg"),
    items: [
      { name: "Regular Combo Gyro", description: "Regular gyro with fries and a drink.", price: "$14.99", image: image("2018/06/greek-gyro-pita-wrap-2026-03-20-03-12-19-utc-390x390.jpg") },
      { name: "Chicken Combo Gyro", description: "Chicken gyro with fries and a drink.", price: "$14.99", image: image("2018/06/closeup-of-kebab-with-fresh-vegetables-on-black-ba-2026-03-24-14-33-06-utc-390x390.jpg") },
      { name: "Falafel Combo Gyro", description: "Falafel gyro with fries and a drink.", price: "$13.99", image: image("2018/06/falafel-and-fresh-vegetables-in-pita-bread-2026-01-06-09-16-27-utc-390x390.jpg"), tag: "Vegetarian" },
    ],
  },
  {
    name: "Kids Menu",
    description: "A kid-sized meal with a drink included.",
    image: image("2018/06/greek-gyro-pita-wrap-2026-03-20-03-12-19-utc-390x390.jpg"),
    items: [
      { name: "Popcorn Chicken", description: "Six pieces of popcorn chicken with fries and a small drink.", price: "$6.99", image: "/popcorn-chicken-kids-meal.webp" },
    ],
  },
  {
    name: "Salads",
    description: "Fresh salads with Greek dressing and optional add-ons.",
    image: image("2018/09/miditerranean-vegetable-salad-2026-03-09-06-52-48-utc-390x390.jpg"),
    items: [
      { name: "Greek Salad", description: "Lettuce, tomato, onion, stuffed grape leaves, olives, feta cheese, and Greek dressing. Add any meat for $3.99.", price: "$8.99", image: image("2018/09/miditerranean-vegetable-salad-2026-03-09-06-52-48-utc-390x390.jpg") },
      { name: "Tossed Salad", description: "Lettuce, tomato, onion, and Greek dressing. Add any meat for $3.99 or feta for $1.99.", price: "$5.99" },
      { name: "Chicken Salad", description: "Lettuce, tomato, onion, Greek dressing, and chicken. Add feta for $1.99.", price: "$9.99", image: image("2018/06/salad-with-chicken-vegetables-and-crouton-2026-01-11-08-15-24-utc-390x390.jpg") },
    ],
  },
  {
    name: "Desserts",
    description: "A sweet finish to your meal.",
    image: image("2018/06/traditional-turkish-desserts-various-delicious-de-2026-03-24-23-50-27-utc-390x390.jpg"),
    items: [
      { name: "Baklava - 4 Pcs", description: "Crispy layers of buttery filo pastry filled with premium pistachios and finished with sweet syrup.", price: "$6.99", image: image("2018/06/traditional-turkish-desserts-various-delicious-de-2026-03-24-23-50-27-utc-390x390.jpg") },
      { name: "Rice Pudding", description: "Creamy house-made rice pudding, slow-cooked until silky smooth and topped with crushed pistachios.", price: "$3.99", image: image("2018/06/traditional-turkish-dessert-sutlac-rice-pudding-2026-01-07-00-15-21-utc-390x390.jpg") },
      { name: "Tiramisu", description: "Classic Italian tiramisu with espresso-soaked ladyfingers, velvety mascarpone cream, and cocoa dusting.", price: "$7.99", image: image("2018/06/TIRAMISU-25-WEB-01-768x1024-1-390x390.jpg") },
    ],
  },
  {
    name: "Side Orders",
    description: "Add something extra to your order.",
    image: image("2018/06/salad-with-hummus-falafel-and-vegetables-2026-03-25-05-02-25-utc-390x390.jpg"),
    items: [
      { name: "Regular Gyro Meat", description: "An extra serving of regular gyro meat.", price: "$5.99" },
      { name: "Chicken Gyro Meat", description: "An extra serving of chicken gyro meat.", price: "$5.99" },
      { name: "Grape Leaves - 5 Pcs", description: "Five stuffed grape leaves.", price: "$3.99" },
      { name: "Falafel - 5 Pcs", description: "Five crispy falafel pieces.", price: "$4.99" },
      { name: "French Fries", description: "Crispy golden french fries.", price: "$2.99" },
      { name: "Cheese Fries", description: "Crispy french fries topped with cheese.", price: "$3.99" },
    ],
  },
  {
    name: "Drinks",
    description: "Cold drinks to complete your meal.",
    image: image("2018/06/WhatsApp-Image-2026-04-13-at-11.37.59-PM-e1776112929998-370x208.jpeg"),
    items: [
      { name: "Fountain Drinks", description: "Your choice of fountain beverage.", price: "$1.99" },
      { name: "Soda Can", description: "Chilled canned soda.", price: "$1.99" },
      { name: "Lemonade", description: "Cold refreshing lemonade.", price: "$2.49" },
      { name: "Fruit Punch", description: "Cold refreshing fruit punch.", price: "$2.49" },
      { name: "Bottled Water", description: "Chilled bottled water.", price: "$1.99" },
      { name: "Yogurt Drink", description: "Traditional chilled yogurt drink.", price: "$3.49" },
    ],
  },
];

export const houseFavorites = [
  {
    name: "Gyro Sandwiches",
    category: "Gyro Sandwiches",
    href: "/menu#gyro-sandwiches",
    image: image("2018/06/greek-gyro-with-fries-close-up-2026-03-25-00-56-26-utc-390x390.jpg"),
    featured: true,
  },
  {
    name: "Gyro Platter",
    category: "Platters",
    href: "/menu#platters",
    image: image("2018/06/plate-of-kebab-vegetables-and-french-fries-2026-01-09-11-50-11-utc-390x390.jpg"),
  },
  {
    name: "Falafel Gyro",
    category: "Gyro Sandwiches",
    href: "/menu#gyro-sandwiches",
    image: image("2018/06/close-up-view-of-falafel-with-sauce-and-vegetables-2026-03-11-03-16-40-utc-390x390.jpg"),
  },
  {
    name: "Chicken Gyro",
    category: "Gyro Sandwiches",
    href: "/menu#gyro-sandwiches",
    image: image("2018/06/tasty-fresh-wrap-sandwich-2026-01-09-00-41-19-utc-390x390.jpg"),
  },
  {
    name: "Regular Gyro",
    category: "Gyro Sandwiches",
    href: "/menu#gyro-sandwiches",
    image: image("2018/06/greek-gyro-with-fries-close-up-2026-03-25-00-56-26-utc-390x390.jpg"),
  },
  {
    name: "Mix Platter",
    category: "Platters",
    href: "/menu#platters",
    image: image("2026/04/grilled-meat-with-fried-potatoes-and-vegetable-sal-2026-01-09-14-53-31-utc-390x390.jpg"),
  },
];
