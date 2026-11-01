import React, { useState } from 'react';
import { Sparkles, ExternalLink, X } from 'lucide-react';

interface AdPlaceholderProps {
  variant?: 'banner' | 'compact';
  title?: string;
  tagline?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  variant = 'compact',
  title = 'Mumbai Banquet & Event Venues Directory',
  tagline = 'Discover verified wedding lawns, luxury AC banquets & corporate conference halls partnered with AZ Catering across Mumbai & Navi Mumbai.'
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Sponsored Partner Showcase"
      className="w-full my-8 no-print transition-all"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl border border-amber-200/70 bg-gradient-to-r from-amber-50/80 via-orange-50/50 to-stone-100 p-4 sm:p-5 shadow-xs">
          {/* Subtle ad indicator */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-200/50 text-[11px] font-semibold tracking-wider uppercase text-amber-800/80">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Sponsored Culinary Partner Spotlight
            </span>
            <button
              onClick={() => setDismissed(true)}
              className="text-stone-400 hover:text-stone-700 transition-colors p-1"
              title="Dismiss announcement"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-700 shrink-0">
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900 flex items-center gap-1.5">
                  {title}
                  <span className="text-[10px] font-medium bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                    Featured
                  </span>
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 max-w-2xl leading-relaxed">
                  {tagline}
                </p>
              </div>
            </div>

            <a
              href="#/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-xs shrink-0"
            >
              <span>Explore Venue Partners</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
