// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top whenever the route changes
//   }, [pathname]);

//   return null; // This component doesn't render anything
// };

// export default ScrollToTop;


import { useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const scrollPositions = useRef({});

  useEffect(() => {
    // Restore scroll position if it exists
    const prevPosition = scrollPositions.current[pathname];
    if (prevPosition) {
      window.scrollTo(0, prevPosition);
    } else {
      window.scrollTo(0, 0); // Scroll to top if no position is saved
    }

    return () => {
      // Save the current scroll position
      scrollPositions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollRestoration;
