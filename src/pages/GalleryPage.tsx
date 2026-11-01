import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cateringData';
import { X, Sparkles, Camera, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const categories = ['all', 'Weddings', 'Corporate', 'Live Counters', 'Food Styling'];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <Camera className="w-4 h-4 text-amber-600" />
          <span>Visual Portfolio</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Banquet Showcase & Food Artistry
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Glimpses of live flame sigris, royal brass and copper buffet spreads, dough-sealed degs, and celebratory wedding dinners across Mumbai.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {cat === 'all' ? 'All Photo Highlights' : cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-100 border border-stone-200 shadow-xs cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
              <span className="self-end p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                <Maximize2 className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm font-bold text-white line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-fade-in no-print"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 animate-scale-up"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/10 w-full bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-stone-950 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                {activeImage.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">{activeImage.title}</h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-2 leading-relaxed">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
