import { useEffect, useState } from 'react';


const useFade = (height: number | undefined): number => {
    const [ scrolled, setScrolled] = useState<number>(0);
    const [ opacity, setOpacity ] = useState<number>(0);


    
    useEffect(() => {
        if (height) {
            setOpacity((1 - (height - scrolled * 2) / height) * 1);
        }

        const onScroll = () => {
            setScrolled(Math.floor(window.scrollY))
          };
          window.addEventListener("scroll", onScroll);
      
          return () => window.removeEventListener("scroll", onScroll);
    }, [scrolled, opacity, height]);
  
    
  return opacity;
}

export default useFade;