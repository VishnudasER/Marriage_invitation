import { useEffect, useState } from 'react';

interface Flower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  type: string;
}

export default function FloralAnimation() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const flowerTypes = ['🌸', '🌼', '🌺', '🏵️', '🌻'];
    const newFlowers: Flower[] = [];

    for (let i = 0; i < 15; i++) {
      newFlowers.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 3,
        type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
      });
    }

    setFlowers(newFlowers);

    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50 fade-out">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute -top-10 text-3xl opacity-0 animate-float"
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
          }}
        >
          {flower.type}
        </div>
      ))}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
