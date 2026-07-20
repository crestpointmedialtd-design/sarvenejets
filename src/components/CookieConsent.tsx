import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dimmed backdrop */}
      <div className="absolute inset-0 bg-sarvene-obsidian/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="relative bg-white border border-sarvene-black/10 shadow-2xl max-w-lg w-full p-8 md:p-10">
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl text-sarvene-black font-normal tracking-tight mb-3">
            Legal Terms & Privacy
          </h2>
          <div className="w-12 h-0.5 bg-[#C9A84C]" />
        </div>

        {/* Content */}
        <p className="font-sans text-sm text-sarvene-black/60 leading-relaxed mb-6">
          We use cookies and similar technologies to enhance your experience on Sarvene Jets. By continuing to use our website, you agree to our use of cookies in accordance with our Privacy Policy and Terms of Service.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a 
            href="/privacy-policy" 
            className="font-sans text-xs text-sarvene-obsidian underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms-of-service" 
            className="font-sans text-xs text-sarvene-obsidian underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Terms of Service
          </a>
          <a 
            href="/cookie-policy" 
            className="font-sans text-xs text-sarvene-obsidian underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Cookie Policy
          </a>
        </div>

        {/* Checkbox */}
        <label className="flex items-start gap-3 mb-8 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-5 h-5 border-2 transition-all ${
              isAgreed 
                ? 'bg-[#C9A84C] border-[#C9A84C]' 
                : 'border-sarvene-black/20 group-hover:border-sarvene-black/40'
            }`}>
              {isAgreed && (
                <svg className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="font-sans text-xs text-sarvene-black/70 leading-relaxed">
            I agree to the Privacy Policy and Terms of Service
          </span>
        </label>

        {/* Continue Button */}
        <button
          onClick={handleAccept}
          disabled={!isAgreed}
          className="w-full py-3.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
          style={{ 
            backgroundColor: isAgreed ? '#C9A84C' : '#e5e5e5',
            color: isAgreed ? '#1a1a18' : '#999'
          }}
        >
          Continue to website
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
