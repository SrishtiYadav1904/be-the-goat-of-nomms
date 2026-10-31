import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  Step,
  FoodType,
  UserProfile,
  CakeState,
  CakeBase,
  CakeTopping,
  RamenState,
  RamenBowl,
  RamenNoodles,
  RamenBroth,
  RamenTopping,
  RamenChopsticks,
  CharacterMessage
} from '../types';

interface GameContextType {
  step: Step;
  setStep: (step: Step) => void;
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  foodType: FoodType | null;
  setFoodType: (food: FoodType | null) => void;

  // Cake
  cakeState: CakeState;
  setCakeBase: (base: CakeBase) => void;
  toggleCakeTopping: (topping: CakeTopping) => void;
  removeCakeTopping: (topping: CakeTopping) => void;
  undoCake: () => void;
  resetCake: () => void;
  canUndoCake: boolean;

  // Ramen
  ramenState: RamenState;
  setRamenBowl: (bowl: RamenBowl) => void;
  setRamenNoodles: (noodles: RamenNoodles) => void;
  setRamenBroth: (broth: RamenBroth) => void;
  toggleRamenTopping: (topping: RamenTopping) => void;
  removeRamenTopping: (topping: RamenTopping) => void;
  setRamenChopsticks: (chopsticks: RamenChopsticks) => void;
  undoRamen: () => void;
  resetRamen: () => void;
  canUndoRamen: boolean;

  // Dialogue & Easter Eggs
  activeDialogue: CharacterMessage | null;
  showDialogue: (dialogue: CharacterMessage) => void;
  clearDialogue: () => void;
  triggerEasterEgg: (eggId: string) => void;

  // Reset Everything
  playAgain: () => void;

  // Navigation helpers
  goBack: () => void;
}

const defaultUser: UserProfile = {
  name: '',
  birthMonth: '',
  birthDay: 1
};

const defaultCake: CakeState = {
  base: 'circle',
  toppings: ['vanilla-cream', 'fruit-slices', 'sprinkles']
};

const defaultRamen: RamenState = {
  bowl: 'persian-blue-flower',
  noodles: 'wavy',
  broth: 'tonkotsu',
  toppings: ['seaweed', 'boiled-egg', 'chashu', 'naruto', 'spring-onion'],
  chopsticks: 'wooden'
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Step state
  const [step, setStep] = useState<Step>('welcome');

  // User details
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('nomm_user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback
      }
    }
    return defaultUser;
  });

  // Food choice
  const [foodType, setFoodType] = useState<FoodType | null>(() => {
    return (localStorage.getItem('nomm_food_type') as FoodType) || null;
  });

  // Cake state & undo history
  const [cakeState, setCakeState] = useState<CakeState>(() => {
    const saved = localStorage.getItem('nomm_cake_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback
      }
    }
    return defaultCake;
  });
  const [cakeHistory, setCakeHistory] = useState<CakeState[]>([]);

  // Ramen state & undo history
  const [ramenState, setRamenState] = useState<RamenState>(() => {
    const saved = localStorage.getItem('nomm_ramen_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback
      }
    }
    return defaultRamen;
  });
  const [ramenHistory, setRamenHistory] = useState<RamenState[]>([]);

  // Active dialogue popup
  const [activeDialogue, setActiveDialogue] = useState<CharacterMessage | null>(null);

  // Sync to local storage for persistence across reloads
  useEffect(() => {
    localStorage.setItem('nomm_user_profile', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (foodType) {
      localStorage.setItem('nomm_food_type', foodType);
    } else {
      localStorage.removeItem('nomm_food_type');
    }
  }, [foodType]);

  useEffect(() => {
    localStorage.setItem('nomm_cake_state', JSON.stringify(cakeState));
  }, [cakeState]);

  useEffect(() => {
    localStorage.setItem('nomm_ramen_state', JSON.stringify(ramenState));
  }, [ramenState]);

  // Cake operations
  const setCakeBase = (base: CakeBase) => {
    setCakeHistory(prev => [...prev, cakeState]);
    setCakeState(prev => ({ ...prev, base }));
  };

  const toggleCakeTopping = (topping: CakeTopping) => {
    setCakeHistory(prev => [...prev, cakeState]);
    setCakeState(prev => {
      const exists = prev.toppings.includes(topping);
      return {
        ...prev,
        toppings: exists
          ? prev.toppings.filter(t => t !== topping)
          : [...prev.toppings, topping]
      };
    });
  };

  const removeCakeTopping = (topping: CakeTopping) => {
    setCakeHistory(prev => [...prev, cakeState]);
    setCakeState(prev => ({
      ...prev,
      toppings: prev.toppings.filter(t => t !== topping)
    }));
  };

  const undoCake = () => {
    if (cakeHistory.length === 0) return;
    const previous = cakeHistory[cakeHistory.length - 1];
    setCakeHistory(prev => prev.slice(0, prev.length - 1));
    setCakeState(previous);
  };

  const resetCake = () => {
    setCakeHistory(prev => [...prev, cakeState]);
    setCakeState({
      base: 'circle',
      toppings: []
    });
  };

  // Ramen operations
  const setRamenBowl = (bowl: RamenBowl) => {
    setRamenHistory(prev => [...prev, ramenState]);
    setRamenState(prev => ({ ...prev, bowl }));
  };

  const setRamenNoodles = (noodles: RamenNoodles) => {
    setRamenHistory(prev => [...prev, ramenState]);
    setRamenState(prev => ({ ...prev, noodles }));
  };

  const setRamenBroth = (broth: RamenBroth) => {
    setRamenHistory(prev => [...prev, ramenState]);
    setRamenState(prev => ({ ...prev, broth }));
  };

  const toggleRamenTopping = (topping: RamenTopping) => {
    setRamenHistory(prev => [...prev, ramenState]);
    setRamenState(prev => {
      const exists = prev.toppings.includes(topping);
      return {
        ...prev,
        toppings: exists
          ? prev.toppings.filter(t => t !== topping)
          : [...prev.toppings, topping]
      };
    });
  };

  const removeRamenTopping = (topping: RamenTopping) => {
    setRamenHistory(prev => [...prev, ramenState]);
    setRamenState(prev => ({
      ...prev,
      toppings: prev.toppings.filter(t => t !== topping)
    }));
  };

  const setRamenChopsticks = (chopsticks: RamenChopsticks) => {
    setRamenHistory(prev => [...prev, ramenState]);
    setRamenState(prev => ({ ...prev, chopsticks }));
  };

  const undoRamen = () => {
    if (ramenHistory.length === 0) return;
    const previous = ramenHistory[ramenHistory.length - 1];
    setRamenHistory(prev => prev.slice(0, prev.length - 1));
    setRamenState(previous);
  };

  const resetRamen = () => {
    setRamenHistory(prev => [...prev, ramenState]);
    setRamenState({
      bowl: 'persian-blue-flower',
      noodles: 'wavy',
      broth: 'tonkotsu',
      toppings: [],
      chopsticks: 'wooden'
    });
  };

  // Dialogue & Easter eggs
  const showDialogue = (dialogue: CharacterMessage) => {
    setActiveDialogue(dialogue);
  };

  const clearDialogue = () => {
    setActiveDialogue(null);
  };

  const triggerEasterEgg = (eggId: string) => {
    // One Piece eggs
    if (eggId === 'straw-hat') {
      showDialogue({
        id: 'egg-luffy',
        speaker: 'Monkey D. Luffy',
        anime: 'one-piece',
        avatarBg: '#FF5964',
        dialogue: 'MEAT! Wait... is that cake?! IT LOOKS SO TASTY! GIMME A PIECE!',
        mood: 'hungry'
      });
    } else if (eggId === 'chopper-hat') {
      showDialogue({
        id: 'egg-chopper',
        speaker: 'Tony Tony Chopper',
        anime: 'one-piece',
        avatarBg: '#FF99C8',
        dialogue: 'Even if you make such a delicious, fluffy cake for me, that won\'t make me happy at all, you dummy! ♡ (dancing happily)',
        mood: 'happy'
      });
    } else if (eggId === 'big-mom-candy') {
      showDialogue({
        id: 'egg-bigmom',
        speaker: 'Charlotte Linlin (Big Mom)',
        anime: 'one-piece',
        avatarBg: '#E01A4F',
        dialogue: 'MAAAMAMAMAMA! I WANT THAT CAKE! WEEEEDDINGGG CAAAAKE!',
        mood: 'excited'
      });
    } else if (eggId === 'sanji-utensils') {
      showDialogue({
        id: 'egg-sanji',
        speaker: 'Sanji',
        anime: 'one-piece',
        avatarBg: '#35A7FF',
        dialogue: 'An excellent cake deserves excellent presentation! A cook who does not waste a single crumb is a true culinary artist.',
        mood: 'proud'
      });
    }
    // Naruto eggs
    else if (eggId === 'ichiraku-sign') {
      showDialogue({
        id: 'egg-teuchi',
        speaker: 'Teuchi (Ichiraku Chef)',
        anime: 'naruto',
        avatarBg: '#F39237',
        dialogue: 'Welcome! Let\'s make you a bowl you\'ll never forget! The secret is in the love we simmer into the broth!',
        mood: 'proud'
      });
    } else if (eggId === 'hidden-leaf') {
      showDialogue({
        id: 'egg-naruto',
        speaker: 'Naruto Uzumaki',
        anime: 'naruto',
        avatarBg: '#FF8811',
        dialogue: 'Believe it! This ramen is going to be amazing! That bowl is fit for the next Hokage, DATTEBAYO!',
        mood: 'excited'
      });
    } else if (eggId === 'kakashi-mask') {
      showDialogue({
        id: 'egg-kakashi',
        speaker: 'Kakashi Hatake',
        anime: 'naruto',
        avatarBg: '#487292',
        dialogue: 'Hmm... your ingredient choices are quite interesting. In the ninja world, those who don\'t balance their toppings are scum.',
        mood: 'wise'
      });
    }
  };

  const playAgain = () => {
    localStorage.removeItem('nomm_cake_state');
    localStorage.removeItem('nomm_ramen_state');
    localStorage.removeItem('nomm_food_type');
    setFoodType(null);
    setCakeState(defaultCake);
    setCakeHistory([]);
    setRamenState(defaultRamen);
    setRamenHistory([]);
    setActiveDialogue(null);
    setStep('welcome');
  };

  const goBack = () => {
    if (step === 'calculation') setStep('welcome');
    else if (step === 'selection') setStep('calculation');
    else if (step === 'customize') setStep('selection');
    else if (step === 'presentation') setStep('customize');
    else if (step === 'certificate') setStep('presentation');
    else if (step === 'thankyou') setStep('certificate');
  };

  return (
    <GameContext.Provider
      value={{
        step,
        setStep,
        user,
        setUser,
        foodType,
        setFoodType,
        cakeState,
        setCakeBase,
        toggleCakeTopping,
        removeCakeTopping,
        undoCake,
        resetCake,
        canUndoCake: cakeHistory.length > 0,
        ramenState,
        setRamenBowl,
        setRamenNoodles,
        setRamenBroth,
        toggleRamenTopping,
        removeRamenTopping,
        setRamenChopsticks,
        undoRamen,
        resetRamen,
        canUndoRamen: ramenHistory.length > 0,
        activeDialogue,
        showDialogue,
        clearDialogue,
        triggerEasterEgg,
        playAgain,
        goBack
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
