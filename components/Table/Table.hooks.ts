import { useEffect, useState } from 'react';

function useWindowWidth(): number | undefined {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowWidth;
}

export default useWindowWidth;
