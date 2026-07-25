import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Fleet from './sections/Fleet';
import EmptyLegs from './sections/EmptyLegs';
import JetCard from './sections/JetCard';
import Experience from './sections/Experience';
import Network from './sections/Network';
import Careers from './sections/Careers';
import BookingEstimator from './sections/BookingEstimator';
import Contact from './sections/Contact';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';
import PopularRoutes from './sections/PopularRoutes';
import CharterEstimatesPage from './pages/CharterEstimatesPage';
import BeyondPage from './pages/BeyondPage';

import InsightsIndex from './pages/insights/index';

// Route pages
import RoutesIndex from './pages/routes/index';
import LagosAbuja from './pages/routes/lagos-to-abuja';
import LagosLondon from './pages/routes/lagos-to-london';
import LagosDubai from './pages/routes/lagos-to-dubai';
import LagosAccra from './pages/routes/lagos-to-accra';
import AbujaToNairobi from './pages/routes/abuja-to-nairobi';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import CostLagosLondon from './pages/insights/cost-lagos-to-london';
import CostLagosDubai from './pages/insights/cost-lagos-to-dubai';
import HowCharterWorks from './pages/insights/how-private-jet-charter-works-nigeria';
import JetVsFirstClass from './pages/insights/private-jet-vs-first-class';
import BestRoutes from './pages/insights/best-private-jet-routes-lagos';
import FloatingFleetVsHomeBased from './pages/insights/floating-fleet-vs-home-based-operators';
import AccessStopsBeingAboutMoney from './pages/insights/access-stops-being-about-money';

import ScrollToTop from './components/ScrollToTop';
import GlobalScrollToTop from './components/GlobalScrollToTop';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-sarvene-cream min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <EmptyLegs />
        <JetCard />
        <Experience />
        <Network />
        <PopularRoutes />
        <Careers />
        <BookingEstimator />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <GlobalScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charterestimates" element={<CharterEstimatesPage />} />
        <Route path="/beyond" element={<BeyondPage />} />

        {/* Route pages */}
        <Route path="/routes" element={<RoutesIndex />} />
        <Route path="/routes/lagos-to-abuja" element={<LagosAbuja />} />
        <Route path="/routes/lagos-to-london" element={<LagosLondon />} />
        <Route path="/routes/lagos-to-dubai" element={<LagosDubai />} />
        <Route path="/routes/lagos-to-accra" element={<LagosAccra />} />
        <Route path="/routes/abuja-to-nairobi" element={<AbujaToNairobi />} />

        {/* Insights index */}
        <Route path="/insights" element={<InsightsIndex />} />

        {/* Legal pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Insights / Blog pages */}
        <Route path="/insights" element={<InsightsIndex />} />
        <Route path="/insights/cost-private-jet-lagos-to-london" element={<CostLagosLondon />} />
        <Route path="/insights/cost-private-jet-lagos-to-dubai" element={<CostLagosDubai />} />
        <Route path="/insights/how-private-jet-charter-works-nigeria" element={<HowCharterWorks />} />
        <Route path="/insights/private-jet-vs-first-class" element={<JetVsFirstClass />} />
        <Route path="/insights/best-private-jet-routes-lagos" element={<BestRoutes />} />
        <Route path="/insights/floating-fleet-vs-home-based-operators" element={<FloatingFleetVsHomeBased />} />
        <Route path="/insights/access-stops-being-about-money" element={<AccessStopsBeingAboutMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
