import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from '../sections/Footer';
import ScrollToTop from './ScrollToTop';
import { ArrowLeft } from 'lucide-react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  if (typeof document !== 'undefined') {
    document.title = `${title} | Sarvene Jets`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      {/* Back arrow */}
      <button
        onClick={handleBack}
        className="fixed top-24 left-6 lg:left-10 z-40 flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-black/40 hover:text-sarvene-obsidian transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back
      </button>
      <main className="pt-24">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PageLayout;
