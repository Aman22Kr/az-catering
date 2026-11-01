import React, { useState } from 'react';
import { useCatering } from '../context/CateringContext';
import { Star, MessageSquarePlus, CheckCircle2, Heart, Award, ShieldCheck, Sparkles } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const { reviews, submitReview } = useCatering();

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [clientName, setClientName] = useState('');
  const [event, setEvent] = useState('Wedding Reception (300 Guests)');
  const [location, setLocation] = useState('Chembur, Mumbai');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [dishesInput, setDishesInput] = useState('Hyderabadi Chicken Biryani, Chimichurri Chicken Tikka');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !comment.trim()) return;

    submitReview({
      clientName,
      event,
      location,
      rating,
      comment,
      dishesMentioned: dishesInput.split(',').map(s => s.trim()).filter(Boolean)
    });

    setClientName('');
    setComment('');
    setShowReviewForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Page Header & Scorecard */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 border-b border-stone-200 pb-10">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Verified Host Testimonials</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
            Client Reviews & Experiences
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            Real feedback from couples, corporate leaders, and families who trusted AZ Catering (formerly Belly Darbar) for their most important gatherings.
          </p>
        </div>

        {/* Aggregate Scorecard Card */}
        <div className="bg-stone-950 text-white p-6 rounded-2xl border border-stone-800 shadow-xl flex items-center gap-6 shrink-0">
          <div className="text-center pr-6 border-r border-stone-800">
            <span className="font-serif text-4xl font-bold text-amber-400 block">4.9</span>
            <div className="flex items-center justify-center gap-0.5 text-amber-400 text-xs mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-[10px] text-stone-400 block mt-1">Based on 180+ Reviews</span>
          </div>

          <div className="space-y-1.5 text-xs text-stone-300">
            <div>
              <span className="text-stone-400">Food Quality: </span>
              <strong className="text-amber-300">4.9 / 5.0</strong>
            </div>
            <div>
              <span className="text-stone-400">Punctuality: </span>
              <strong className="text-amber-300">5.0 / 5.0</strong>
            </div>
            <div>
              <span className="text-stone-400">Hospitality Staff: </span>
              <strong className="text-amber-300">4.8 / 5.0</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Button to Trigger Review Submission */}
      <div className="flex items-center justify-between no-print">
        <span className="text-xs text-stone-500">
          Showing <strong>{reviews.length}</strong> verified host reviews
        </span>

        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
          <MessageSquarePlus className="w-4 h-4" />
          <span>{showReviewForm ? 'Close Form' : 'Submit Event Feedback'}</span>
        </button>
      </div>

      {/* Review Submission Form Modal / Drawer */}
      {showReviewForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-300 shadow-lg space-y-4 animate-scale-up no-print max-w-2xl mx-auto"
        >
          <div className="border-b border-stone-100 pb-3">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Share Your Catering Experience
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Your feedback is saved locally and displayed in the review catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="e.g. Radhika Sharma"
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">Star Rating</label>
              <select
                value={rating}
                onChange={e => setRating(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
              >
                <option value={5}>5 Stars - Exceptional Taste & Service</option>
                <option value={4}>4 Stars - Great Experience</option>
                <option value={3}>3 Stars - Satisfactory</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">Event Type & Guests</label>
              <input
                type="text"
                value={event}
                onChange={e => setEvent(e.target.value)}
                placeholder="e.g. Grand Wedding Reception (400 Guests)"
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">Venue / City Location</label>
              <input
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="e.g. Chembur Gymkhana, Mumbai"
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-700 block mb-1">
              Signature Dishes That Stood Out
            </label>
            <input
              type="text"
              value={dishesInput}
              onChange={e => setDishesInput(e.target.value)}
              placeholder="e.g. Chimichurri Chicken, Hyderabadi Dum Biryani, Shahi Tukda"
              className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-700 block mb-1">Your Detailed Review *</label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Tell other hosts about food temperature, portion sizes, staff attentiveness..."
              className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              Post Review
            </button>
          </div>
        </form>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map(item => (
          <div
            key={item.id}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-stone-400">{item.date}</span>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed italic mb-4">
                "{item.comment}"
              </p>

              {item.dishesMentioned && item.dishesMentioned.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.dishesMentioned.map((dish, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-amber-50 text-amber-900 font-medium"
                    >
                      ★ {dish}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <h4 className="text-xs font-bold text-stone-900">{item.clientName}</h4>
              <span className="text-[11px] text-stone-500 block">{item.event} · {item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
