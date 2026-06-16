"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PageTransition.module.css";

export default function PageTransition({
  isLoading,
  onComplete,
  duration = 2,
}) {
  const [visible, setVisible] = useState(isLoading);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setFadeOut(false);
    } else {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.pageTransition} ${fadeOut ? styles.fadeOut : ""}`}
      style={{ "--load-duration": `${duration}s` }}
    >
      <div className={styles.logoContainer}>
        <Image
          src="/assets/logo/blklotus-logo_white.png"
          alt="BLK Lotus"
          width={200}
          height={200}
          className={styles.logo}
          priority
        />
      </div>
    </div>
  );
}