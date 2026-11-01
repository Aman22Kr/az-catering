import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCatering } from '../context/CateringContext';
import confetti from 'canvas-confetti';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Users,
  MessageCircle,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const { submitInquiry } = useCatering();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Wedding Reception');
  const [eventDate, setEventDate] = useState(
    new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );
  const [guestCount, setGuestCount] = useState(100);
  const [venueLocation, setVenueLocation] = useState('Chembur, Mumbai');
  const [preferredPackage, setPreferredPackage] = useState('Gold Corporate & Celebration (₹799)');
  const [specialDietary, setSpecialDietary] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const trackingCode = submitInquiry({
        fullName,
        email: email || 'inquiry@azcatering.in',
        phone,
        eventType,
        eventDate,
        guestCount,
        venueLocation,
        preferredPackage,
        specialDietaryRequirements: specialDietary,
        additionalNotes: notes
      });

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });

      setGeneratedCode(trackingCode);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Prompt Event Consultations</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Connect with AZ Catering
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Book a private food tasting, check calendar availability, or request a customized banquet proposal for your celebration in Mumbai or Navi Mumbai.
        </p>
      </div>

      {/* Confirmation banner if submitted */}
      {generatedCode && (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-scale-up">
          <div>
            <div className="flex items-center gap-2 font-bold text-base text-emerald-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Inquiry Registered Successfully! Tracking Code: #{generatedCode}</span>
            </div>
            <p className="text-xs text-emerald-800 mt-1">
              Your inquiry details have been saved to your browser's inquiry tracker. Our senior catering director will call you shortly to confirm menu details.
            </p>
          </div>
          <Link
            to="/my-inquiries"
            className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors shrink-0"
          >
            Track Inquiries
          </Link>
        </div>
      )}

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Col: Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Event Inquiry & Tasting Request
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Fill in your event specs below. We reply within 3 business hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="e.g. Aman Kumar"
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+91 98200 12345"
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="aman600rocking@gmail.com"
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Event Type</label>
                <select
                  value={eventType}
                  onChange={e => setEventType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
                >
                  <option value="Wedding Reception">Wedding Reception</option>
                  <option value="Sangeet & Cocktails">Sangeet & Cocktail Night</option>
                  <option value="Corporate Gala">Corporate Gala / Summit</option>
                  <option value="House Party">Private House Party / Anniversary</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Bulk Biryani Deg Order">Bulk Biryani Deg Order (15-100+ guests)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Event Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={e => setEventDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Estimated Guests</label>
                <input
                  type="number"
                  min={20}
                  max={2500}
                  value={guestCount}
                  onChange={e => setGuestCount(Number(e.target.value))}
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Venue / City Zone</label>
                <input
                  type="text"
                  value={venueLocation}
                  onChange={e => setVenueLocation(e.target.value)}
                  placeholder="e.g. Chembur East"
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Preferred Package</label>
              <select
                value={preferredPackage}
                onChange={e => setPreferredPackage(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
              >
                <option value="Silver Classic Gathering (₹499)">Silver Classic Gathering (₹499 / plate)</option>
                <option value="Gold Corporate & Celebration (₹799)">Gold Corporate & Celebration (₹799 / plate)</option>
                <option value="Royal Diamond Wedding Banquet (₹1,299)">Royal Diamond Wedding Banquet (₹1,299 / plate)</option>
                <option value="The Shahi Mughlai Dastarkhwan (₹999)">The Shahi Mughlai Dastarkhwan (₹999 / plate)</option>
                <option value="Custom Bespoke Menu">Custom Bespoke Menu</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">
                Special Dietary or Setup Requirements
              </label>
              <input
                type="text"
                value={specialDietary}
                onChange={e => setSpecialDietary(e.target.value)}
                placeholder="e.g. 20 Jain plates required, Live Chaat counter wanted..."
                className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
              />
            </div>

            <div>
              <label className="font-semibold text-stone-700 block mb-1">Additional Notes</label>
              <textarea
                rows={3}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Share any special dish preferences or venue timing constraints..."
                className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-hidden focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Catering Inquiry'}</span>
            </button>
          </form>
        </div>

        {/* Right Col: Kitchen Location & Coverage Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Commercial kitchen card */}
          <div className="bg-stone-950 text-white p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Central Kitchen & Tasting Studio
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                AZ Catering Chembur
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Formerly Belly Darbar Kitchens
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Gala No. 11, 1st Floor, Waman Patil Industrial Estate, Opp. Shatabdi Hospital, Chembur East, Mumbai, Maharashtra 400071
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+919820012345" className="hover:text-amber-400">
                  +91 98200 12345 / +91 98200 67890
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:catering@azcatering.in" className="hover:text-amber-400">
                  catering@azcatering.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Open for Consultations: 10:00 AM – 11:30 PM (Daily)</span>
              </div>
            </div>

            {/* Direct WhatsApp button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919820012345?text=Hello%20AZ%20Catering,%20I%20would%20like%20to%20inquire%20about%20catering%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Service Area Coverage Map Representation */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Service Delivery Coverage
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              We cater across all major zones in the Mumbai Metropolitan Region (MMR) with insulated temperature-sealed fleet vehicles:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
              <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                <span className="font-bold block text-stone-900">Central Mumbai</span>
                <span className="text-[11px] text-stone-500">Chembur, Ghatkopar, Sion, Kurla</span>
              </div>
              <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                <span className="font-bold block text-stone-900">Western Suburbs</span>
                <span className="text-[11px] text-stone-500">Bandra, BKC, Andheri, Juhu</span>
              </div>
              <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                <span className="font-bold block text-stone-900">South Mumbai</span>
                <span className="text-[11px] text-stone-500">Colaba, Worli, Lower Parel</span>
              </div>
              <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                <span className="font-bold block text-stone-900">Navi Mumbai & Thane</span>
                <span className="text-[11px] text-stone-500">Vashi, Nerul, Belapur, Thane West</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
