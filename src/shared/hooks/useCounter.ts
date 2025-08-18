import { useState, useCallback } from 'react';

interface UseCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
}

export function useCounter({ initialValue = 0, min = 0, max = 9 }: UseCounterProps) {
  const [value, setValue] = useState(initialValue);

  const increment = useCallback(() => {
    setValue(prev => Math.min(prev + 1, max));
  }, [max]);

  const decrement = useCallback(() => {
    setValue(prev => Math.max(prev - 1, min));
  }, [min]);

  return { value, increment, decrement };
}