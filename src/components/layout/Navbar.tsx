import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCatering } from '../../context/CateringContext';
import {
  Menu,
  X,
  Phone,
  Calculator,
  ClipboardList,
  Heart,
  ChevronRight,
  Flame
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { inquiries, favorites, quoteState } = useCatering();

  const totalInquiries = inquiries.length;
  const quoteItemsCount = quoteState.selectedDishes.length;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Feast Packages', path: '/packages' },
    { name: 'Services', path: '/services' },
    { name: 'Quote Builder', path: '/quote' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs no-print">
      {/* Top micro bar for phone & heritage note */}
      <div className="bg-stone-900 text-stone-300 text-[11px] py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-stone-300 hidden sm:inline">
              Culinary legacy rooted in Chembur, Mumbai · Serving Weddings, Banquets & House Parties across MMR
            </span>
            <span className="text-stone-300 sm:hidden">
              AZ Catering · Chembur, Mumbai
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919820012345"
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 98200 12345</span>
            </a>
            <span className="text-stone-600 hidden md:inline">|</span>
            <Link
              to="/my-inquiries"
              className="hidden md:flex items-center gap-1.5 text-stone-300 hover:text-amber-300 transition-colors"
            >
              <ClipboardList className="w-3 h-3 text-stone-400" />
              <span>Track Inquiries</span>
              {totalInquiries > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500 text-stone-950 font-bold">
                  {totalInquiries}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors uppercase">
                  AZ Catering
                </span>
              </div>
              <span className="block text-[10px] font-medium tracking-wider text-amber-800 uppercase">
                Royal Biryanis · Live Sigris · Banquets
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {navLinks.slice(0, 7).map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-700 font-semibold'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                )}
              </Link>
            ))}

            {/* More dropdown / secondary links */}
            <div className="relative group">
              <button className="flex items-center gap-1 py-1 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer">
                <span>More</span>
                <ChevronRight className="w-3.5 h-3.5 rotate-90 text-stone-400 group-hover:text-stone-700 transition-transform" />
              </button>
              <div className="absolute right-0 top-full pt-2 w-44 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-stone-200 p-2 space-y-1">
                  {navLinks.slice(7).map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        isActive(link.path)
                          ? 'bg-amber-50 text-amber-800 font-semibold'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    to="/my-inquiries"
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-stone-700 hover:bg-stone-50 border-t border-stone-100"
                  >
                    Track Saved Inquiries
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/menu"
              className="p-2 text-stone-600 hover:text-rose-600 hover:bg-stone-50 rounded-lg transition-colors relative"
              title="Saved Favorites"
              aria-label="Saved favorite dishes"
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-600" />
              )}
            </Link>

            <Link
              to="/quote"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <Calculator className="w-4 h-4" />
              <span>Quote Calculator</span>
              {quoteItemsCount > 0 && (
                <span className="bg-amber-800 text-amber-100 text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">
                  {quoteItemsCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/quote"
              className="p-2 text-amber-700 hover:bg-amber-50 rounded-lg relative"
              aria-label="Quote Builder"
            >
              <Calculator className="w-5 h-5" />
              {quoteItemsCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-600" />
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[113px] bottom-0 bg-stone-900/40 backdrop-blur-xs z-50">
          <div className="bg-white border-b border-stone-200 px-6 py-6 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl">
            <div className="space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-amber-50 text-amber-900 font-bold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <Link
                to="/my-inquiries"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-stone-50 text-stone-800 text-sm font-medium"
              >
                <span className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-amber-600" />
                  My Inquiries & Quotes
                </span>
                <span className="font-bold text-xs bg-stone-200 px-2 py-0.5 rounded-full">
                  {totalInquiries}
                </span>
              </Link>

              <Link
                to="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-600 text-white font-semibold text-sm shadow-sm"
              >
                <Calculator className="w-4 h-4" />
                <span>Build Custom Event Menu</span>
              </Link>

              <a
                href="tel:+919820012345"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-stone-300 text-stone-800 font-medium text-xs"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Catering Hotline: +91 98200 12345</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
