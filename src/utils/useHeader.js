import { useState, useEffect } from "react";

// Custom hook for Header component

export const useHeader = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);

  // Needed to fix the scroll on page mount
  useEffect(() => {
    setTimeout(() => {
      setScrollUp(true);
    }, 100);
  }, []);

  //Scroll check for user board
  useEffect(() => {
    const handleScroll = () => {
      const prev = lastScroll;
      const newVal = window.scrollY;
      setScrollUp(prev > newVal);
      setLastScroll(newVal);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return {
    scrollUp: scrollUp,
    setScrollUp: setScrollUp, //needed to set the scroll when popup menu opens up
  };
};
