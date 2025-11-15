import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const invitationCards = [
  {
    id: 1,
    image: '/images/wedding1.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding Invitation Card 1',
  },
  {
    id: 2,
    image: '/images/wedding2.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding Invitation Card 2',
  },
];

export default function InvitationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % invitationCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + invitationCards.length) % invitationCards.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-1 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="relative">
          <div className="relative aspect-[3/4]  md:h-[600px]  md:h-[600px]  max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  onTouchStart={() => setIsPaused(true)}
  onTouchEnd={() => setIsPaused(false)}>
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {invitationCards.map((card) => (
                <div key={card.id} className="min-w-full h-full flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-800 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-800 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {invitationCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-amber-600'
                    : 'w-2 bg-amber-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
