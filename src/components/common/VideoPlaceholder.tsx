import React, { useState } from 'react';
import { Play, Volume2, Maximize2, CheckCircle, Info } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  subtitle?: string;
  duration?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9';
  posterUrl?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = 'AZ Catering Royal Deg Unsealing & Live Charcoal Tandoor Showcase',
  subtitle = 'Behind the scenes at Chembur culinary kitchen & live banquet events in Mumbai',
  duration = '04:18',
  aspectRatio = '16/9',
  posterUrl = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80'
}) => {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  return (
    <div className="w-full my-6">
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-xl group"
        style={{ aspectRatio: aspectRatio === '16/9' ? '16 / 9' : '4 / 3' }}
      >
        {/* Background Poster Image */}
        <img
          src={posterUrl}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isPlayingDemo ? 'scale-105 filter brightness-75' : 'group-hover:scale-102 brightness-90'
          }`}
          loading="lazy"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent pointer-events-none" />

        {/* Top bar branding placeholder */}
        <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white/90 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs text-white shadow-md">
              AZ
            </div>
            <span className="text-xs sm:text-sm font-medium tracking-wide drop-shadow-md">
              AZ Catering Kitchen Showcase
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-black/60 text-white/90 backdrop-blur-xs border border-white/10">
              {duration}
            </span>
          </div>
        </div>

        {/* Center Video Play Action */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          {!isPlayingDemo ? (
            <button
              onClick={() => setIsPlayingDemo(true)}
              className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95"
              aria-label="Play video presentation"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
              <span className="absolute -inset-1 rounded-full border-2 border-amber-400/50 animate-ping pointer-events-none" />
            </button>
          ) : (
            <div className="max-w-md p-5 rounded-xl bg-stone-900/90 backdrop-blur-md border border-amber-500/30 text-white animate-fade-in">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-2 justify-center">
                <CheckCircle className="w-4 h-4" />
                <span>Video Presentation Showcase</span>
              </div>
              <h5 className="font-serif text-base sm:text-lg text-amber-50 mb-1">{title}</h5>
              <p className="text-xs text-stone-300 leading-relaxed mb-3">
                Experience our signature dum technique, slow-cooked Hyderabadi biryanis, and live flame tandoor counters in action.
              </p>
              <button
                onClick={() => setIsPlayingDemo(false)}
                className="text-xs font-semibold px-4 py-1.5 rounded-lg bg-amber-500 text-stone-950 hover:bg-amber-400 transition-colors"
              >
                Reset Preview
              </button>
            </div>
          )}
        </div>

        {/* Bottom Video Metadata & Fake Media Controls */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-10 text-white">
          <div className="mb-2">
            <h4 className="text-sm sm:text-base font-semibold text-white drop-shadow-md">
              {title}
            </h4>
            <p className="text-xs text-stone-300 line-clamp-1 drop-shadow-sm">
              {subtitle}
            </p>
          </div>

          {/* Progress Bar mockup */}
          <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mb-3">
            <div
              className="bg-amber-500 h-full rounded-full transition-all duration-500"
              style={{ width: isPlayingDemo ? '65%' : '0%' }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400">
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-stone-300 flex items-center gap-1">
                <Info className="w-3 h-3 text-amber-400" />
                High-Definition 1080p Event Preview
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Volume2 className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
              <Maximize2 className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
