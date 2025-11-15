export default function BrideGroomCards() {
  const couple = [
    {
      role: 'Bride',
      name: 'Priya Sharma',
      parents: 'Daughter of Mr. & Mrs. Sharma',
      quote: 'Love is not just looking at each other, it\'s looking in the same direction.',
      icon: '👰',
    },
    {
      role: 'Groom',
      name: 'Arjun Verma',
      parents: 'Son of Mr. & Mrs. Verma',
      quote: 'A successful marriage is an old-fashioned thing.',
      icon: '🤵',
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-amber-900 mb-12">
          Meet the Couple
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {couple.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border-2 border-amber-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-amber-300"
            >
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-8 text-center">
                <div className="text-7xl mb-4">{person.icon}</div>
                <h3 className="font-serif text-2xl md:text-3xl text-amber-900 font-semibold mb-2">
                  {person.name}
                </h3>
                <p className="text-amber-700 text-sm md:text-base">{person.parents}</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="border-t-2 border-amber-100 pt-6">
                  <p className="text-amber-800 italic font-light text-lg leading-relaxed">
                    "{person.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
