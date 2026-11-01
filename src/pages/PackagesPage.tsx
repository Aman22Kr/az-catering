import React from 'react';
import { Link } from 'react-router-dom';
import { CATERING_PACKAGES } from '../data/cateringData';
import { useCatering } from '../context/CateringContext';
import {
  CheckCircle2,
  Flame,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  Calculator
} from 'lucide-react';

export const PackagesPage: React.FC = () => {
  const { updateQuote } = useCatering();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Transparent Per-Plate Catering Pricing</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Curated Royal Feast Packages
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          From intimate 25-guest house gatherings to grand 1,500-guest wedding banquets, our all-inclusive packages include food warmers, service staff, presentation, and preparation.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATERING_PACKAGES.map((pkg, idx) => {
          const isHighlight = pkg.id === 'package-gold-celebration';
          return (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                isHighlight
                  ? 'bg-stone-950 text-white shadow-xl ring-2 ring-amber-500'
                  : 'bg-white text-stone-900 border border-stone-200 shadow-xs hover:shadow-md'
              }`}
            >
              {pkg.badge && (
                <div className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full mb-3 inline-block self-start ${
                  isHighlight ? 'bg-amber-500 text-stone-950' : 'bg-amber-100 text-amber-900'
                }`}>
                  {pkg.badge}
                </div>
              )}

              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold">{pkg.name}</h2>
                <p className={`text-xs mt-1.5 leading-relaxed ${isHighlight ? 'text-stone-300' : 'text-stone-600'}`}>
                  {pkg.tagline}
                </p>

                <div className="my-5 pb-5 border-b border-stone-200/20">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-bold text-amber-500">₹{pkg.pricePerPlate}</span>
                    <span className={`text-xs ${isHighlight ? 'text-stone-400' : 'text-stone-500'}`}>/ plate</span>
                  </div>
                  <span className={`text-[11px] block mt-1 ${isHighlight ? 'text-stone-400' : 'text-stone-500'}`}>
                    Min. {pkg.minGuests} guests · {pkg.recommendedFor}
                  </span>
                </div>

                {/* Course Inclusions */}
                <div className="space-y-2.5 mb-6 text-xs">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${isHighlight ? 'text-amber-400' : 'text-amber-800'}`}>
                    Included Courses
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between py-1 border-b border-stone-200/10">
                      <span className={isHighlight ? 'text-stone-300' : 'text-stone-600'}>Welcome Drinks:</span>
                      <strong className="font-bold">{pkg.inclusions.welcomeDrinks} varieties</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-200/10">
                      <span className={isHighlight ? 'text-stone-300' : 'text-stone-600'}>Starters & Kebabs:</span>
                      <strong className="font-bold">{pkg.inclusions.starters} options</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-200/10">
                      <span className={isHighlight ? 'text-stone-300' : 'text-stone-600'}>Royal Main Curries:</span>
                      <strong className="font-bold">{pkg.inclusions.mainCurries} options</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-200/10">
                      <span className={isHighlight ? 'text-stone-300' : 'text-stone-600'}>Dum Biryanis & Rice:</span>
                      <strong className="font-bold">{pkg.inclusions.biryaniRice} varieties</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-200/10">
                      <span className={isHighlight ? 'text-stone-300' : 'text-stone-600'}>Tandoor Breads:</span>
                      <strong className="font-bold">{pkg.inclusions.breads} choices</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-200/10">
                      <span className={isHighlight ? 'text-stone-300' : 'text-stone-600'}>Royal Desserts:</span>
                      <strong className="font-bold">{pkg.inclusions.desserts} sweets</strong>
                    </div>
                    {pkg.inclusions.liveStationsIncluded ? (
                      <div className="flex items-center justify-between py-1 text-amber-400 font-bold">
                        <span>Live Food Station:</span>
                        <span>{pkg.inclusions.liveStationsIncluded} included</span>
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Sample items */}
                <div className="mb-6 space-y-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${isHighlight ? 'text-amber-400' : 'text-stone-700'}`}>
                    Featured Inclusions
                  </span>
                  <ul className="space-y-1.5 text-[11px]">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className={isHighlight ? 'text-stone-300' : 'text-stone-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Package CTA */}
              <div className="pt-4 border-t border-stone-200/20 space-y-2">
                <Link
                  to="/quote"
                  onClick={() => updateQuote({ selectedPackageId: pkg.id })}
                  className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                    isHighlight
                      ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md'
                      : 'bg-stone-900 hover:bg-amber-600 text-white'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Customize in Quote Builder</span>
                </Link>

                <Link
                  to="/contact"
                  className={`block text-center text-xs py-1 transition-colors ${
                    isHighlight ? 'text-stone-400 hover:text-white' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Request Tasting Session
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Package Inclusions Guarantee Box */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 border border-stone-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-amber-100">Hygiene & Safety Certified</h3>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                Prepared in our FSSAI-audited central Chembur facility. Our team maintains gloves, masks, and stainless steel hot transit vessels.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-amber-100">Complimentary Food Tasting</h3>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                For events exceeding 75 guests, we offer private chef tastings at our tasting lounge so you can calibrate spices with absolute confidence.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-amber-100">Zero Hidden Surcharges</h3>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                All listed packages include chafers, fuel, delivery within Mumbai/Navi Mumbai, cutlery, napkins, and clean-up staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
