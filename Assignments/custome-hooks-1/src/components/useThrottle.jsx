import { useState, useEffect } from 'react';

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle;
