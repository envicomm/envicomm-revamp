import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ scrollAreaRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the ScrollArea container to the top when the route changes
    console.log(scrollAreaRef.ScrollToTop)
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollIntoView(true)
    }
  }, [pathname, scrollAreaRef]);

  return null;
}

export default ScrollToTop;