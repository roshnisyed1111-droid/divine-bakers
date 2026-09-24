import { Category, Product, BranchLocation } from '../types/bakery';

import heroShowcaseImg from '../assets/images/divine_bakers_hero_showcase_1790272980156.jpg';
import floatingCakeSliceImg from '../assets/images/hero_floating_cake_slice_1790272993735.jpg';
import celebrationDessertStandImg from '../assets/images/celebration_dessert_stand_1790273004599.jpg';
import storefrontImg from '../assets/images/divine_bakers_storefront_1790273019882.jpg';
import cakesCelebrationCollectionImg from '../assets/images/cakes_celebration_collection_1790273031226.jpg';
import chocolateCakeImg from '../assets/images/product_chocolate_cake_1790273048451.jpg';
import milkyLadooImg from '../assets/images/product_milky_ladoo_1790273062384.jpg';
import freshPastriesImg from '../assets/images/product_fresh_pastries_1790273078200.jpg';
import bakeryBiscuitsImg from '../assets/images/product_bakery_biscuits_1790273092799.jpg';
import traditionalSweetsImg from '../assets/images/product_traditional_sweets_1790273106394.jpg';
import celebrationCakeImg from '../assets/images/product_celebration_cake_1790273117528.jpg';
import bakerySnacksImg from '../assets/images/product_bakery_snacks_1790273129583.jpg';
import giftBoxesImg from '../assets/images/product_gift_boxes_1790273142361.jpg';

export const BAKERY_IMAGES = {
  hero: heroShowcaseImg,
  heroFloatingCake: floatingCakeSliceImg,
  celebrationStand: celebrationDessertStandImg,
  storefront: storefrontImg,
  celebrationCollection: cakesCelebrationCollectionImg,
  chocolateCake: chocolateCakeImg,
  milkyLadoo: milkyLadooImg,
  freshPastries: freshPastriesImg,
  bakeryBiscuits: bakeryBiscuitsImg,
  traditionalSweets: traditionalSweetsImg,
  celebrationCake: celebrationCakeImg,
  bakerySnacks: bakerySnacksImg,
  giftBoxes: giftBoxesImg,
};

export const CONTACT_PHONE = '0311 1100569';
export const WHATSAPP_PHONE = '923111100569';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  'Assalam-o-alaikum Divine Bakers, I would like to inquire about your cakes and bakery items.'
)}`;

export const CATEGORIES: Category[] = [
  {
    id: 'cakes',
    name: 'Cakes',
    subtitle: 'Fresh cream, chocolate fudge & custom creations',
    image: chocolateCakeImg,
    itemCount: 'Daily Baked',
  },
  {
    id: 'sweets',
    name: 'Sweets',
    subtitle: 'Pure desi ghee traditional Pakistani mithai',
    image: traditionalSweetsImg,
    itemCount: 'Traditional Taste',
  },
  {
    id: 'pastries',
    name: 'Pastries',
    subtitle: 'Delicate fruit tarts, eclairs & cream slices',
    image: freshPastriesImg,
    itemCount: 'Handcrafted',
  },
  {
    id: 'biscuits',
    name: 'Biscuits & Cookies',
    subtitle: 'Almond nan khatai, zeera & butter cookies',
    image: bakeryBiscuitsImg,
    itemCount: 'Crisp & Fresh',
  },
  {
    id: 'bakery-items',
    name: 'Bakery Items',
    subtitle: 'Crisp flaky patties, savory breads & rolls',
    image: bakerySnacksImg,
    itemCount: 'Oven Warm',
  },
  {
    id: 'celebration-specials',
    name: 'Celebration Specials',
    subtitle: 'Custom tiers, gift boxes & party platters',
    image: giftBoxesImg,
    itemCount: 'Made to Order',
  },
];

export const SIGNATURE_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Chocolate Cake',
    category: 'cakes',
    shortDescription: 'Rich cocoa layers enveloped in silky dark chocolate ganache and chocolate shavings.',
    fullDescription: 'Our signature chocolate cake is baked fresh daily with pure dairy butter and premium cocoa. Finished with glossy ganache drip and rich chocolate curls, it is Lahore’s favorite centerpiece for birthdays and sweet milestones.',
    image: chocolateCakeImg,
    badge: 'Signature',
    serving: 'Available in 1.5 lbs, 2 lbs & 3 lbs',
  },
  {
    id: 'prod-2',
    name: 'Milky Ladoo',
    category: 'sweets',
    shortDescription: 'Velvety traditional milk sweets garnished with crushed pistachios and silver leaf.',
    fullDescription: 'Crafted with rich condensed milk, desi ghee, and fragrant green cardamom, our Milky Ladoos melt gently in the mouth. A beloved festive favorite for celebrations, weddings, and family gatherings.',
    image: milkyLadooImg,
    badge: 'House Special',
    serving: 'Sold by 0.5 kg & 1 kg boxes',
  },
  {
    id: 'prod-3',
    name: 'Fresh Pastries',
    category: 'pastries',
    shortDescription: 'Light vanilla sponge layered with whipped cream and fresh seasonal fruit coulis.',
    fullDescription: 'Indulgent, feather-light pastry slices crafted every morning. Choose between classic strawberry cream, Belgian chocolate, and vanilla hazelnut slices made with pure fresh cream.',
    image: freshPastriesImg,
    serving: 'Individual or Box of 6',
  },
  {
    id: 'prod-4',
    name: 'Biscuits',
    category: 'biscuits',
    shortDescription: 'Crisp golden almond cookies and roasted cumin zeera biscuits for tea time.',
    fullDescription: 'Traditional Lahore bakery biscuits, slow-baked to golden crisp perfection. From nutty almond delights to buttery salted cumin rings, each bite pairs wonderfully with evening chai.',
    image: bakeryBiscuitsImg,
    serving: 'Packaged in sealed freshness tins',
  },
  {
    id: 'prod-5',
    name: 'Traditional Sweets',
    category: 'sweets',
    shortDescription: 'Authentic warm gulab jamun, pistachio barfi, and cham cham prepared daily.',
    fullDescription: 'Prepared using time-tested recipes with pure khoya and real milk solids. Our traditional sweet selection honors authentic Pakistani celebrations with richness and balanced sweetness.',
    image: traditionalSweetsImg,
    badge: 'Festive Treat',
    serving: 'Assorted gift boxes available',
  },
  {
    id: 'prod-6',
    name: 'Celebration Cakes',
    category: 'cakes',
    shortDescription: 'Custom-designed celebration cakes tailored for birthdays, engagements, and anniversaries.',
    fullDescription: 'Make your happiness truly special. Our bakers craft multi-tiered and bespoke themed celebration cakes adorned with delicate buttercream florals, custom writing, and elegant toppings.',
    image: celebrationCakeImg,
    badge: 'Custom Order',
    serving: 'Custom weights from 2 lbs to 10+ lbs',
  },
  {
    id: 'prod-7',
    name: 'Bakery Snacks',
    category: 'snacks',
    shortDescription: 'Golden flaky chicken patties, warm sesame chicken bread, and savory vegetable rolls.',
    fullDescription: 'Fresh from our ovens throughout the day, our savory snacks feature light, buttery puff pastry packed with seasoned chicken and vegetables. The staple snack for Lahore high-teas.',
    image: bakerySnacksImg,
    serving: 'Served warm in-store or packed',
  },
  {
    id: 'prod-8',
    name: 'Gift Boxes',
    category: 'gifts',
    shortDescription: 'Luxurious burgundy and gold hampers packed with premium sweets and dry fruit biscuits.',
    fullDescription: 'Celebrate weddings, Eid, and joyful occasions with Divine Bakers signature burgundy gift boxes. Elegantly sealed with satin gold ribbons and packed with your choice of premium sweets.',
    image: giftBoxesImg,
    badge: 'Premium Packaging',
    serving: '1 kg, 2 kg & customized hampers',
  },
];

export const LOCATIONS: BranchLocation[] = [
  {
    id: 'pia-road',
    name: 'PIA ROAD',
    area: 'Johar Town / Wapda Town Vicinity',
    address: 'Main PIA Boulevard, Near Wapda Town Roundabout, Lahore',
    googleMapsUrl: 'https://maps.google.com/?q=Divine+Bakers+PIA+Road+Lahore',
    phone: CONTACT_PHONE,
    hours: '8:00 AM – 12:00 AM Daily',
  },
  {
    id: 'sabzazar',
    name: 'SABZAR ZIAAT CHOWK',
    area: 'Sabzazar Scheme',
    address: 'Ziaat Chowk, Main Boulevard, Sabzazar, Lahore',
    googleMapsUrl: 'https://maps.google.com/?q=Divine+Bakers+Sabzazar+Lahore',
    phone: CONTACT_PHONE,
    hours: '8:00 AM – 12:00 AM Daily',
  },
  {
    id: 'bahria-town',
    name: 'BAHRIA TOWN',
    area: 'Sector B / Tulip Block',
    address: 'Near Grand Jamia Mosque, Commercial Zone, Bahria Town, Lahore',
    googleMapsUrl: 'https://maps.google.com/?q=Divine+Bakers+Bahria+Town+Lahore',
    phone: CONTACT_PHONE,
    hours: '8:00 AM – 1:00 AM Daily',
  },
  {
    id: 'samanabad',
    name: 'SAMNABAD',
    area: 'Hazrat Sher Rabbani Road',
    address: 'Main Market, Samanabad Town, Lahore',
    googleMapsUrl: 'https://maps.google.com/?q=Divine+Bakers+Samanabad+Lahore',
    phone: CONTACT_PHONE,
    hours: '8:30 AM – 11:30 PM Daily',
  },
];
