import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChefHat,
  Award,
  ShieldCheck,
  Flame,
  Heart,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Hero Narrative */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <ChefHat className="w-4 h-4 text-amber-600" />
          <span>Our Culinary Roots & Journey</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          The Story of AZ Catering
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          How a passionate Mumbai cloud kitchen in Chembur evolved into a premier full-service banquet caterer, trusted for life’s grandest milestones.
        </p>
      </div>

      {/* Origin Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5 text-sm text-stone-700 leading-relaxed">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            From Belly Darbar to AZ Catering
          </h2>
          <p>
            The story began in Chembur, East Mumbai, where our flagship delivery kitchen—<strong>Belly Darbar</strong>—gained a devoted following for its authentic Hyderabadi dum biryani, smokey chicken bhuna rolls, and rich Mughlai gravies. Local families, corporates in BKC, and event hosts kept returning for the unforgettable depth of flavor.
          </p>
          <p>
            Recognizing that our hosts wanted more than just delivery boxes—they needed professional uniformed service, grand copper chafing displays, interactive live sigris, and bespoke menu curation—we founded <strong>AZ Catering</strong>.
          </p>
          <p>
            Today, AZ Catering combines the authentic, uncompromising kitchen recipes of Belly Darbar with white-glove hospitality management. We cater everything from intimate 25-guest terrace parties to grand 1,500+ guest royal wedding receptions.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-bold text-stone-900">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Halal Certified Meats
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> Strict Pure Veg Segregation
            </span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
              alt="AZ Catering Kitchen Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Our Commercial Kitchen</span>
                <p className="text-sm font-serif font-bold">Waman Patil Industrial Estate, Chembur East, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Culinary Pillars */}
      <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-3xl font-bold text-stone-900">Our Three Culinary Pillars</h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            The principles guiding every pot of biryani and every catered celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">Authentic Dum & Charcoal Sigris</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We never use artificial food colorings or pressure shortcuts. Our biryanis are sealed with whole wheat dough in earthen handis and gently steamed over slow burning coals.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">Hospital-Grade Kitchen Hygiene</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our central production facility in Chembur operates under strict FSSAI compliance, equipped with temperature-controlled chillers and daily sanitization protocols.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">Warm Mehmaannawaazi</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hospitality is in our blood. From personal chef consultations and tastings to attentive elderly guest table service, we treat your event like our own family wedding.
            </p>
          </div>
        </div>
      </div>

      {/* Tasting Room & Facility Callout */}
      <div className="bg-stone-950 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Taste Before You Book
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Visit Our Chembur Tasting Lounge
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Planning a wedding or corporate summit? Schedule a private menu tasting session. Sample our signature starters, curries, and biryanis while our event directors answer every operational question.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors"
          >
            Schedule Private Tasting
          </Link>
          <Link
            to="/packages"
            className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 font-semibold text-xs border border-stone-700 transition-colors"
          >
            View Banquet Menus
          </Link>
        </div>
      </div>
    </div>
  );
};
