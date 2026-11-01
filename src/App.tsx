/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CateringProvider, useCatering } from './context/CateringContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { PackagesPage } from './pages/PackagesPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { QuoteBuilderPage } from './pages/QuoteBuilderPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { MyInquiriesPage } from './pages/MyInquiriesPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Global Toast notification banner
function ToastNotification() {
  const { toast, clearToast } = useCatering();

  if (!toast) return null;

  return (
    <aside
      aria-label="Notification alert"
      className="fixed bottom-6 right-6 z-50 max-w-md bg-stone-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-stone-700 flex items-center justify-between gap-3 animate-scale-up no-print"
    >
      <div className="flex items-center gap-2.5 text-xs">
        {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
        {toast.type === 'info' && <Info className="w-4 h-4 text-amber-400 shrink-0" />}
        {toast.type === 'error' && <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />}
        <span className="font-medium">{toast.message}</span>
      </div>

      <button
        onClick={clearToast}
        className="text-stone-400 hover:text-white transition-colors p-1"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}

export default function App() {
  return (
    <HashRouter>
      <CateringProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/quote" element={<QuoteBuilderPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/my-inquiries" element={<MyInquiriesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <ToastNotification />
        </div>
      </CateringProvider>
    </HashRouter>
  );
}
