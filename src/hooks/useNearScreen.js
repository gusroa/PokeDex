import { useState, useEffect, useRef } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
}) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    let observer;
    const elementVisor = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    elementVisor && observer.observe(elementVisor);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
