import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from '../data/cateringData';
import { ChevronDown, HelpCircle, Search, Phone, Mail, ArrowRight } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter(faq => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <HelpCircle className="w-4 h-4 text-amber-600" />
          <span>Everything You Need to Know</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed max-w-xl mx-auto">
          Clear answers regarding tasting sessions, minimum guest thresholds, live station logistics, and catering contracts.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-lg mx-auto">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search question (e.g. tasting, minimum guests, cancellation)..."
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-amber-500 shadow-xs"
        />
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map(faq => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs transition-colors"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Card */}
      <div className="bg-amber-50/80 rounded-3xl p-8 border border-amber-200 text-center space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          Have a Custom Request or Unique Venue Requirement?
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
          Our catering directors are available 7 days a week to discuss customized menus, lawn setups, and destination events.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-1.5"
          >
            <span>Send Direct Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="tel:+919820012345"
            className="px-5 py-2.5 rounded-xl bg-white border border-amber-300 text-stone-900 font-semibold text-xs hover:bg-amber-100 transition-colors"
          >
            Call: +91 98200 12345
          </a>
        </div>
      </div>
    </div>
  );
};
