export type DietaryType = 'veg' | 'non-veg' | 'halal' | 'jain-friendly';

export type SpiceLevel = 'Mild' | 'Medium' | 'Spicy' | 'Royal Fiery';

export interface MenuItem {
  id: string;
  name: string;
  category: 'biryani' | 'starters' | 'curries' | 'breads' | 'live-counters' | 'desserts' | 'beverages';
  subCategory?: string;
  dietary: DietaryType;
  spiceLevel: SpiceLevel;
  pricePerPlateEst: number; // in INR
  description: string;
  image: string;
  isChefsSpecial?: boolean;
  isPopular?: boolean;
  ingredients: string[];
  allergens?: string[];
  portionServing: string;
}

export interface CateringPackage {
  id: string;
  name: string;
  tagline: string;
  pricePerPlate: number; // in INR
  minGuests: number;
  badge?: string;
  recommendedFor: string;
  inclusions: {
    welcomeDrinks: number;
    starters: number;
    mainCurries: number;
    biryaniRice: number;
    breads: number;
    desserts: number;
    liveStationsIncluded?: number;
  };
  sampleItems: string[];
  features: string[];
}

export interface CateringService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  bannerImage: string;
  galleryImages: string[];
  guestCapacity: string;
  pricingStartsAt: string;
  idealEvents: string[];
  whatWeProvide: string[];
  staffingDetails: string;
  setupTime: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  event: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  dishesMentioned: string[];
  avatar?: string;
}

export interface EventInquiry {
  id: string;
  trackingCode: string;
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  venueLocation: string;
  preferredPackage?: string;
  selectedDishes?: string[];
  specialDietaryRequirements?: string;
  estimatedBudget?: number;
  additionalNotes?: string;
  createdAt: string;
  status: 'In Review' | 'Menu Planning' | 'Tasting Scheduled' | 'Confirmed';
}

export interface CustomQuoteState {
  guestCount: number;
  selectedPackageId: string;
  selectedDishes: string[]; // dish IDs
  selectedLiveStations: string[];
  serviceType: string;
  date: string;
  location: string;
}
