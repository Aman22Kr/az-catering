import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  ShieldCheck,
  Award,
  ChevronRight,
  Send
} from 'lucide-react';
import { AdPlaceholder } from '../common/AdPlaceholder';

export const Footer: React.FC = () => {
  return (
    <>
      {/* Global advertisement placeholder section above footer as required */}
      <AdPlaceholder
        title="Banquet Venues & Event Halls Partner Network"
        tagline="Looking for an event venue? Browse verified banquet halls, lawn grounds, and corporate spaces partnered with AZ Catering across Mumbai & Navi Mumbai."
      />

      <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-stone-800/80">
            {/* Col 1: Brand & Story */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-lg">
                  <Flame className="w-6 h-6 text-amber-100" />
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold tracking-tight text-white uppercase">
                    AZ Catering
                  </span>
                  <span className="block text-[10px] font-semibold tracking-wider text-amber-400 uppercase">
                    Royal Indian Feasts & Event Banquets
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
                Carrying forward the beloved culinary soul of Belly Darbar Chembur into an elevated, grand-scale catering house. We deliver slow-dum Hyderabadi biryanis, live charcoal sigri tandoors, and royal Awadhi banquets across Mumbai and Navi Mumbai.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-400">
                <span className="flex items-center gap-1.5 text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  100% Halal & Pure Veg Segregated
                </span>
                <span className="flex items-center gap-1.5 text-stone-300">
                  <Award className="w-4 h-4 text-amber-400" />
                  FSSAI Certified Commercial Kitchen
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/" className="text-stone-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-stone-600" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="text-stone-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-stone-600" /> Full Catering Menu
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="text-stone-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-stone-600" /> Feast Packages
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="text-stone-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-stone-600" /> Custom Quote Builder
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-stone-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-stone-600" /> All Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-stone-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-stone-600" /> Event Photo Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Catering Types */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Catering Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/services/wedding-catering" className="text-stone-400 hover:text-white transition-colors">
                    Grand Wedding Banquets
                  </Link>
                </li>
                <li>
                  <Link to="/services/corporate-catering" className="text-stone-400 hover:text-white transition-colors">
                    Corporate Summits & Galas
                  </Link>
                </li>
                <li>
                  <Link to="/services/house-party-catering" className="text-stone-400 hover:text-white transition-colors">
                    House Parties & Birthdays
                  </Link>
                </li>
                <li>
                  <Link to="/services/live-food-stations" className="text-stone-400 hover:text-white transition-colors">
                    Live Charcoal & Chaat Stalls
                  </Link>
                </li>
                <li>
                  <Link to="/services/bulk-deg-delivery" className="text-stone-400 hover:text-white transition-colors">
                    Bulk Biryani Deg Deliveries
                  </Link>
                </li>
                <li>
                  <Link to="/my-inquiries" className="text-stone-400 hover:text-amber-400 transition-colors">
                    Track Saved Quote Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Kitchen & Contact Info */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Commercial Kitchen & Office
              </h4>
              <div className="space-y-2.5 text-xs text-stone-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    Gala No. 11, 1st Floor, Waman Patil Industrial Estate, Opp. Shatabdi Hospital, Chembur East, Mumbai, Maharashtra 400071
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href="tel:+919820012345" className="hover:text-white">
                    +91 98200 12345 / +91 98200 67890
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <a href="mailto:catering@azcatering.in" className="hover:text-white">
                    catering@azcatering.in
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Operating Hours: 10:00 AM – 11:30 PM (All 7 Days)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div>
              <p>
                © {new Date().getFullYear()} AZ Catering. Formerly Belly Darbar. Reimagined by{' '}
                <a
                  href="https://github.com/Aman22kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Aman22kr
                </a>
                .
              </p>
              <p className="text-[11px] text-stone-600 mt-0.5">
                Client preferences and quote drafts are safely preserved in browser localStorage.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <Link to="/about" className="hover:text-stone-300 transition-colors">About Us</Link>
              <span>·</span>
              <Link to="/faq" className="hover:text-stone-300 transition-colors">FAQs</Link>
              <span>·</span>
              <Link to="/contact" className="hover:text-stone-300 transition-colors">Book Tasting</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
