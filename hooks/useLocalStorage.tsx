import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [items, setItems] = useState<T>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(key) as string) || initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  return [items, setItems] as const;
}
