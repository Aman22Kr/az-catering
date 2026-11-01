import React from 'react';
import { Link } from 'react-router-dom';
import { CATERING_SERVICES } from '../data/cateringData';
import { useCatering } from '../context/CateringContext';
import {
  Crown,
  Briefcase,
  Home,
  Flame,
  Package,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Crown: <Crown className="w-6 h-6 text-amber-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-amber-600" />,
  Home: <Home className="w-6 h-6 text-amber-600" />,
  Flame: <Flame className="w-6 h-6 text-amber-600" />,
  Package: <Package className="w-6 h-6 text-amber-600" />
};

export const ServicesPage: React.FC = () => {
  const { updateQuote } = useCatering();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Full-Spectrum Event Hospitality</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Catering Services & Event Production
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Whether you need a compact 20-person house party setup or an opulent 1,500-guest royal wedding banquet with live sigris and dedicated service captains, AZ Catering executes flawlessly.
        </p>
      </div>

      {/* Services List / Cards */}
      <div className="space-y-12">
        {CATERING_SERVICES.map((service, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-stretch rounded-3xl bg-white border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image banner & overlay */}
              <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[420px] bg-stone-100 overflow-hidden">
                <img
                  src={service.bannerImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-stone-950/80 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{service.guestCapacity}</span>
                </div>
              </div>

              {/* Service details */}
              <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80">
                      {iconMap[service.iconName] || <Crown className="w-6 h-6 text-amber-600" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-700 block uppercase tracking-wider">
                        {service.pricingStartsAt}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-stone-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">
                    {service.fullDescription}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                      What AZ Catering Provides:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {service.whatWeProvide.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Setup & staffing specs */}
                  <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-[11px] text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {service.setupTime}
                    </span>
                    <span>·</span>
                    <span>{service.staffingDetails}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors"
                  >
                    <span>Detailed Inclusions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/quote"
                    onClick={() => updateQuote({ serviceType: service.id })}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 transition-colors"
                  >
                    <span>Instant Quote for This Service</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
