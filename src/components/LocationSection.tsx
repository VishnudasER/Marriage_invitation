import { MapPin, Clock, Navigation } from 'lucide-react';

interface Location {
  title: string;
  name: string;
  address: string;
  time: string;
  mapsUrl: string;
  icon: string;
}

const locations: Location[] = [
  {
    title: 'Temple',
    name: 'Sree Chinakkathoor Bhagavathi Temple',
    address: 'Palappuram, Ottapalam, Kerala 679103',
    time: '07:45 AM - 08:30 AM',
    mapsUrl: 'https://maps.app.goo.gl/Y5XMWRLEmbBd9CWz7',
    icon: '🕉️',
  },
  {
    title: 'Lunch',
    name: 'Surya Auditorium',
    address: 'Palakkad - Ponnani Rd, Palappuram, Kerala 679103',
    time: '11:00 AM - 02:00 PM',
    mapsUrl: 'https://maps.app.goo.gl/UqcBX3gBM5HiTvQh7',
    icon: '🏛️',
  },
];

export default function LocationSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-amber-900 mb-12">
          Venue Details
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {locations.map((location, index) => (
            <div
              key={index}
              onClick={() => window.open(location.mapsUrl, '_blank')}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-amber-100 hover:border-amber-300"
            >
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-8 text-center">
                <div className="text-6xl mb-4">{location.icon}</div>
                <h3 className="font-serif text-2xl md:text-3xl text-amber-900 font-semibold">
                  {location.title}
                </h3>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg text-amber-900 mb-1">
                      {location.name}
                    </p>
                    <p className="text-amber-700">{location.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <p className="text-amber-700 font-medium">{location.time}</p>
                </div>

                <div className="pt-4 border-t border-amber-100">
                  <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
