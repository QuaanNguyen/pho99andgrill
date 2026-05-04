export type MenuTag = "Spicy" | "Vegetarian" | "Popular";

export type MenuCategoryId =
  | "noodle-soups"
  | "vermicelli"
  | "banh-mi"
  | "bo-ne"
  | "appetizers"
  | "salads"
  | "broken-rice"
  | "extras"
  | "drinks";

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  vietnamese: string;
};

export type MenuItem = {
  code: string;
  english: string;
  vietnamese: string;
  description?: string;
  price: number;
  category: MenuCategoryId;
  tags?: MenuTag[];
  image: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "noodle-soups", label: "Noodle Soups", vietnamese: "Bún Nước" },
  { id: "vermicelli", label: "Vermicelli", vietnamese: "Bún Khô" },
  { id: "banh-mi", label: "Bánh Mì", vietnamese: "Vietnamese Sandwich" },
  { id: "bo-ne", label: "Bò Né", vietnamese: "Sizzling Beef Tenderloin" },
  { id: "appetizers", label: "Appetizers", vietnamese: "Khai Vị" },
  { id: "salads", label: "Salads", vietnamese: "Món Gỏi" },
  { id: "broken-rice", label: "Broken Rice", vietnamese: "Cơm Tấm" },
  { id: "extras", label: "Extras", vietnamese: "Đồ Thêm" },
  { id: "drinks", label: "Drinks", vietnamese: "Đồ Uống" },
];

// Curated Unsplash food photos that loosely match Vietnamese / Asian cuisine.
// Each item gets one assigned in MENU_ITEMS below; rotation keeps category pages
// from looking like a single tile repeated nine times.
const IMG = {
  pho: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=900&q=80",
  brothBowl:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  noodles:
    "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=80",
  vermicelli:
    "https://images.unsplash.com/photo-1623689043725-b187dfff3a36?auto=format&fit=crop&w=900&q=80",
  banhMi:
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
  grill:
    "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=900&q=80",
  rolls:
    "https://images.unsplash.com/photo-1606474576-19ae6a2cffa1?auto=format&fit=crop&w=900&q=80",
  wings:
    "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=80",
  salad:
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  rice: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
  porkChop:
    "https://images.unsplash.com/photo-1604908554007-9a96d9619a1c?auto=format&fit=crop&w=900&q=80",
  egg: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
  coffee:
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
  milkTea:
    "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=900&q=80",
  herbalTea:
    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80",
} as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    code: "N1",
    english: "Vietnamese Spicy Beef Noodle Soup",
    vietnamese: "Bún Bò Huế",
    description:
      "Traditional Vietnamese spicy beef noodle soup with lemongrass broth, tender beef, pork, and thick rice noodles.",
    price: 14.99,
    category: "noodle-soups",
    tags: ["Spicy", "Popular"],
    image: IMG.pho,
  },
  {
    code: "N2",
    english: "Vietnamese Crab & Tomato Noodle Soup",
    vietnamese: "Bún Riêu Cua",
    description:
      "Savory tomato-based broth with pork, crab paste, tofu, and pork blood cubes, served with rice noodles.",
    price: 13.99,
    category: "noodle-soups",
    image: IMG.brothBowl,
  },
  {
    code: "N3",
    english: "Beef Stew Noodle Soup",
    vietnamese: "Mì Bò Kho",
    description:
      "Slow-braised beef stew with carrots, lemongrass, garlic, and Vietnamese spices in a savory broth, served with egg noodles.",
    price: 13.99,
    category: "noodle-soups",
    image: IMG.noodles,
  },
  {
    code: "N4",
    english: "Beef Stew with Vietnamese Sandwich",
    vietnamese: "Bánh Mì Bò Kho",
    description:
      "Slow-braised beef stew with carrots, lemongrass, garlic, and Vietnamese spices in a savory broth, served with crispy Vietnamese sandwich.",
    price: 13.99,
    category: "noodle-soups",
    image: IMG.banhMi,
  },

  {
    code: "K1",
    english: "Grilled Pork Vermicelli",
    vietnamese: "Bún Thịt Nướng",
    description:
      "Light and refreshing rice vermicelli with grilled pork and house fish sauce.",
    price: 12.99,
    category: "vermicelli",
    image: IMG.vermicelli,
  },
  {
    code: "K2",
    english: "Grilled Pork & Egg Rolls Vermicelli",
    vietnamese: "Bún Thịt Nướng Chả Giò",
    description:
      "Rice vermicelli with grilled pork, crispy egg rolls, and house fish sauce.",
    price: 13.99,
    category: "vermicelli",
    image: IMG.vermicelli,
  },
  {
    code: "K3",
    english: "Egg Rolls Vermicelli",
    vietnamese: "Bún Chả Giò",
    description: "Rice vermicelli with crispy egg rolls and house fish sauce.",
    price: 12.99,
    category: "vermicelli",
    image: IMG.rolls,
  },
  {
    code: "K4",
    english: "Grilled Chicken Vermicelli",
    vietnamese: "Bún Gà Nướng",
    description:
      "Light rice vermicelli with grilled chicken and house fish sauce.",
    price: 12.99,
    category: "vermicelli",
    image: IMG.vermicelli,
  },
  {
    code: "K5",
    english: "Tofu Vermicelli with Soy Sauce",
    vietnamese: "Bún Đậu Hủ Nước Tương (Chay)",
    description:
      "Light rice vermicelli with tofu, fresh herbs, and our signature soy sauce.",
    price: 11.99,
    category: "vermicelli",
    tags: ["Vegetarian"],
    image: IMG.salad,
  },

  {
    code: "B1",
    english: "Combination of Vietnamese Cold Cuts & Pâté",
    vietnamese: "Bánh Mì Đặc Biệt",
    description:
      "Served with pickled carrots & daikon, cucumber, cilantro, jalapeño, and house butter.",
    price: 6.99,
    category: "banh-mi",
    tags: ["Popular"],
    image: IMG.banhMi,
  },
  {
    code: "B2",
    english: "Grilled Pork Sandwich",
    vietnamese: "Bánh Mì Thịt Nướng",
    description:
      "Served with pickled carrots & daikon, cucumber, cilantro, jalapeño, and house butter.",
    price: 6.99,
    category: "banh-mi",
    image: IMG.banhMi,
  },
  {
    code: "B3",
    english: "Shredded Chicken Sandwich",
    vietnamese: "Bánh Mì Gà Xé",
    description:
      "Served with pickled carrots & daikon, cucumber, cilantro, jalapeño, and house butter.",
    price: 6.99,
    category: "banh-mi",
    image: IMG.banhMi,
  },
  {
    code: "B4",
    english: "Grilled Chicken Sandwich",
    vietnamese: "Bánh Mì Gà Nướng",
    description:
      "Served with pickled carrots & daikon, cucumber, cilantro, jalapeño, and house butter.",
    price: 6.99,
    category: "banh-mi",
    image: IMG.banhMi,
  },
  {
    code: "B5",
    english: "Shredded Pork Skin Sandwich",
    vietnamese: "Bánh Mì Bì Thịt",
    description:
      "Served with pickled carrots & daikon, cucumber, cilantro, jalapeño, and house butter.",
    price: 6.99,
    category: "banh-mi",
    image: IMG.banhMi,
  },
  {
    code: "B6",
    english: "Fried Eggs Sandwich",
    vietnamese: "Bánh Mì Trứng",
    description:
      "Served with pickled carrots & daikon, cucumber, cilantro, jalapeño, and house butter.",
    price: 5.99,
    category: "banh-mi",
    image: IMG.egg,
  },

  {
    code: "S1",
    english: "Special Sizzling Beef Tenderloin",
    vietnamese: "Bò Né Đặc Biệt",
    description:
      "Sizzling beef served with salad, tomatoes, pâté, eggs, Vietnamese sausage, French fries, and Vietnamese sandwich.",
    price: 17.99,
    category: "bo-ne",
    tags: ["Popular"],
    image: IMG.grill,
  },
  {
    code: "S2",
    english: "Sizzling Beef Tenderloin",
    vietnamese: "Bò Né",
    description:
      "Sizzling beef served with salad, tomatoes, pâté, eggs, and Vietnamese sandwich.",
    price: 15.99,
    category: "bo-ne",
    image: IMG.grill,
  },

  {
    code: "A1",
    english: "Egg Rolls",
    vietnamese: "Chả Giò",
    description:
      "Ground pork, silver noodles, carrot served with sweet-sour sauce or fish sauce.",
    price: 4.99,
    category: "appetizers",
    image: IMG.rolls,
  },
  {
    code: "A2",
    english: "Spring Rolls",
    vietnamese: "Gỏi Cuốn",
    description:
      "Pork, shrimp, vermicelli, lettuce, mint served with peanut sauce.",
    price: 4.99,
    category: "appetizers",
    image: IMG.rolls,
  },
  {
    code: "A3",
    english: "Grilled Pork Rolls",
    vietnamese: "Gỏi Cuốn Thịt Nướng",
    description:
      "Grilled pork, vermicelli, mints, lettuce served with peanut sauce.",
    price: 4.99,
    category: "appetizers",
    image: IMG.rolls,
  },
  {
    code: "A4",
    english: "Dumplings (Steamed / Fried)",
    vietnamese: "Há Cảo Hấp / Chiên",
    description:
      "Dumplings packed with ground pork, shrimp, vegetables served with soy sauce.",
    price: 4.99,
    category: "appetizers",
    image: IMG.rolls,
  },
  {
    code: "A5",
    english: "Fried Chicken Wings",
    vietnamese: "Cánh Gà Chiên Nước Mắm",
    description: "Deep-fried chicken wings with sweet fish sauce.",
    price: 12.99,
    category: "appetizers",
    image: IMG.wings,
  },
  {
    code: "A6",
    english: "Flushing Fat Chicken Wings",
    vietnamese: "Gà Xối Mỡ Xôi Chiên",
    description:
      "Deep-fried chicken wings with fish sauce served with crispy sticky rice.",
    price: 14.99,
    category: "appetizers",
    image: IMG.wings,
  },
  {
    code: "A7",
    english: "Pan-Fried Rice Flour Cake",
    vietnamese: "Bột Chiên",
    description:
      "Pan-fried rice flour cake, eggs, radish served with sweet soy sauce.",
    price: 11.99,
    category: "appetizers",
    image: IMG.egg,
  },

  {
    code: "A8",
    english: "Shrimp & Pork Lotus Root Salad",
    vietnamese: "Gỏi Ngó Sen Tôm Thịt",
    description:
      "Shrimp and sliced pork tossed with lotus root, herbs, Vietnamese coriander, and house fish sauce dressing.",
    price: 12.99,
    category: "salads",
    image: IMG.salad,
  },
  {
    code: "A9",
    english: "Chicken & Cabbage Salad",
    vietnamese: "Gỏi Gà Trộn Bắp Cải",
    description:
      "Shredded chicken mixed with cabbage, herbs, Vietnamese coriander and house fish sauce dressing.",
    price: 9.99,
    category: "salads",
    image: IMG.salad,
  },

  {
    code: "C1",
    english: "House Special Broken Rice",
    vietnamese: "Cơm Tấm Đặc Biệt",
    description:
      "Broken rice with grilled pork chop, shredded pork skin, egg meatloaf, egg, Vietnamese sausage and house fish sauce.",
    price: 15.99,
    category: "broken-rice",
    tags: ["Popular"],
    image: IMG.porkChop,
  },
  {
    code: "C2",
    english: "Broken Rice with Grilled Pork Chop",
    vietnamese: "Cơm Tấm Sườn",
    description:
      "Broken rice with marinated grilled pork chop and house fish sauce.",
    price: 12.99,
    category: "broken-rice",
    image: IMG.porkChop,
  },
  {
    code: "C3",
    english:
      "Broken Rice with Grilled Pork Chop, Shredded Pork Skin & Egg Meatloaf",
    vietnamese: "Cơm Tấm Sườn Bì Chả",
    description:
      "Broken rice with grilled pork chop, shredded pork skin, egg meatloaf, and house fish sauce.",
    price: 14.99,
    category: "broken-rice",
    image: IMG.porkChop,
  },
  {
    code: "C4",
    english: "Special Grilled Pork Broken Rice",
    vietnamese: "Cơm Tấm Thịt Nướng Đặc Biệt",
    description:
      "Broken rice with marinated grilled pork, shredded pork skin, egg meatloaf, egg, Vietnamese sausage and house fish sauce.",
    price: 15.99,
    category: "broken-rice",
    image: IMG.rice,
  },
  {
    code: "C5",
    english:
      "Broken Rice with Grilled Pork, Shredded Pork Skin & Egg Meatloaf",
    vietnamese: "Cơm Tấm Thịt Nướng Bì Chả",
    description:
      "Broken rice with grilled pork, shredded pork skin, egg meatloaf, and house fish sauce.",
    price: 14.99,
    category: "broken-rice",
    image: IMG.rice,
  },
  {
    code: "C6",
    english: "Broken Rice with Marinated Grilled Chicken",
    vietnamese: "Cơm Tấm Gà Nướng",
    description: "Broken rice with marinated grilled chicken and house fish sauce.",
    price: 12.99,
    category: "broken-rice",
    image: IMG.rice,
  },

  {
    code: "X1",
    english: "Fried Egg",
    vietnamese: "Trứng Chiên",
    price: 1.0,
    category: "extras",
    image: IMG.egg,
  },
  {
    code: "X2",
    english: "Egg Meatloaf",
    vietnamese: "Chả Trứng",
    price: 2.5,
    category: "extras",
    image: IMG.egg,
  },
  {
    code: "X3",
    english: "Vietnamese Sausage",
    vietnamese: "Lạp Xưởng",
    price: 2.5,
    category: "extras",
    image: IMG.grill,
  },
  {
    code: "X4",
    english: "Bowl of Rice",
    vietnamese: "Chén Cơm",
    price: 1.5,
    category: "extras",
    image: IMG.rice,
  },
  {
    code: "X5",
    english: "Bowl of Noodles",
    vietnamese: "Chén Mì / Bún",
    price: 1.5,
    category: "extras",
    image: IMG.noodles,
  },
  {
    code: "X6",
    english: "Vietnamese Sandwich",
    vietnamese: "Bánh Mì",
    price: 1.5,
    category: "extras",
    image: IMG.banhMi,
  },
  {
    code: "X7",
    english: "Korean BBQ Short Rib",
    vietnamese: "Sườn Bò Đại Hàn",
    price: 6.0,
    category: "extras",
    image: IMG.grill,
  },
  {
    code: "X8",
    english: "Grilled Pork / Pork Chop",
    vietnamese: "Sườn Nướng / Thịt Nướng",
    price: 1.5,
    category: "extras",
    image: IMG.porkChop,
  },
  {
    code: "X9",
    english: "Rare Beef / Brisket / Fatty Brisket",
    vietnamese: "Tái / Nạm / Gầu",
    price: 5.0,
    category: "extras",
    image: IMG.grill,
  },
  {
    code: "X10",
    english: "Tendon / Tripe / Meatballs",
    vietnamese: "Gân / Sách / Bò Viên",
    price: 4.0,
    category: "extras",
    image: IMG.brothBowl,
  },

  {
    code: "U1",
    english: "Soda",
    vietnamese: "Nước Ngọt",
    price: 1.99,
    category: "drinks",
    image: IMG.milkTea,
  },
  {
    code: "U2",
    english: "Iced Tea",
    vietnamese: "Trà Đá",
    price: 1.99,
    category: "drinks",
    image: IMG.herbalTea,
  },
  {
    code: "U3",
    english: "Vietnamese Iced Black Coffee",
    vietnamese: "Cà Phê Đen Đá",
    price: 4.99,
    category: "drinks",
    image: IMG.coffee,
  },
  {
    code: "U4",
    english: "Vietnamese Iced Coffee with Condensed Milk",
    vietnamese: "Cà Phê Sữa Đá",
    price: 4.99,
    category: "drinks",
    tags: ["Popular"],
    image: IMG.coffee,
  },
  {
    code: "U5",
    english: "Thai Iced Milk Tea",
    vietnamese: "Trà Sữa Thái",
    price: 4.99,
    category: "drinks",
    image: IMG.milkTea,
  },
  {
    code: "U6",
    english: "Vietnamese Herbal Dessert Soup",
    vietnamese: "Chè Sâm Bổ Lượng",
    price: 5.99,
    category: "drinks",
    image: IMG.herbalTea,
  },
  {
    code: "U7",
    english: "Vietnamese Herbal Drink",
    vietnamese: "Nước Mát",
    price: 4.99,
    category: "drinks",
    image: IMG.herbalTea,
  },
];

export function normalizeForSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}
