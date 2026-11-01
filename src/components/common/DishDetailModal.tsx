import React from 'react';
import { MenuItem } from '../../types';
import { useCatering } from '../../context/CateringContext';
import { X, Flame, Heart, Plus, Check, ShieldCheck, Users, AlertCircle } from 'lucide-react';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ item, onClose }) => {
  const { isFavorite, toggleFavorite, quoteState, toggleDishInQuote } = useCatering();

  if (!item) return null;

  const isInQuote = quoteState.selectedDishes.includes(item.id);
  const favorited = isFavorite(item.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fade-in no-print"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[90vh] flex flex-col animate-scale-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Media */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-900 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white backdrop-blur-xs transition-colors shadow-lg"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Favorite button */}
          <button
            onClick={() => toggleFavorite(item.id)}
            className={`absolute top-4 left-4 p-2 rounded-full backdrop-blur-xs transition-colors shadow-lg ${
              favorited ? 'bg-red-500 text-white' : 'bg-stone-900/80 text-white hover:text-red-400'
            }`}
            aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
          </button>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-medium text-amber-300 mb-1">
              <span className="uppercase tracking-wider">{item.subCategory || item.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                {item.spiceLevel} Spice
              </span>
            </div>
            <h3 id="dish-modal-title" className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
              Culinary Description
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-stone-500 block">Portion & Serving Standard</span>
                <span className="text-xs text-stone-800 font-medium">{item.portionServing}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-stone-500 block">Dietary Standard</span>
                <span className="text-xs text-stone-800 font-medium capitalize">
                  {item.dietary === 'veg' ? '100% Pure Vegetarian' : '100% Halal Certified Non-Veg'}
                </span>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Primary Royal Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded bg-stone-100 text-stone-700 border border-stone-200/60 font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Allergen advisory */}
          {item.allergens && item.allergens.length > 0 && (
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/80 border border-amber-200 text-amber-900 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Allergen Notice: </span>
                Contains {item.allergens.join(', ')}. Please notify our chef team during menu finalization if any guests have severe food allergies.
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-[11px] text-stone-500 block uppercase font-medium">Estimated Catering Add-on</span>
            <span className="font-serif text-lg font-bold text-stone-900">
              ₹{item.pricePerPlateEst}
              <span className="text-xs font-sans font-normal text-stone-500"> / guest</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleDishInQuote(item.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                isInQuote
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-amber-600 hover:bg-amber-700 text-white'
              }`}
            >
              {isInQuote ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Quote Draft</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Custom Quote</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
