import { useState } from "react";

export default function useHook() {
  const [isLoading, setIsLoading] = useState(false);
  return {
    isLoading,
    setIsLoading,
  };
}
