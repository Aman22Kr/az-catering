import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ArrowLeft, Home, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-md">
        <ChefHat className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
          404 · Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900">
          This Course Isn’t on the Menu
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          The page or banquet route you requested could not be located. Perhaps the link has moved or the feast has concluded.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors shadow-xs"
        >
          <Search className="w-4 h-4" />
          <span>Explore Catering Menu</span>
        </Link>
      </div>
    </div>
  );
};
