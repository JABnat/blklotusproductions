"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable custom cursor on touch / coarse pointer devices
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(pointer: coarse)");
      if (mediaQuery.matches) {
        setIsVisible(false);
        return;
      }
    }

    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e) => {
      const target = e.target;
      if (!target) {
        setIsHoveringInteractive(false);
        return;
      }

      const interactiveSelector =
        'a, button, [role="button"], input, textarea, select, summary, label';

      const isInteractive =
        target.closest && target.closest(interactiveSelector) !== null;

      setIsHoveringInteractive(isInteractive);
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mousemove", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mousemove", updateHoverState);
    };
  }, []);

  if (!isVisible) return null;

  const cursorStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  };

  return (
    <div
      className={`custom-cursor${isHoveringInteractive ? " custom-cursor--hover" : ""}`}
      style={cursorStyle}
    />
  );
}
