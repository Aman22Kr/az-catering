import React, { createContext, useContext, useState, useEffect } from 'react';
import { EventInquiry, CustomQuoteState, Testimonial } from '../types';
import { TESTIMONIALS } from '../data/cateringData';

interface CateringContextType {
  favorites: string[];
  toggleFavorite: (dishId: string) => void;
  isFavorite: (dishId: string) => boolean;

  quoteState: CustomQuoteState;
  updateQuote: (partial: Partial<CustomQuoteState>) => void;
  toggleDishInQuote: (dishId: string) => void;
  toggleLiveStationInQuote: (stationId: string) => void;
  resetQuote: () => void;

  inquiries: EventInquiry[];
  submitInquiry: (inquiryData: Omit<EventInquiry, 'id' | 'trackingCode' | 'createdAt' | 'status'>) => string;
  cancelInquiry: (trackingCode: string) => void;

  reviews: Testimonial[];
  submitReview: (review: Omit<Testimonial, 'id' | 'date'>) => void;

  toast: { message: string; type: 'success' | 'info' | 'error' } | null;
  clearToast: () => void;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

const DEFAULT_QUOTE: CustomQuoteState = {
  guestCount: 75,
  selectedPackageId: 'package-gold-celebration',
  selectedDishes: [
    'starter-chimichurri-chicken',
    'starter-tandoori-mushroom-cheese',
    'biryani-hyderabadi-dum',
    'curry-butter-chicken-old-delhi',
    'curry-dal-makhani-darbar',
    'bread-garlic-butter-naan',
    'dessert-shahi-tukda'
  ],
  selectedLiveStations: ['live-chaat-station'],
  serviceType: 'wedding-catering',
  date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  location: 'Chembur, Mumbai'
};

const CateringContext = createContext<CateringContextType | undefined>(undefined);

export const CateringProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Favorites persistence
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('az_catering_favorites');
      return stored ? JSON.parse(stored) : ['biryani-hyderabadi-dum', 'starter-chimichurri-chicken'];
    } catch {
      return [];
    }
  });

  // Quote State persistence
  const [quoteState, setQuoteState] = useState<CustomQuoteState>(() => {
    try {
      const stored = localStorage.getItem('az_catering_quote_draft');
      return stored ? JSON.parse(stored) : DEFAULT_QUOTE;
    } catch {
      return DEFAULT_QUOTE;
    }
  });

  // Inquiries persistence
  const [inquiries, setInquiries] = useState<EventInquiry[]>(() => {
    try {
      const stored = localStorage.getItem('az_catering_inquiries');
      if (stored) return JSON.parse(stored);
      // Sample seed inquiry for demonstration
      return [
        {
          id: 'inq-seed-1',
          trackingCode: 'AZ-84920',
          fullName: 'Aman Kumar',
          email: 'aman600rocking@gmail.com',
          phone: '+91 98200 12345',
          eventType: 'Grand Wedding Reception',
          eventDate: '2026-11-20',
          guestCount: 150,
          venueLocation: 'Chembur Club, Mumbai',
          preferredPackage: 'Royal Diamond Wedding Banquet',
          selectedDishes: ['starter-chimichurri-chicken', 'biryani-hyderabadi-dum', 'curry-butter-chicken-old-delhi'],
          specialDietaryRequirements: 'Separate pure Jain counter for 25 guests',
          estimatedBudget: 194850,
          additionalNotes: 'Need live Kesari Jalebi station and welcome drinks setup.',
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'Menu Planning'
        }
      ];
    } catch {
      return [];
    }
  });

  // Reviews persistence
  const [reviews, setReviews] = useState<Testimonial[]>(() => {
    try {
      const stored = localStorage.getItem('az_catering_reviews');
      return stored ? JSON.parse(stored) : TESTIMONIALS;
    } catch {
      return TESTIMONIALS;
    }
  });

  // Toast feedback
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(prev => (prev?.message === message ? null : prev));
    }, 4000);
  };

  const clearToast = () => setToast(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('az_catering_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('LocalStorage error saving favorites', e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('az_catering_quote_draft', JSON.stringify(quoteState));
    } catch (e) {
      console.warn('LocalStorage error saving quote draft', e);
    }
  }, [quoteState]);

  useEffect(() => {
    try {
      localStorage.setItem('az_catering_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.warn('LocalStorage error saving inquiries', e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem('az_catering_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.warn('LocalStorage error saving reviews', e);
    }
  }, [reviews]);

  // Actions
  const toggleFavorite = (dishId: string) => {
    setFavorites(prev => {
      const exists = prev.includes(dishId);
      const updated = exists ? prev.filter(id => id !== dishId) : [...prev, dishId];
      showToast(exists ? 'Removed from saved favorites' : 'Saved to favorite dishes!', 'info');
      return updated;
    });
  };

  const isFavorite = (dishId: string) => favorites.includes(dishId);

  const updateQuote = (partial: Partial<CustomQuoteState>) => {
    setQuoteState(prev => ({ ...prev, ...partial }));
  };

  const toggleDishInQuote = (dishId: string) => {
    setQuoteState(prev => {
      const exists = prev.selectedDishes.includes(dishId);
      const updated = exists
        ? prev.selectedDishes.filter(id => id !== dishId)
        : [...prev.selectedDishes, dishId];
      return { ...prev, selectedDishes: updated };
    });
  };

  const toggleLiveStationInQuote = (stationId: string) => {
    setQuoteState(prev => {
      const exists = prev.selectedLiveStations.includes(stationId);
      const updated = exists
        ? prev.selectedLiveStations.filter(id => id !== stationId)
        : [...prev.selectedLiveStations, stationId];
      return { ...prev, selectedLiveStations: updated };
    });
  };

  const resetQuote = () => {
    setQuoteState(DEFAULT_QUOTE);
    showToast('Quote builder reset to standard package', 'info');
  };

  const submitInquiry = (data: Omit<EventInquiry, 'id' | 'trackingCode' | 'createdAt' | 'status'>): string => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const trackingCode = `AZ-${randomSuffix}`;
    const newInquiry: EventInquiry = {
      ...data,
      id: `inq-${Date.now()}`,
      trackingCode,
      createdAt: new Date().toISOString(),
      status: 'In Review'
    };

    setInquiries(prev => [newInquiry, ...prev]);
    showToast(`Inquiry #${trackingCode} submitted! We will contact you within 3 business hours.`, 'success');
    return trackingCode;
  };

  const cancelInquiry = (trackingCode: string) => {
    setInquiries(prev => prev.filter(i => i.trackingCode !== trackingCode));
    showToast(`Inquiry ${trackingCode} cancelled`, 'info');
  };

  const submitReview = (reviewData: Omit<Testimonial, 'id' | 'date'>) => {
    const newReview: Testimonial = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: 'Just now'
    };
    setReviews(prev => [newReview, ...prev]);
    showToast('Thank you! Your catering review has been posted.', 'success');
  };

  return (
    <CateringContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        quoteState,
        updateQuote,
        toggleDishInQuote,
        toggleLiveStationInQuote,
        resetQuote,
        inquiries,
        submitInquiry,
        cancelInquiry,
        reviews,
        submitReview,
        toast,
        clearToast,
        showToast
      }}
    >
      {children}
    </CateringContext.Provider>
  );
};

export const useCatering = () => {
  const context = useContext(CateringContext);
  if (!context) {
    throw new Error('useCatering must be used within a CateringProvider');
  }
  return context;
};
