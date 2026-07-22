import { useSearchParams } from 'react-router';
import Navigation from '../components/Navigation';
import BookingEstimator from '../sections/BookingEstimator';
import Contact from '../sections/Contact';
import Newsletter from '../sections/Newsletter';
import Footer from '../sections/Footer';
import ScrollToTop from '../components/ScrollToTop';

function CharterEstimatesPage() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const date = searchParams.get('date') || '';
  const passengers = searchParams.get('passengers') || '';

  // Format route for Contact form
  const route = from && to ? `${from} to ${to}` : '';

  return (
    <div className="bg-sarvene-cream min-h-screen">
      <Navigation />
      <main className="pt-24">
        <BookingEstimator prefillFrom={from} prefillTo={to} prefillDate={date} />
        <Contact prefillRoute={route} prefillDate={date} prefillPassengers={passengers} />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default CharterEstimatesPage;
