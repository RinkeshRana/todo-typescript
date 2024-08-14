"use client";
import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [items, setItems] = useState<T>(
    JSON.parse(localStorage.getItem(key) as string) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  return [items, setItems] as const;
}
export default useLocalStorage;
