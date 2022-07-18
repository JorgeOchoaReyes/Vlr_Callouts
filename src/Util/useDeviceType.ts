import { useMediaQuery } from "react-responsive";

export default function useDeviceType() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isTablet = useMediaQuery({
    query: "(max-width: 1224px) and (min-width: 768px)",
  });

  return {
    isDesktop,
    isMobile,
    isTablet,
  };
}
