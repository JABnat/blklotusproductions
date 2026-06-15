"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible]   = useState(false); // hidden until first mousemove
  const [hovering, setHovering] = useState(false);
  const [show, setShow]         = useState(true);  // false on coarse-pointer devices
  const elRef                   = useRef(null);

  useEffect(() => {
    // Bail out on touch / stylus / coarse-pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setShow(false);
      return;
    }

    const el = elRef.current;
    if (!el) return;

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, summary, label';

    const onMove = (e) => {
      // Direct DOM mutation — avoids a React re-render on every mouse event
      el.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;

      if (!visible) setVisible(true);

      const isInteractive =
        e.target?.closest && e.target.closest(interactiveSelector) !== null;
      setHovering(isInteractive);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!show) return null;

  return (
    <div
      ref={elRef}
      className={[
        "custom-cursor",
        visible  ? "custom-cursor--visible" : "",
        hovering ? "custom-cursor--hover"   : "",
      ].join(" ")}
    />
  );
}
