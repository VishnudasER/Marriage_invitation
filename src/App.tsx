import FloralAnimation from './components/FloralAnimation';
import CouplePortrait from './components/CouplePortrait';
import InvitationCarousel from './components/InvitationCarousel';
import LocationSection from './components/LocationSection';
import CountdownTimer from './components/CountdownTimer';
import MusicPlayer from './components/MusicPlayer';
import BlessingsSection from './components/BlessingsSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-50">
      <FloralAnimation />
      <MusicPlayer />

      <main className="relative z-10">
        <CouplePortrait />
        <CountdownTimer />
        <InvitationCarousel />
        <LocationSection />
        <BlessingsSection />

        <footer className="py-8 text-center">
          <div className="space-y-2">
            <p className="font-serif text-amber-800 text-lg">
              We look forward to celebrating with you
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-600">
              <div className="h-px w-8 bg-amber-400"></div>
              <span className="text-2xl">✿</span>
              <div className="h-px w-8 bg-amber-400"></div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
