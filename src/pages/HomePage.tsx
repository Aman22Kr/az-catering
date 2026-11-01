import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCatering } from '../context/CateringContext';
import { MENU_ITEMS, CATERING_PACKAGES, CATERING_SERVICES, TESTIMONIALS } from '../data/cateringData';
import { DishCard } from '../components/common/DishCard';
import { DishDetailModal } from '../components/common/DishDetailModal';
import { VideoPlaceholder } from '../components/common/VideoPlaceholder';
import { MenuItem } from '../types';
import {
  Flame,
  Award,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Heart,
  ChefHat
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { quoteState, updateQuote } = useCatering();
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [guestCountInput, setGuestCountInput] = useState(quoteState.guestCount);

  const signatureDishes = MENU_ITEMS.filter(item => item.isChefsSpecial || item.isPopular).slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-950 text-white pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Background ambient image with rich dark overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=80"
            alt="Royal Banquet Feast"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            {/* Heritage Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Formerly Belly Darbar · Now AZ Catering</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-amber-50 leading-[1.15]">
              Royal Indian Feasts. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Sizzling Live Sigris.
              </span> <br />
              Unforgettable Banquets.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
              From slow-simmered Awadhi dum biryanis sealed in traditional handis to live charcoal tandoor skewers and luxury wedding buffets—AZ Catering crafts memorable culinary experiences across Mumbai and Navi Mumbai.
            </p>

            {/* Quick Action / Guest Estimator Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-stone-800 backdrop-blur-md shadow-2xl max-w-xl">
              <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Fast Event Cost Estimator</span>
                <span className="text-stone-400 font-normal">From ₹499 / plate</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1">
                  <label htmlFor="hero-guests" className="sr-only">Guest Count</label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="hero-guests"
                      type="number"
                      min={25}
                      max={2000}
                      value={guestCountInput}
                      onChange={e => setGuestCountInput(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-800/90 border border-stone-700 text-white text-sm focus:border-amber-500 focus:outline-hidden"
                      placeholder="Number of Guests (e.g. 100)"
                    />
                  </div>
                </div>

                <Link
                  to="/quote"
                  onClick={() => updateQuote({ guestCount: guestCountInput })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all active:scale-98 shrink-0"
                >
                  <span>Build Custom Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-4 mt-3 text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Tasting Session
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Instant Per-Plate Quote
                </span>
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800/80 text-left">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 block">1,250+</span>
                <span className="text-xs text-stone-400 font-medium">Banquets & Events</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 block">4.9 / 5</span>
                <span className="text-xs text-stone-400 font-medium">Verified Reviews</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 block">100%</span>
                <span className="text-xs text-stone-400 font-medium">Halal & Jain Segregation</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 block">25 – 2,000+</span>
                <span className="text-xs text-stone-400 font-medium">Guest Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Transition / Heritage Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-amber-50/60 border border-amber-200/80 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-amber-600" />
                <span>The Culinary Legacy of Belly Darbar Chembur</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                Born in Chembur, Perfected for Mumbai’s Grandest Occasions.
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed">
                For years, Belly Darbar earned the affection of food connoisseurs with our rich Hyderabadi biryanis, signature Chimichurri Chicken, and slow-braised Dal Makhani.
              </p>

              <p className="text-sm text-stone-700 leading-relaxed">
                Under <strong>AZ Catering</strong>, we have scaled those cherished family recipes into a full-service banquet catering house. We bring professional uniformed captains, brass chafing setups, live tandoor sigris, and bespoke menus to weddings, corporate galas, and house parties.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-stone-800">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-amber-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>FSSAI Certified Kitchen · Chembur</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-amber-200">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Executive Chefs with 15+ Yrs Experience</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                  alt="AZ Catering Kitchen Cooking"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-300 block">Behind The Scenes</span>
                    <h3 className="font-serif text-base font-bold">Traditional Handcrafted Dum & Live Fire Cooking</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Curated Event Solutions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Catering Designed for Every Milestone
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 uppercase tracking-wider"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATERING_SERVICES.slice(0, 3).map(service => (
            <div
              key={service.id}
              className="group flex flex-col bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100">
                <img
                  src={service.bannerImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold">
                  {service.guestCapacity}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-amber-700 block mb-1">
                    {service.pricingStartsAt}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors flex items-center gap-1"
                  >
                    <span>Explore Package Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/quote"
                    onClick={() => updateQuote({ serviceType: service.id })}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors"
                  >
                    Quote This
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Specialties (Biryanis, Kebabs & Mains) */}
      <section className="bg-stone-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Signature Menu Creations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Dishes Guests Remember Forever
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
            >
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureDishes.map(dish => (
              <DishCard
                key={dish.id}
                item={dish}
                onOpenDetails={item => setSelectedDish(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Feast Packages Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
            Pre-Curated Catering Menus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Transparent Per-Plate Feasts
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Complete turnkey catering including chafing warmers, serving staff, and fresh preparations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATERING_PACKAGES.slice(0, 3).map((pkg, idx) => {
            const isFeatured = idx === 1; // Gold celebration is featured
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-stone-950 text-white shadow-2xl ring-2 ring-amber-500 scale-102 lg:scale-105'
                    : 'bg-white text-stone-900 border border-stone-200 shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${
                    isFeatured ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-white'
                  }`}>
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-2xl font-bold">{pkg.name}</h3>
                  <p className={`text-xs mt-1.5 leading-relaxed ${isFeatured ? 'text-stone-300' : 'text-stone-600'}`}>
                    {pkg.tagline}
                  </p>

                  <div className="my-6 pb-6 border-b border-stone-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl font-bold text-amber-500">₹{pkg.pricePerPlate}</span>
                      <span className={`text-xs ${isFeatured ? 'text-stone-400' : 'text-stone-500'}`}>/ guest + tax</span>
                    </div>
                    <span className={`text-[11px] block mt-1 ${isFeatured ? 'text-stone-400' : 'text-stone-500'}`}>
                      Min. {pkg.minGuests} guests
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isFeatured ? 'text-amber-400' : 'text-amber-800'}`}>
                      Included Course Breakdown
                    </span>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{pkg.inclusions.starters} Starters & Tandoor Kebabs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{pkg.inclusions.mainCurries} Royal Main Curries (Veg & Non-Veg)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{pkg.inclusions.biryaniRice} Signature Biryani & Rice Varieties</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{pkg.inclusions.desserts} Royal Desserts</span>
                      </li>
                      {pkg.inclusions.liveStationsIncluded ? (
                        <li className="flex items-center gap-2 font-semibold text-amber-400">
                          <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{pkg.inclusions.liveStationsIncluded} Live Food Station Included!</span>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200/20 space-y-2">
                  <Link
                    to="/quote"
                    onClick={() => updateQuote({ selectedPackageId: pkg.id })}
                    className={`block w-full py-3 rounded-xl font-bold text-xs text-center transition-all ${
                      isFeatured
                        ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md'
                        : 'bg-stone-900 hover:bg-amber-600 text-white'
                    }`}
                  >
                    Select & Customize This Menu
                  </Link>

                  <Link
                    to="/packages"
                    className={`block text-center text-xs py-1 transition-colors ${
                      isFeatured ? 'text-stone-400 hover:text-white' : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    View Sample Menu Items
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Presentation Section (Mandatory YouTube placeholder) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
            Visual Experience
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            Witness The Royal AZ Deg Unsealing
          </h2>
          <p className="text-xs text-stone-600 mt-1 max-w-lg mx-auto">
            See how our master chefs prep charcoal sigris, break dough seals on dum handis, and serve royal banquets.
          </p>
        </div>

        <VideoPlaceholder
          title="AZ Catering Kitchen Showcase: Royal Dum Biryani & Sigri Tandoor"
          subtitle="Filmed on location at our Chembur Commercial Kitchen & Private Banquet in Mumbai"
          duration="03:45"
          aspectRatio="16/9"
        />
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-stone-50 py-16 sm:py-20 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                Client Experiences
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                Praise From Mumbai Hosts
              </h2>
            </div>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 uppercase tracking-wider"
            >
              <span>Read All Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map(item => (
              <div
                key={item.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-400">{item.date}</span>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{item.clientName}</h4>
                    <span className="text-[11px] text-stone-500 block">{item.event} · {item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dish Detail Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
};
