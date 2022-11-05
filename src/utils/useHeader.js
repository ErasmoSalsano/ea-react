import { useState, useEffect} from 'react'

export const useHeader = () => {
  //Scroll check for user board
  const [lastScroll, setLastScroll] = useState(0)
  const [scrollUp, setScrollUp] = useState(false)
  useEffect(
    () => {
      const handleScroll = () => {
        const prev = lastScroll;
        const newVal = window.scrollY;
        setScrollUp(prev > newVal);
        setLastScroll(newVal)
      }
      window.addEventListener('scroll', handleScroll);
      return ()=>{window.removeEventListener('scroll', handleScroll)}
  }, [lastScroll])

  return({
    scrollUp: scrollUp
  })
}