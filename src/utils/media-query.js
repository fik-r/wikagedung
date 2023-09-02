import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: "1023px",
  });

  useEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  return {
    isMobile: isClient ? isMobile : false,
  };
}

export default useResponsive;
