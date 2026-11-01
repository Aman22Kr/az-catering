import React from 'react';
import { Link } from 'react-router-dom';
import { useCatering } from '../context/CateringContext';
import { MENU_ITEMS, CATERING_PACKAGES } from '../data/cateringData';
import {
  ClipboardList,
  Heart,
  Calculator,
  Calendar,
  Users,
  MapPin,
  Clock,
  Trash2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

const statusBadgeStyles: Record<string, string> = {
  'In Review': 'bg-blue-50 text-blue-800 border-blue-200',
  'Menu Planning': 'bg-amber-50 text-amber-800 border-amber-200',
  'Tasting Scheduled': 'bg-purple-50 text-purple-800 border-purple-200',
  Confirmed: 'bg-emerald-50 text-emerald-800 border-emerald-200'
};

export const MyInquiriesPage: React.FC = () => {
  const { inquiries, cancelInquiry, favorites, toggleFavorite, quoteState } = useCatering();

  const favoriteDishes = favorites
    .map(id => MENU_ITEMS.find(m => m.id === id))
    .filter(Boolean);

  const activePackage = CATERING_PACKAGES.find(p => p.id === quoteState.selectedPackageId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <ClipboardList className="w-4 h-4 text-amber-600" />
          <span>Client Storage & Inquiry Dashboard</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          My Inquiries & Saved Quotes
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Track the status of your submitted banquet booking inquiries, review your customized menu draft, and manage bookmarked dishes.
        </p>
      </div>

      {/* LocalStorage Notice */}
      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
        <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Client-Side Persistence Notice:</strong> Your quotes, submitted inquiries, and dish favorites are stored securely in your browser's <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">localStorage</code>. Data persists across page refreshes and visits on this device.
        </p>
      </div>

      {/* Inquiries Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Registered Event Inquiries ({inquiries.length})
          </h2>
          <Link
            to="/quote"
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
          >
            <span>Create New Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {inquiries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inquiries.map(inq => (
              <div
                key={inq.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-3 mb-3">
                    <div>
                      <span className="font-mono text-xs font-bold text-amber-800">
                        #{inq.trackingCode}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-stone-900">
                        {inq.eventType}
                      </h3>
                    </div>

                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                        statusBadgeStyles[inq.status] || 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{inq.eventDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-stone-400" />
                      <span>{inq.guestCount} Guests</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{inq.venueLocation}</span>
                    </div>
                  </div>

                  {inq.estimatedBudget && (
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 text-xs">
                      <span className="text-stone-500 block">Estimated Budget:</span>
                      <span className="font-serif text-base font-bold text-stone-900">
                        ₹{inq.estimatedBudget.toLocaleString()}
                      </span>
                    </div>
                  )}

                  {inq.specialDietaryRequirements && (
                    <p className="text-[11px] text-stone-500 mt-2">
                      <strong>Dietary Notes:</strong> {inq.specialDietaryRequirements}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-400 text-[10px]">
                    Submitted {new Date(inq.createdAt).toLocaleDateString()}
                  </span>

                  <button
                    onClick={() => cancelInquiry(inq.trackingCode)}
                    className="text-stone-400 hover:text-red-600 transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Cancel Inquiry</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl bg-stone-50 border border-stone-200">
            <ClipboardList className="w-10 h-10 text-stone-300 mx-auto mb-2" />
            <h3 className="font-serif text-base font-bold text-stone-800">No active inquiries submitted</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">
              Use our Quote Builder to configure your guest count, dishes, and request a booking.
            </p>
            <Link
              to="/quote"
              className="px-4 py-2 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition-colors"
            >
              Start Quote Builder
            </Link>
          </div>
        )}
      </section>

      {/* Saved Quote Draft Overview */}
      <section className="bg-stone-900 text-white p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Active Draft in Memory
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              Current Quote Draft ({quoteState.guestCount} Guests)
            </h2>
          </div>

          <Link
            to="/quote"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shrink-0"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Open in Quote Builder</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-300">
          <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/60">
            <span className="text-stone-400 block mb-1">Selected Package Tier</span>
            <span className="font-serif text-base font-bold text-amber-300">
              {activePackage?.name || 'Custom Package'}
            </span>
            <span className="text-[11px] text-stone-400 block mt-1">
              ₹{activePackage?.pricePerPlate || 499} / guest base
            </span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/60">
            <span className="text-stone-400 block mb-1">Selected Custom Dishes</span>
            <span className="font-serif text-base font-bold text-white">
              {quoteState.selectedDishes.length} Delicacies Chosen
            </span>
            <span className="text-[11px] text-stone-400 block mt-1">
              Starters, mains, biryanis & desserts
            </span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/60">
            <span className="text-stone-400 block mb-1">Live Interactive Counters</span>
            <span className="font-serif text-base font-bold text-amber-400">
              {quoteState.selectedLiveStations.length} Stations Active
            </span>
            <span className="text-[11px] text-stone-400 block mt-1">
              Live Sigri, Chaat, or Jalebi
            </span>
          </div>
        </div>
      </section>

      {/* Bookmarked Dishes */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-current" />
            <span>Saved Favorite Dishes ({favoriteDishes.length})</span>
          </h2>
          <Link
            to="/menu"
            className="text-xs font-bold text-amber-700 hover:text-amber-800"
          >
            Explore More Dishes
          </Link>
        </div>

        {favoriteDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favoriteDishes.map(dish => (
              dish && (
                <div
                  key={dish.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-serif text-sm font-bold text-stone-900 truncate">
                        {dish.name}
                      </h4>
                      <span className="text-[11px] text-stone-500 block truncate">
                        {dish.subCategory} · ₹{dish.pricePerPlateEst}/plate
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFavorite(dish.id)}
                    className="p-2 text-rose-600 hover:text-stone-400 transition-colors shrink-0"
                    title="Remove favorite"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )
            ))}
          </div>
        ) : (
          <p className="text-xs text-stone-500">
            You haven't added any favorite dishes yet. Click the heart icon on any dish in the menu to bookmark it!
          </p>
        )}
      </section>
    </div>
  );
};
