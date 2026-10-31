export type Step = 
  | 'welcome' 
  | 'calculation' 
  | 'selection' 
  | 'customize' 
  | 'presentation' 
  | 'certificate' 
  | 'thankyou';

export type FoodType = 'cake' | 'ramen';

export interface UserProfile {
  name: string;
  birthMonth: string;
  birthDay: number;
}

// Cake Customization Types (One Piece World)
export type CakeBase = 'circle' | 'square' | 'heart';

export type CakeTopping = 
  | 'chocolate-cream' 
  | 'vanilla-cream' 
  | 'fruit-slices' 
  | 'chocolate-chips' 
  | 'blueberry-jam' 
  | 'cream-cheese' 
  | 'whipped-cream' 
  | 'sprinkles';

export interface CakeState {
  base: CakeBase;
  toppings: CakeTopping[];
}

// Ramen Customization Types (Naruto World)
export type RamenBowl = 'blue' | 'red' | 'persian-blue-flower';
export type RamenNoodles = 'thin' | 'thick' | 'wavy';
export type RamenBroth = 'tonkotsu' | 'miso';
export type RamenChopsticks = 'wooden' | 'stainless';

export type RamenTopping = 
  | 'seaweed' 
  | 'boiled-egg' 
  | 'sunny-egg' 
  | 'chashu' 
  | 'naruto' 
  | 'gyoza' 
  | 'spring-onion' 
  | 'garlic' 
  | 'spicy-powder' 
  | 'radish' 
  | 'cheese';

export interface RamenState {
  bowl: RamenBowl;
  noodles: RamenNoodles;
  broth: RamenBroth;
  toppings: RamenTopping[];
  chopsticks: RamenChopsticks;
}

// Dialogue & Character System
export interface CharacterMessage {
  id: string;
  speaker: string;
  anime: 'one-piece' | 'naruto';
  avatarBg: string;
  dialogue: string;
  japaneseText?: string;
  subtext?: string;
  mood?: 'happy' | 'excited' | 'hungry' | 'wise' | 'proud';
}

