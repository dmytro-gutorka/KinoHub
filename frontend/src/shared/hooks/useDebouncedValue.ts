import { useEffect, useState } from 'react';

export default function useDebouncedValue<T>(value: T, delay: number = 500) {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
