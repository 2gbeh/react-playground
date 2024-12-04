import { useMediaQuery } from "react-responsive";

export function useDeviceManager() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return { isMobile };
}
