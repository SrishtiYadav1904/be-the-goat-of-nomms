import React, { useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { CakePreview } from '../components/cake/CakePreview';
import { RamenPreview } from '../components/ramen/RamenPreview';
import { CuteGoatChef } from '../components/CuteGoatChef';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { Download, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const ChefCertificatePage: React.FC = () => {
  const { user, foodType, cakeState, ramenState, setStep } = useGame();
  const { playSfx } = useAudio();

  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const isCake = foodType === 'cake';
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleDownloadImage = async () => {
    if (!certificateRef.current) return;
    setIsDownloading(true);
    playSfx('sparkle');

    try {
      const dataUrl = await toPng(certificateRef.current, {
        cacheBust: true,
        pixelRatio: 2, // High resolution
        quality: 0.95
      });

      const link = document.createElement('a');
      link.download = `Chef-Certificate-${user.name.replace(/\s+/g, '-') || 'Nomm'}.png`;
      link.href = dataUrl;
      link.click();

      setDownloadSuccess(true);
      playSfx('chime');
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Error generating certificate image:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    setIsDownloading(true);
    playSfx('sparkle');

    try {
      const dataUrl = await toPng(certificateRef.current, {
        cacheBust: true,
        pixelRatio: 2
      });

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [800, 600]
      });

      pdf.addImage(dataUrl, 'PNG', 0, 0, 800, 600);
      pdf.save(`Chef-Certificate-${user.name.replace(/\s+/g, '-') || 'Nomm'}.pdf`);

      setDownloadSuccess(true);
      playSfx('chime');
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="py-8 px-4 max-w-5xl mx-auto flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F3] text-[#FF758F] text-xs font-bold uppercase tracking-wider mb-2">
          Official Culinary Diploma
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D352E] tracking-tight mb-1">
          Your Master Chef Certificate! 📜
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-medium">
          Personalized, certified, and ready to download and frame!
        </p>
      </div>

      {/* --- HIGH QUALITY PRINTABLE / EXPORTABLE CERTIFICATE CONTAINER --- */}
      <div className="w-full flex justify-center overflow-x-auto p-2">
        <div
          ref={certificateRef}
          className={`relative w-[800px] h-[580px] flex-shrink-0 bg-[#FFFDF8] rounded-3xl p-8 text-center select-none shadow-2xl flex flex-col justify-between border-8 ${
            isCake ? 'border-[#FFCCD5]' : 'border-[#FFD166]'
          }`}
          style={{
            backgroundImage:
              'radial-gradient(#FFE5EC 1px, transparent 1px), radial-gradient(#FFF8E7 1px, #FFFDF8 1px)',
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px'
          }}
        >
          {/* Ornate Decorative Inner Border */}
          <div
            className={`absolute inset-3 border-2 rounded-2xl pointer-events-none ${
              isCake ? 'border-[#FF758F]/50' : 'border-[#FB8500]/50'
            }`}
          />
          <div
            className={`absolute inset-4 border border-dashed rounded-xl pointer-events-none ${
              isCake ? 'border-[#FFB3C6]' : 'border-[#FFD166]'
            }`}
          />

          {/* Corner Flourishes */}
          <div className="absolute top-6 left-6 text-2xl">✨</div>
          <div className="absolute top-6 right-6 text-2xl">✨</div>
          <div className="absolute bottom-6 left-6 text-2xl">🐐</div>
          <div className="absolute bottom-6 right-6 text-2xl">♡</div>

          {/* Top Section */}
          <div className="pt-2">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-2xl">{isCake ? '🏴‍☠️' : '🍃'}</span>
              <span className="text-xs font-bold tracking-widest text-[#FF758F] uppercase">
                BE THE GOAT OF NOMM'S (COOKING) ACADEMY
              </span>
              <span className="text-2xl">{isCake ? '🎂' : '🍜'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-[#D90429] tracking-tight font-serif drop-shadow-sm uppercase">
              CONGRATULATIONS!
            </h1>

            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
              THIS CERTIFIES THAT
            </p>
          </div>

          {/* Middle Section: Chef Name & Masterpiece */}
          <div className="my-auto flex items-center justify-between px-6 gap-6">
            {/* Left: Chef Goat Seal & Mascot */}
            <div className="flex flex-col items-center w-40 flex-shrink-0">
              <CuteGoatChef size={110} mood="celebrate" />
              <div className="w-16 h-16 rounded-full border-2 border-amber-400 bg-amber-50 flex flex-col items-center justify-center text-[9px] font-bold text-amber-800 shadow-md mt-1">
                <span>OFFICIAL</span>
                <span className="text-xs font-black">GOAT</span>
                <span>SEAL</span>
              </div>
            </div>

            {/* Center: Prominent Personalized Name & Statement */}
            <div className="flex-1 text-center">
              {/* Personalized Name */}
              <div className="inline-block border-b-2 border-[#D90429] pb-1 px-8 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#3D352E] font-hand tracking-wide">
                  {user.name || 'Master Chef'}
                </span>
              </div>

              {/* Statement */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#FF4D6D] tracking-wide my-1">
                U R OFFICIALLY A CHEF!
              </h3>

              <p className="text-sm font-bold text-gray-700 italic">
                Certified Master of Delicious Creations
              </p>

              <div className="mt-3 text-xs text-gray-500 font-medium">
                Honorary Birthday Chef: <span className="font-bold text-gray-700">{user.birthMonth} {user.birthDay}</span>
              </div>
            </div>

            {/* Right: Actual Rendered Dish Masterpiece */}
            <div className="flex flex-col items-center w-44 flex-shrink-0">
              <div className="transform scale-90">
                {isCake ? (
                  <CakePreview
                    base={cakeState.base}
                    toppings={cakeState.toppings}
                    size={170}
                  />
                ) : (
                  <RamenPreview
                    bowl={ramenState.bowl}
                    noodles={ramenState.noodles}
                    broth={ramenState.broth}
                    toppings={ramenState.toppings}
                    chopsticks={ramenState.chopsticks}
                    size={170}
                  />
                )}
              </div>
              <span className="text-[11px] font-bold text-gray-600 bg-white/80 px-2.5 py-0.5 rounded-full border border-pink-100 mt-1">
                {isCake ? 'Masterpiece Cake' : 'Masterpiece Ramen'}
              </span>
            </div>
          </div>

          {/* Bottom Section: Date & Signature & Creator Credits */}
          <div className="pt-2 border-t border-pink-100 flex items-end justify-between px-6 pb-2 text-xs">
            {/* Completion Date */}
            <div className="text-left">
              <span className="block text-[10px] text-gray-400 font-semibold uppercase">Date Awarded</span>
              <span className="font-bold text-gray-700">{currentDate}</span>
            </div>

            {/* Creator Credit (REQUIRED EXACT SPELLING) */}
            <div className="text-center font-hand text-lg text-gray-700">
              Website created by <span className="font-bold text-[#D90429]">Tripti D Goat (nomnom)</span>
            </div>

            {/* Signature */}
            <div className="text-right">
              <span className="block font-hand text-xl text-[#3D352E] font-bold">
                {isCake ? 'Chef Sanji' : 'Chef Naruto'} ♡
              </span>
              <span className="block text-[10px] text-gray-400 font-semibold uppercase border-t border-gray-300 pt-0.5">
                Head Chef Signature
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons: Download & Proceed */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
        {/* Download PNG Button */}
        <button
          onClick={handleDownloadImage}
          disabled={isDownloading}
          className="w-full sm:w-auto flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF758F] via-[#FF4D6D] to-[#D90429] hover:opacity-95 text-white font-extrabold text-base shadow-xl shadow-pink-200 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Download size={18} />
          <span>{isDownloading ? 'Baking PNG...' : 'Download My Certificate ♡'}</span>
        </button>

        {/* Download PDF Button */}
        <button
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="w-full sm:w-auto py-4 px-5 rounded-2xl bg-white border-2 border-[#FFCCD5] text-gray-700 hover:text-[#FF758F] hover:bg-[#FFF0F3] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          title="Download printable PDF"
        >
          <FileText size={16} />
          <span>PDF</span>
        </button>
      </div>

      {/* Download Success Notice */}
      {downloadSuccess && (
        <div className="mt-4 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 font-bold text-xs flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={16} />
          Certificate saved successfully! Ready to print or share!
        </div>
      )}

      {/* Continue to Final Thank-You Screen */}
      <div className="mt-6">
        <button
          onClick={() => {
            playSfx('sparkle');
            setStep('thankyou');
          }}
          className="text-sm font-bold text-gray-500 hover:text-[#FF758F] flex items-center gap-1 transition-colors group cursor-pointer"
        >
          <span>Continue to Final Message</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
