// src/components/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Using a font awesome arrow icon for simplicity
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300){
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 h-28 w-14 flex items-end justify-center pb-6 rounded-full bg-[#49BBBD] text-white shadow-lg z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={25} />
    </button>
  );
};

export default ScrollToTopButton;


