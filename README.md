# 🐐 BE THE GOAT OF NOMM'S (COOKING)

> **"CREATE. CUSTOMIZE. NOMM."**  
> *Created with ♡ by **Tripti D Goat (nomnom)***

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/SrishtiYadav1904/be-the-goat-of-nomms)

Welcome to **BE THE GOAT OF NOMM'S (COOKING)** — a production-ready, anime-inspired interactive cooking adventure! Combining the charm of a cozy Japanese café, a cute interactive sticker book, anime crossovers (One Piece & Naruto), and personalized chef certification.

---

## 🌟 Key Features

### 1. 🐐 Brand Identity & Aesthetic
- Handcrafted pastel palette: **Pastel Pink**, **Cream**, **Butter Yellow**, **Baby Blue**, **Soft Lavender**, and **Warm White**.
- Original SVG illustrations: Animated cute goat chef mascot, sticker badges, pastry stands, bowls, and toppings with drop-shadow sticker borders.
- Playful typography featuring **Fredoka**, **Quicksand**, and handwritten **Caveat** font accents.

### 2. 🎵 Persistent Background Music – Binks' Sake
- Mounted persistently at the application level; continues across all pages without restarting.
- **Floating Music Player**: Play/Pause, Mute/Unmute, and Volume Slider (default **20%**).
- **Graceful Audio Fallback**: Web Audio API synthesizer automatically plays an ambient music-box melody of *Binks' Sake* if `public/audio/binks-sake.mp3` is not present, ensuring a cozy atmosphere right out of the box.

### 3. 🎂 Journey 1: Cake Customization (One Piece World 🏴‍☠️)
- **Sanji** is the main cake presenter!
- **Base Options**: Circle Base, Square Base, and Heart Base.
- **8 Illustrated Toppings**: Chocolate Cream, Vanilla Cream, Fruit Slices, Chocolate Chips, Blueberry Jam, Cream Cheese, Whipped Cream, Sprinkles.
- **Straw Hat Easter Eggs**: Tap Luffy's Straw Hat, Chopper's Pink Hat, Sanji's Utensils, or Big Mom's Candy for character reactions.
- Full Undo, Reset, and individual topping removal directly on the cake preview or topping rack.

### 4. 🍜 Journey 2: Ramen Customization (Naruto World 🍜)
- **Naruto Uzumaki** is the main ramen presenter!
- **Bowls**: Blue Waves Bowl, Red Dragon Bowl, and the **White Bowl with Persian Blue Flowers around the border**.
- **Noodles**: Thin Hakata Noodles, Thick Chewy Noodles, and Wavy Curly Noodles.
- **Broths**: Tonkotsu Broth and Miso Broth (cute tetra-pack cartons).
- **11 Toppings**: Crispy Seaweed, Molten Boiled Egg, Sunny Side Up Egg, Chashu Pork slices, Narutomaki Fish Cakes, Crispy Gyozas, Spring Onions, Minced Garlic, Spicy Togarashi Powder, Pickled Radish, and Melted Cheese.
- **Chopsticks**: Wooden Bamboo or Stainless Steel beside the bowl.
- **Konoha Easter Eggs**: Tap the Ichiraku sign, Hidden Leaf symbol, or Kakashi's mask for dialogues.

### 5. 📜 Personalized Chef Certificate (PNG & PDF Export)
- Beautiful commemorative diploma with ornate borders, completion date, user's birthday, and the **GOAT Official Seal**.
- Displays the **actual customized cake or ramen** created by the user.
- Export as crisp **High-Resolution PNG** (via `html-to-image`) or printable **PDF** (via `jspdf`).
- Official credit: *"Website created by Tripti D Goat (nomnom)"*.

### 6. 💖 Final Thank-You Screen
- Warm closing screen with floating hearts, goat animations, dish recap, and a **"Play Again! ✨"** restart button.
- Official signature: *"Created with love by Tripti D Goat (nomnom) ♡"*.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### Running Locally in Development Mode
Start the Vite development server:
```bash
npm run dev
```
Open your browser to the local URL displayed in the terminal (usually `http://localhost:5173/`).

### Production Build & Preview
To create an optimized production build:
```bash
npm run build
```
To test the production build locally:
```bash
npm run preview
```

---

## 🎶 Adding Custom Audio (Binks' Sake MP3)

The project includes an automatic Web Audio synthesizer fallback for *Binks' Sake*. To use an authentic recorded MP3 track:
1. Place your legally obtained MP3 file in:
   ```
   public/audio/binks-sake.mp3
   ```
2. The application will automatically detect and loop this audio file on playback.

---

## 📁 Project Architecture

```
├── public/
│   ├── audio/
│   │   ├── README.txt
│   │   └── binks-sake.mp3 (Optional user audio)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── cake/
│   │   │   ├── CakeCustomizer.tsx
│   │   │   └── CakePreview.tsx
│   │   ├── ramen/
│   │   │   ├── RamenCustomizer.tsx
│   │   │   └── RamenPreview.tsx
│   │   ├── stickers/
│   │   │   └── FoodStickers.tsx
│   │   ├── AboutModal.tsx
│   │   ├── AudioPlayer.tsx
│   │   ├── CharacterDialogueBox.tsx
│   │   ├── CuteGoatChef.tsx
│   │   └── Navbar.tsx
│   ├── context/
│   │   ├── AudioContext.tsx
│   │   └── GameContext.tsx
│   ├── pages/
│   │   ├── WelcomePage.tsx
│   │   ├── CalculationPage.tsx
│   │   ├── FoodSelectionPage.tsx
│   │   ├── FoodPresentationPage.tsx
│   │   ├── ChefCertificatePage.tsx
│   │   └── ThankYouPage.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js / @tailwindcss/vite
└── vite.config.ts
```

---

## 💖 Official Creator Credits

- **Website Creator**: `Tripti D Goat (nomnom)`
- **Project**: `BE THE GOAT OF NOMM'S (COOKING)`
- **Tagline**: `"CREATE. CUSTOMIZE. NOMM."`
- **Concept**: An anime-inspired interactive cooking adventure.
- **Made with**: ♡, creativity, and lots of NOMM!
