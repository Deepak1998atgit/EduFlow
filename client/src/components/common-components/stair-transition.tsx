import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Stairs from "./stairs";

const StairTransition: React.FC = () => {
  const location = useLocation();
  const [showStairs, setShowStairs] = useState(false);
  const transitionPaths = ["/cart", "/","/profile"];
  const handleVisibility = useCallback(() => {
    setShowStairs(true);
    const timer = setTimeout(() => {
      setShowStairs(false);
    }, 2000); // Duration of the animation
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (transitionPaths.includes(location.pathname)) {
      handleVisibility();
    } else {
      setShowStairs(false); // Ensure it doesn't show on excluded pages
    }
  }, [location.pathname, handleVisibility]);

  return (
    <> 
      <AnimatePresence mode="wait">
        {showStairs && (
          <div key={location.pathname}>
            <div className="h-screen w-screen top-0 left-0 right-0 overflow-hidden pointer-events-none z-50 flex">
              <Stairs />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
