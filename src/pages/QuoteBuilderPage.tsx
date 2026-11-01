import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCatering } from '../context/CateringContext';
import { CATERING_PACKAGES, MENU_ITEMS, CATERING_SERVICES } from '../data/cateringData';
import { MenuItem } from '../types';
import confetti from 'canvas-confetti';
import {
  Calculator,
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  Plus,
  Trash2,
  Printer,
  Sparkles,
  Flame,
  ShieldCheck,
  Phone,
  Mail,
  Send,
  RotateCcw
} from 'lucide-react';

export const QuoteBuilderPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    quoteState,
    updateQuote,
    toggleDishInQuote,
    toggleLiveStationInQuote,
    resetQuote,
    submitInquiry
  } = useCatering();

  // Inquiry Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialDietary, setSpecialDietary] = useState('Separate Jain prep needed for 20 guests');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  // Selected package details
  const activePackage = useMemo(() => {
    return CATERING_PACKAGES.find(p => p.id === quoteState.selectedPackageId) || CATERING_PACKAGES[1];
  }, [quoteState.selectedPackageId]);

  // Live stations list
  const liveStationItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.category === 'live-counters');
  }, []);

  // Selected dishes details
  const selectedDishObjects = useMemo(() => {
    return quoteState.selectedDishes
      .map(id => MENU_ITEMS.find(m => m.id === id))
      .filter((m): m is MenuItem => Boolean(m));
  }, [quoteState.selectedDishes]);

  // Calculate pricing
  const pricingCalculation = useMemo(() => {
    const guests = Math.max(25, quoteState.guestCount);
    let perPlateBase = activePackage.pricePerPlate;

    // Additional live stations cost
    let liveStationAddonPerGuest = 0;
    quoteState.selectedLiveStations.forEach(stId => {
      const station = MENU_ITEMS.find(m => m.id === stId);
      if (station) {
        liveStationAddonPerGuest += station.pricePerPlateEst;
      }
    });

    const netPerPlate = perPlateBase + liveStationAddonPerGuest;
    const subtotal = netPerPlate * guests;
    const gstTax = Math.round(subtotal * 0.05); // 5% GST catering standard in India
    const grandTotal = subtotal + gstTax;

    return {
      guests,
      basePerPlate: perPlateBase,
      liveStationPerPlate: liveStationAddonPerGuest,
      netPerPlate,
      subtotal,
      gstTax,
      grandTotal
    };
  }, [quoteState.guestCount, activePackage, quoteState.selectedLiveStations]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Please fill in your name and contact phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const code = submitInquiry({
        fullName,
        email: email || 'inquiry@azcatering.in',
        phone,
        eventType: quoteState.serviceType ? quoteState.serviceType.replace('-', ' ').toUpperCase() : 'Event Banquet',
        eventDate: quoteState.date,
        guestCount: quoteState.guestCount,
        venueLocation: quoteState.location,
        preferredPackage: activePackage.name,
        selectedDishes: quoteState.selectedDishes,
        specialDietaryRequirements: specialDietary,
        estimatedBudget: pricingCalculation.grandTotal,
        additionalNotes
      });

      // Celebration burst
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });

      setSubmittedCode(code);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6 no-print">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>Real-time Banquet Estimator</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mt-1">
            Custom Catering Quote Builder
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Select your guest count, package tier, bespoke dishes, and live counters for an itemized estimate.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetQuote}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save Quote</span>
          </button>
        </div>
      </div>

      {/* Success banner if submitted */}
      {submittedCode && (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-scale-up no-print">
          <div>
            <div className="flex items-center gap-2 font-bold text-base text-emerald-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Inquiry #{submittedCode} Successfully Registered!</span>
            </div>
            <p className="text-xs text-emerald-800 mt-1">
              Your custom menu draft and estimate of ₹{pricingCalculation.grandTotal.toLocaleString()} have been saved to your local inquiry tracker. Our catering team will connect within 3 hours.
            </p>
          </div>
          <Link
            to="/my-inquiries"
            className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors shrink-0"
          >
            View in My Inquiries
          </Link>
        </div>
      )}

      {/* Builder Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Step by step configuration */}
        <div className="lg:col-span-7 space-y-10">
          {/* Step 1: Event & Guest Parameters */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center">1</span>
                <span>Event Logistics & Guest Scale</span>
              </h2>
              <span className="text-xs font-semibold text-amber-700">
                {quoteState.guestCount} Guests Selected
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-2">
                  Number of Attendees / Guests: <span className="font-bold text-stone-900">{quoteState.guestCount} guests</span>
                </label>
                <input
                  type="range"
                  min={25}
                  max={1500}
                  step={5}
                  value={quoteState.guestCount}
                  onChange={e => updateQuote({ guestCount: Number(e.target.value) })}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>25 Guests (Intimate House Party)</span>
                  <span>250 Guests (Celebration)</span>
                  <span>1,500+ (Grand Banquet)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={quoteState.date}
                      onChange={e => updateQuote({ date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Venue Area / City Zone
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={quoteState.location}
                      onChange={e => updateQuote({ location: e.target.value })}
                      placeholder="e.g. Chembur, BKC, Bandra..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2: Base Package Tier */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center">2</span>
                <span>Select Base Package Tier</span>
              </h2>
              <span className="text-xs text-stone-500">Includes warmers & service team</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CATERING_PACKAGES.map(pkg => {
                const isSelected = pkg.id === activePackage.id;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => updateQuote({ selectedPackageId: pkg.id })}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/70 ring-1 ring-amber-500'
                        : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-sm font-bold text-stone-900">{pkg.name}</h4>
                      <span className="font-bold text-amber-700 text-sm">₹{pkg.pricePerPlate}</span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                    <div className="mt-2 text-[10px] text-stone-400 font-medium">
                      {pkg.inclusions.starters} Starters · {pkg.inclusions.mainCurries} Curries · {pkg.inclusions.biryaniRice} Biryanis · {pkg.inclusions.desserts} Sweets
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Step 3: Pick Signature Dishes for the Menu */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <h2 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center">3</span>
                  <span>Bespoke Menu Selection</span>
                </h2>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Click dishes to toggle them in or out of your event banquet menu.
                </p>
              </div>

              <Link
                to="/menu"
                className="text-xs font-semibold text-amber-700 hover:text-amber-800"
              >
                Browse Full Catalog
              </Link>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                {MENU_ITEMS.filter(m => m.category !== 'live-counters').map(dish => {
                  const isChecked = quoteState.selectedDishes.includes(dish.id);
                  return (
                    <div
                      key={dish.id}
                      onClick={() => toggleDishInQuote(dish.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        isChecked
                          ? 'border-emerald-500 bg-emerald-50/50'
                          : 'border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}} // handled by div click
                        className="mt-1 accent-emerald-600 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-stone-900 truncate">
                            {dish.name}
                          </span>
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              dish.dietary === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'
                            }`}
                          />
                        </div>
                        <span className="text-[10px] text-stone-500 block truncate">
                          {dish.subCategory || dish.category} · {dish.portionServing}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Step 4: Add-On Live Food Counters */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <h2 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center">4</span>
                  <span>Live Interactive Food Counters</span>
                </h2>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Culinary masters cooking live in front of guests.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {liveStationItems.map(station => {
                const isSelected = quoteState.selectedLiveStations.includes(station.id);
                return (
                  <div
                    key={station.id}
                    onClick={() => toggleLiveStationInQuote(station.id)}
                    className={`flex items-start justify-between gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/70'
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="mt-1 accent-amber-600 shrink-0"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-amber-600" />
                          <span>{station.name}</span>
                        </h4>
                        <p className="text-[11px] text-stone-600 mt-0.5">
                          {station.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-amber-800">
                        +₹{station.pricePerPlateEst}
                      </span>
                      <span className="text-[10px] text-stone-500 block">/ guest</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Step 5: Direct Booking Submission Form */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-xs space-y-4 no-print">
            <h2 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center">5</span>
              <span>Reserve Date & Request Tasting Session</span>
            </h2>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Aman Kumar"
                    className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Contact Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 98200 12345"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="aman600rocking@gmail.com"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Special Dietary Instructions
                </label>
                <input
                  type="text"
                  value={specialDietary}
                  onChange={e => setSpecialDietary(e.target.value)}
                  placeholder="e.g. Separate Jain dishes, low spice for kids..."
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={2}
                  value={additionalNotes}
                  onChange={e => setAdditionalNotes(e.target.value)}
                  placeholder="Tell us about your venue setup, timings, or requested tasting dishes..."
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {isSubmitting ? 'Registering Booking...' : 'Submit Inquiry & Reserve Date'}
                </span>
              </button>
            </form>
          </section>
        </div>

        {/* Right Col: Real-time Cost Breakdown & Itemized Quote Invoice */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          <div className="bg-stone-950 text-white p-6 sm:p-7 rounded-3xl border border-stone-800 shadow-xl space-y-6">
            <div className="border-b border-stone-800 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                AZ Catering Event Proposal
              </span>
              <h3 className="font-serif text-2xl font-bold text-amber-50">
                Itemized Estimate Summary
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                {pricingCalculation.guests} Guests · {activePackage.name}
              </p>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-center justify-between">
                <span>Base Tier ({activePackage.name}):</span>
                <span className="font-mono text-stone-200">
                  ₹{activePackage.pricePerPlate} / guest
                </span>
              </div>

              {pricingCalculation.liveStationPerPlate > 0 && (
                <div className="flex items-center justify-between text-amber-400">
                  <span>Live Food Stations ({quoteState.selectedLiveStations.length}):</span>
                  <span className="font-mono">
                    +₹{pricingCalculation.liveStationPerPlate} / guest
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-stone-800 font-semibold text-white">
                <span>Effective Rate Per Plate:</span>
                <span className="font-serif text-base text-amber-400">
                  ₹{pricingCalculation.netPerPlate} / guest
                </span>
              </div>

              <div className="flex items-center justify-between text-stone-400">
                <span>Subtotal ({pricingCalculation.guests} guests × ₹{pricingCalculation.netPerPlate}):</span>
                <span className="font-mono text-white">
                  ₹{pricingCalculation.subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between text-stone-400">
                <span>Catering GST (5%):</span>
                <span className="font-mono">
                  ₹{pricingCalculation.gstTax.toLocaleString()}
                </span>
              </div>

              {/* Total Box */}
              <div className="p-4 rounded-xl bg-stone-900 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 block">Total Event Estimate</span>
                  <span className="text-[11px] text-stone-400">Inclusive of staff & warmers</span>
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                  ₹{pricingCalculation.grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Selected Menu Items Review */}
            <div className="border-t border-stone-800 pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Custom Menu Dish Roster ({selectedDishObjects.length} Selected)
              </span>

              <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1 text-xs">
                {selectedDishObjects.map(dish => (
                  <div
                    key={dish.id}
                    className="flex items-center justify-between py-1 border-b border-stone-900 text-stone-300"
                  >
                    <span className="truncate max-w-[220px]">{dish.name}</span>
                    <button
                      onClick={() => toggleDishInQuote(dish.id)}
                      className="text-stone-500 hover:text-red-400 transition-colors"
                      title="Remove dish"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="text-[11px] text-stone-400 space-y-1.5 pt-3 border-t border-stone-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Stainless steel / brass chafers & fuel included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Uniformed serving staff & station captains included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Pre-event food tasting session at Chembur kitchen</span>
              </div>
            </div>

            {/* Direct hotline */}
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-300 text-xs flex items-center justify-between">
              <span className="font-medium">Direct Booking Desk:</span>
              <a href="tel:+919820012345" className="font-bold hover:underline">
                +91 98200 12345
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
