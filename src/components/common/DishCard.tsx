import React from 'react';
import { MenuItem } from '../../types';
import { useCatering } from '../../context/CateringContext';
import { Heart, Plus, Check, Info } from 'lucide-react';

interface DishCardProps {
  item: MenuItem;
  onOpenDetails: (item: MenuItem) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ item, onOpenDetails }) => {
  const { isFavorite, toggleFavorite, quoteState, toggleDishInQuote } = useCatering();
  const isInQuote = quoteState.selectedDishes.includes(item.id);
  const favorited = isFavorite(item.id);

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
      {/* Media & Overlay */}
      <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Favorite toggle */}
        <button
          onClick={e => {
            e.stopPropagation();
            toggleFavorite(item.id);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-xs transition-colors shadow-xs ${
            favorited
              ? 'bg-rose-600 text-white'
              : 'bg-white/80 text-stone-700 hover:text-rose-600 hover:bg-white'
          }`}
          aria-label={favorited ? 'Remove favorite' : 'Add to favorites'}
        >
          <Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-current' : ''}`} />
        </button>

        {/* Special tag (Chef's Special / Popular) */}
        {item.isChefsSpecial && (
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-stone-950 shadow-xs">
            Chef's Signature
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          {/* Typographic Metadata Header */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
            {/* Standard Indian Veg/Non-Veg Symbol */}
            <span
              className={`inline-flex items-center justify-center w-3.5 h-3.5 border rounded-xs ${
                item.dietary === 'veg'
                  ? 'border-emerald-600'
                  : 'border-rose-700'
              }`}
              title={item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  item.dietary === 'veg' ? 'bg-emerald-600' : 'bg-rose-700'
                }`}
              />
            </span>
            <span className="font-medium text-stone-700">{item.subCategory || item.category}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{item.spiceLevel}</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors line-clamp-1">
            {item.name}
          </h3>

          <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Serving size and ingredients */}
        <div className="mt-3 pt-3 border-t border-stone-100">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
            <span className="truncate max-w-[170px]" title={item.portionServing}>
              {item.portionServing}
            </span>
            <button
              onClick={() => onOpenDetails(item)}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 hover:text-amber-800 transition-colors"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] text-stone-400 block uppercase font-medium">Est. per plate</span>
              <span className="font-serif text-base font-bold text-stone-900">
                ₹{item.pricePerPlateEst}
              </span>
            </div>

            <button
              onClick={() => toggleDishInQuote(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isInQuote
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                  : 'bg-stone-900 text-white hover:bg-amber-600'
              }`}
            >
              {isInQuote ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>In Quote</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
