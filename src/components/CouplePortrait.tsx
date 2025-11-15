import { Heart } from 'lucide-react';

export default function CouplePortrait() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/40 via-yellow-100/40 to-orange-200/40 rounded-full blur-2xl"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-8 border-amber-100 shadow-2xl bg-gradient-to-br from-amber-50 to-yellow-50">
            <img
              src="https://drive.google.com/file/d/1-y-s4gEaNrrgTN-pQ6j2GuzLRt7xHcof/view?auto=compress&cs=tinysrgb&w=800"
              alt="Couple Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
            <Heart className="w-6 h-6 text-amber-600 fill-amber-600" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-amber-900 mb-2">
            Wedding Invitation
          </h1>

          <div className="font-serif text-2xl md:text-3xl text-amber-800 space-y-1">
            <p className="text-amber-700">You are cordially invited to celebrate</p>
            <p className="text-amber-700">the wedding of</p>
            <p className="font-semibold mt-4">Vandhana & Kathik</p>
          </div>

          <div className="pt-6 text-lg md:text-xl text-amber-700 font-light">
            <p>Saturday, December 20, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
