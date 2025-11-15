import { useEffect, useState } from 'react';
import { Send, Heart } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export default function BlessingsSection() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from('wishes')
      .select('id, name, message, created_at')
      .order('created_at', { ascending: false })
      .limit(10);

    if (!error && data) {
      setWishes(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    const { error } = await supabase.from('wishes').insert([
      {
        name: name.trim(),
        message: message.trim(),
      },
    ]);

    if (!error) {
      setName('');
      setMessage('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      fetchWishes();
    }
    setLoading(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-amber-900 mb-12">
          Blessings & Wishes
        </h2>

        <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-100 p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={50}
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 bg-amber-50 text-amber-900 placeholder-amber-500"
              disabled={loading}
            />

            <textarea
              placeholder="Share your blessings and good wishes..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={250}
              rows={4}
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 bg-amber-50 text-amber-900 placeholder-amber-500 resize-none"
              disabled={loading}
            />

            <div className="flex justify-between items-center">
              <span className="text-sm text-amber-600">
                {message.length}/250 characters
              </span>
              <button
                type="submit"
                disabled={loading || !name.trim() || !message.trim()}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 disabled:from-amber-300 disabled:to-yellow-300 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                {loading ? 'Sending...' : 'Send Wish'}
              </button>
            </div>

            {submitted && (
              <div className="text-center text-amber-700 font-medium animate-pulse">
                Thank you for your blessings!
              </div>
            )}
          </form>
        </div>

        <div className="space-y-4">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="bg-white rounded-xl shadow-md border-l-4 border-amber-300 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Heart className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-amber-900">{wish.name}</p>
                  <p className="text-amber-800 mt-2 break-words">{wish.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
