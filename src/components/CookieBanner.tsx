import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[100] bg-card border border-border rounded-xl shadow-2xl p-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">We use cookies</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to improve your experience on our site and analyze web traffic. By clicking "Accept", you agree to our use of cookies.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={acceptCookies}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium py-2 px-4 rounded-md w-full transition-colors"
            >
              Accept Cookies
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
