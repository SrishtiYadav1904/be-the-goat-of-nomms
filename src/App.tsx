import React from 'react';
import { AudioProvider } from './context/AudioContext';
import { GameProvider, useGame } from './context/GameContext';
import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { CharacterDialogueBox } from './components/CharacterDialogueBox';
import { WelcomePage } from './pages/WelcomePage';
import { CalculationPage } from './pages/CalculationPage';
import { FoodSelectionPage } from './pages/FoodSelectionPage';
import { CakeCustomizer } from './components/cake/CakeCustomizer';
import { RamenCustomizer } from './components/ramen/RamenCustomizer';
import { FoodPresentationPage } from './pages/FoodPresentationPage';
import { ChefCertificatePage } from './pages/ChefCertificatePage';
import { ThankYouPage } from './pages/ThankYouPage';

const MainGameRouter: React.FC = () => {
  const { step, foodType } = useGame();

  return (
    <main className="flex-1 w-full relative z-10">
      {step === 'welcome' && <WelcomePage />}
      {step === 'calculation' && <CalculationPage />}
      {step === 'selection' && <FoodSelectionPage />}
      {step === 'customize' && (
        foodType === 'cake' ? <CakeCustomizer /> : <RamenCustomizer />
      )}
      {step === 'presentation' && <FoodPresentationPage />}
      {step === 'certificate' && <ChefCertificatePage />}
      {step === 'thankyou' && <ThankYouPage />}
    </main>
  );
};

export function App() {
  return (
    <AudioProvider>
      <GameProvider>
        <div className="min-h-screen bg-[#FFFBF5] text-[#3D352E] flex flex-col relative selection:bg-[#FFB3C6] selection:text-[#5E2B38]">
          {/* Subtle Pastel Background Ambience */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FFCCD5]/40 blur-3xl" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#FFF1A8]/40 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-[#CDE8F6]/40 blur-3xl" />
          </div>

          {/* Persistent Background Music Player */}
          <AudioPlayer />

          {/* Sticky Header & Progress */}
          <Navbar />

          {/* Active Step Router */}
          <MainGameRouter />

          {/* Animated Anime Character Dialogue Popup */}
          <CharacterDialogueBox />
        </div>
      </GameProvider>
    </AudioProvider>
  );
}

export default App;
