import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../data/cateringData';
import { MenuItem, DietaryType } from '../types';
import { DishCard } from '../components/common/DishCard';
import { DishDetailModal } from '../components/common/DishDetailModal';
import { useCatering } from '../context/CateringContext';
import {
  Search,
  Filter,
  Heart,
  Calculator,
  Flame,
  ChefHat,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const MenuPage: React.FC = () => {
  const { quoteState, favorites } = useCatering();
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Filter States
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [spiceFilter, setSpiceFilter] = useState<string>('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'biryani', label: 'Royal Biryanis & Rice' },
    { id: 'starters', label: 'Kebabs & Starters' },
    { id: 'curries', label: 'Royal Curries' },
    { id: 'breads', label: 'Tandoor Breads' },
    { id: 'live-counters', label: 'Live Food Counters' },
    { id: 'desserts', label: 'Shahi Desserts' },
    { id: 'beverages', label: 'Welcome Coolers' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter !== 'all' && item.dietary !== dietaryFilter) {
        return false;
      }
      // Spice level filter
      if (spiceFilter !== 'all' && item.spiceLevel !== spiceFilter) {
        return false;
      }
      // Favorites only
      if (showFavoritesOnly && !favorites.includes(item.id)) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngredient = item.ingredients.some(ing => ing.toLowerCase().includes(query));
        const matchesSub = item.subCategory?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesIngredient && !matchesSub) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, spiceFilter, showFavoritesOnly, searchQuery, favorites]);

  const resetFilters = () => {
    setActiveCategory('all');
    setDietaryFilter('all');
    setSpiceFilter('all');
    setSearchQuery('');
    setShowFavoritesOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <ChefHat className="w-4 h-4 text-amber-600" />
          <span>The Belly Darbar Culinary Compendium</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Catering Menu & Royal Delicacies
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Every item in our menu is prepared in small batches using slow-simmered dum techniques, pure clarified ghee, and hand-ground spices. Choose your favorites to build a bespoke event menu.
        </p>
      </div>

      {/* Control Bar: Search & Quick Filters */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs space-y-5">
        {/* Top search & dietary toggles */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by dish name, spice, or ingredient (e.g. Chimichurri, Dal Makhani)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-hidden transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Segmented Dietary Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200/60">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Diets
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-emerald-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Pure Veg Only
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'text-stone-600 hover:text-rose-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                Non-Veg Halal
              </button>
            </div>

            {/* Favorites toggle */}
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                showFavoritesOnly
                  ? 'bg-rose-50 border-rose-300 text-rose-700'
                  : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-current text-rose-600' : ''}`} />
              <span>Favorites ({favorites.length})</span>
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-stone-100">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active filters status & count */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <div>
          Showing <span className="font-bold text-stone-900">{filteredItems.length}</span> delicacies
          {activeCategory !== 'all' && (
            <span> in <strong className="text-stone-800">{categories.find(c => c.id === activeCategory)?.label}</strong></span>
          )}
          {dietaryFilter !== 'all' && (
            <span> ({dietaryFilter === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'})</span>
          )}
        </div>

        {(activeCategory !== 'all' || dietaryFilter !== 'all' || searchQuery || showFavoritesOnly) && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-amber-700 hover:text-amber-800 font-semibold"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Dish Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <DishCard
              key={item.id}
              item={item}
              onOpenDetails={dish => setSelectedDish(dish)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl bg-stone-50 border border-stone-200/80">
          <ChefHat className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-stone-800">No dishes matched your criteria</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1 mb-4">
            Try adjusting your search query, clearing the dietary filters, or switching categories.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
          >
            Show All Dishes
          </button>
        </div>
      )}

      {/* Sticky Bottom Bar for Quote Draft items */}
      {quoteState.selectedDishes.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-2xl bg-stone-950 text-white p-4 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center justify-between gap-4 animate-scale-up no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
              {quoteState.selectedDishes.length}
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-amber-200">
                Dishes Selected for Custom Menu
              </h4>
              <p className="text-[11px] text-stone-300">
                Ready to review per-plate pricing and live counter additions
              </p>
            </div>
          </div>

          <Link
            to="/quote"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-md shrink-0"
          >
            <span>Open Quote Builder</span>
            <Calculator className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Dish Detail Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
};
