import { useEffect, useState } from 'react';


const useVisible = (offsetTop: number | undefined): boolean => {
    const [ scrolled, setScrolled] = useState<number>(0);
    
    useEffect(() => {

        const onScroll = () => {
            setScrolled(Math.floor(window.scrollY))
            
          };
          window.addEventListener("scroll", onScroll);
      
          return () => window.removeEventListener("scroll", onScroll);
    }, [scrolled]);

    if (!offsetTop) return false;

    return (window.innerHeight * 0.7) > (offsetTop - scrolled);
}

export default useVisible;