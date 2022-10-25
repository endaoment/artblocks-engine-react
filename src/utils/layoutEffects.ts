import { CSSProperties, useLayoutEffect, useRef, useState } from "react";

export const useStickySection = () => {
  const ref = useRef(null);
  const [topValue, setTopValue] = useState(0);

  let css: CSSProperties;

  useLayoutEffect(() => {
    if (ref.current) {
      const windowHeight = window.innerHeight;
      setTopValue(windowHeight - (ref.current as HTMLElement).clientHeight);
    }
  }, [setTopValue]);

  css = {
    top: topValue > 0 ? topValue : 0,
    position: topValue > 0 ? "sticky" : "relative",
  };

  return {
    ref,
    css,
  };
};
