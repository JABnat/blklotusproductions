"use client";

import { useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition/PageTransition";

export default function PageWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for animations to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageTransition isLoading={isLoading} />
      <div
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        {children}
      </div>
    </>
  );
}
