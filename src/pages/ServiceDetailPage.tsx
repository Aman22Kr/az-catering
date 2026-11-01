import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATERING_SERVICES, CATERING_PACKAGES } from '../data/cateringData';
import { useCatering } from '../context/CateringContext';
import {
  ArrowLeft,
  Users,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Calculator,
  ChevronRight,
  Phone
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { updateQuote } = useCatering();

  const service = CATERING_SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-stone-900 mb-2">Service Not Found</h2>
        <p className="text-xs text-stone-500 mb-6">
          The requested catering service could not be located.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Services</span>
        </Link>
      </div>
    );
  }

  const handleStartQuote = () => {
    updateQuote({ serviceType: service.id });
    navigate('/quote');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500">
        <Link to="/" className="hover:text-stone-900">Home</Link>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <Link to="/services" className="hover:text-stone-900">Services</Link>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <span className="font-semibold text-stone-900">{service.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-950 text-white min-h-[360px] sm:min-h-[440px] flex items-end p-6 sm:p-12 shadow-xl">
        <img
          src={service.bannerImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-400">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 uppercase tracking-wider">
              {service.pricingStartsAt}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Users className="w-4 h-4 text-amber-400" />
              {service.guestCapacity}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            {service.title}
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
            {service.shortDescription}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleStartQuote}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all active:scale-98"
            >
              <Calculator className="w-4 h-4" />
              <span>Configure Event Menu in Quote Builder</span>
            </button>

            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs backdrop-blur-xs border border-white/20 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Date Availability</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Col: Full Description & What We Provide */}
        <div className="lg:col-span-8 space-y-10">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">
              Overview & Banquet Experience
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Inclusions checklist */}
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/50 border border-amber-200/70">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>Full Service Inclusions</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-800">
              {service.whatWeProvide.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal events list */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Ideal Occasions
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.idealEvents.map((ev, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-800 text-xs font-medium border border-stone-200"
                >
                  {ev}
                </span>
              ))}
            </div>
          </div>

          {/* Photo Gallery preview */}
          {service.galleryImages.length > 0 && (
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
                Photo Highlights from Recent Banquets
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.galleryImages.map((imgUrl, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden aspect-4/3 bg-stone-100 shadow-xs">
                    <img
                      src={imgUrl}
                      alt={`${service.title} photo ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Col: Logistics & Direct CTA card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-6 sticky top-28">
            <h3 className="font-serif text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
              Service Logistics
            </h3>

            <div className="space-y-4 text-xs text-stone-600">
              <div>
                <span className="font-semibold text-stone-900 block mb-1">Guest Scale:</span>
                <span className="flex items-center gap-1.5 text-stone-700">
                  <Users className="w-4 h-4 text-amber-600" />
                  {service.guestCapacity}
                </span>
              </div>

              <div>
                <span className="font-semibold text-stone-900 block mb-1">Pricing Guideline:</span>
                <span className="text-amber-800 font-bold text-sm">
                  {service.pricingStartsAt}
                </span>
              </div>

              <div>
                <span className="font-semibold text-stone-900 block mb-1">Staffing Model:</span>
                <p className="text-stone-700 leading-relaxed">
                  {service.staffingDetails}
                </p>
              </div>

              <div>
                <span className="font-semibold text-stone-900 block mb-1">Kitchen Setup Lead Time:</span>
                <span className="flex items-center gap-1.5 text-stone-700">
                  <Clock className="w-4 h-4 text-amber-600" />
                  {service.setupTime}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-2.5">
              <button
                onClick={handleStartQuote}
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Total Event Estimate</span>
              </button>

              <a
                href="tel:+919820012345"
                className="w-full py-2.5 rounded-xl border border-stone-300 text-stone-800 font-semibold text-xs hover:bg-stone-50 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Catering Director</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
