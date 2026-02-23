
import { MenuItem, Restaurant } from './types';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'KMS Hakkim',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Biryani, Non-Veg',
    rating: 4.8,
    location: 'Samayapuram Trichy'
  },
  {
    id: 'r2',
    name: 'Gowri Parvathy Bhavan',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Pure Veg, South Indian',
    rating: 4.5,
    location: 'Samayapuram Trichy'
  },
  {
    id: 'r3',
    name: 'Sri Kamatchi Bhavan',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Tiffin, Fast Food',
    rating: 4.6,
    location: 'Samayapuram Trichy'
  }
];

const KMS_ITEMS = [
  {
    name: 'Chicken Biryani',
    price: 220,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Aromatic Seeraga Samba biryani with tender chicken pieces and raita.'
  },
  {
    name: 'Mutton Biryani',
    price: 320,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Traditional style mutton biryani cooked with exotic spices.'
  },
  {
    name: 'Chicken 65',
    price: 180,
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Spicy deep-fried chicken chunks marinated with curry leaves.'
  },
  {
    name: 'Grill Chicken (Half)',
    price: 240,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Juicy grilled chicken served with mayonnaise and mint chutney.'
  },
  {
    name: 'Egg Parotta',
    price: 80,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Minced parotta stir-fried with eggs, onions, and salna.'
  },
  {
    name: 'Mutton Chukka',
    price: 280,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Spicy dry roasted mutton chunks.'
  }
];

const GPB_ITEMS = [
  {
    name: 'Mini Tiffin',
    price: 110,
    image: 'https://images.unsplash.com/photo-1630406144797-021de6761273?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Idly, Vada, Mini Masala Dosa, Pongal, and Sweet.'
  },
  {
    name: 'Ghee Roast',
    price: 90,
    image: 'https://images.unsplash.com/photo-1668236543090-47eba5cb6acf?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Crispy cone dosa roasted in pure ghee.'
  },
  {
    name: 'Paneer Butter Masala',
    price: 180,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Cottage cheese cubes in rich creamy tomato gravy.'
  },
  {
    name: 'Veg Meals',
    price: 140,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Traditional South Indian meals with rice, sambar, rasam, and poriyal.'
  },
  {
    name: 'Mushroom Biryani',
    price: 160,
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Flavorful rice cooked with fresh mushrooms.'
  },
  {
    name: 'Filter Coffee',
    price: 30,
    image: 'https://images.unsplash.com/photo-1544787210-2213d242637b?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Authentic South Indian filter coffee.'
  }
];

const SKB_ITEMS = [
  {
    name: 'Idly (2 pcs)',
    price: 30,
    image: 'https://images.unsplash.com/photo-1662116765994-1e007238914d?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Soft steamed rice cakes served with chutneys.'
  },
  {
    name: 'Poori Masala',
    price: 60,
    image: 'https://images.unsplash.com/photo-1664188616788-297eb65e8841?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Deep fried wheat bread served with potato masala.'
  },
  {
    name: 'Onion Uthappam',
    price: 70,
    image: 'https://images.unsplash.com/photo-1630384060421-a431e4c25927?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Thick dosa pancake topped with chopped onions.'
  },
  {
    name: 'Chola Poori',
    price: 90,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Large fluffy fried bread served with chana masala.'
  },
  {
    name: 'Veg Fried Rice',
    price: 110,
    image: 'https://images.unsplash.com/photo-1603133872878-684f57143b34?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Indo-Chinese style fried rice with vegetables.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  ...KMS_ITEMS.map((item, index) => ({ ...item, id: `r1_m${index + 1}`, restaurantId: 'r1' })),
  ...GPB_ITEMS.map((item, index) => ({ ...item, id: `r2_m${index + 1}`, restaurantId: 'r2' })),
  ...SKB_ITEMS.map((item, index) => ({ ...item, id: `r3_m${index + 1}`, restaurantId: 'r3' })),
];
