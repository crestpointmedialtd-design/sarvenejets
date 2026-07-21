import Navigation from '../components/Navigation';
import BookingEstimator from '../sections/BookingEstimator';
import Contact from '../sections/Contact';
import Newsletter from '../sections/Newsletter';
import Footer from '../sections/Footer';
import ScrollToTop from '../components/ScrollToTop';

function CharterEstimatesPage() {
  return (
    <div className="bg-sarvene-cream min-h-screen">
      <Navigation />
      <main className="pt-24">
        <BookingEstimator />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default CharterEstimatesPage;
