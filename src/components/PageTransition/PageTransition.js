"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import styles from "./PageTransition.module.css";

// Lotus flower loading animation data
const lotusAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  nm: "Lotus Loading",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Petal 1",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [100] },
            { t: 30, s: [100], e: [100] },
            { t: 60, s: [100], e: [0] },
            { t: 90, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 90, s: [360] },
          ],
        },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [50, 50], e: [100, 100] },
            { t: 45, s: [100, 100], e: [50, 50] },
            { t: 90, s: [50, 50] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, -30] },
          s: { a: 0, k: [30, 60] },
          nm: "Petal Shape",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.792, 0.773, 0.725, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Petal 2",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 10, s: [0], e: [100] },
            { t: 40, s: [100], e: [100] },
            { t: 70, s: [100], e: [0] },
            { t: 90, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [45], e: [405] },
            { t: 90, s: [405] },
          ],
        },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 10, s: [50, 50], e: [100, 100] },
            { t: 55, s: [100, 100], e: [50, 50] },
            { t: 90, s: [50, 50] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, -30] },
          s: { a: 0, k: [30, 60] },
          nm: "Petal Shape",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.427, 0.424, 0.404, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Petal 3",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 20, s: [0], e: [100] },
            { t: 50, s: [100], e: [100] },
            { t: 80, s: [100], e: [0] },
            { t: 90, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [90], e: [450] },
            { t: 90, s: [450] },
          ],
        },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 20, s: [50, 50], e: [100, 100] },
            { t: 65, s: [100, 100], e: [50, 50] },
            { t: 90, s: [50, 50] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, -30] },
          s: { a: 0, k: [30, 60] },
          nm: "Petal Shape",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.337, 0.306, 0.263, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Petal 4",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 5, s: [0], e: [100] },
            { t: 35, s: [100], e: [100] },
            { t: 65, s: [100], e: [0] },
            { t: 90, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [135], e: [495] },
            { t: 90, s: [495] },
          ],
        },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 5, s: [50, 50], e: [100, 100] },
            { t: 50, s: [100, 100], e: [50, 50] },
            { t: 90, s: [50, 50] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, -30] },
          s: { a: 0, k: [30, 60] },
          nm: "Petal Shape",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.792, 0.773, 0.725, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Petal 5",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 15, s: [0], e: [100] },
            { t: 45, s: [100], e: [100] },
            { t: 75, s: [100], e: [0] },
            { t: 90, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [180], e: [540] },
            { t: 90, s: [540] },
          ],
        },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 15, s: [50, 50], e: [100, 100] },
            { t: 60, s: [100, 100], e: [50, 50] },
            { t: 90, s: [50, 50] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, -30] },
          s: { a: 0, k: [30, 60] },
          nm: "Petal Shape",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.427, 0.424, 0.404, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Petal 6",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 25, s: [0], e: [100] },
            { t: 55, s: [100], e: [100] },
            { t: 85, s: [100], e: [0] },
            { t: 90, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [225], e: [585] },
            { t: 90, s: [585] },
          ],
        },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 25, s: [50, 50], e: [100, 100] },
            { t: 70, s: [100, 100], e: [50, 50] },
            { t: 90, s: [50, 50] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, -30] },
          s: { a: 0, k: [30, 60] },
          nm: "Petal Shape",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.337, 0.306, 0.263, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
    {
      ddd: 0,
      ind: 7,
      ty: 4,
      nm: "Petal 7",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 8, s: [0], e: [100] },
            { t: 38, s: [100], e: [100] },
            { t: 68, s: [100], e: [0] },
            { t: 90, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [270], e: [630] },
            { t: 90, s: [630] },
          ],
        },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 8, s: [50, 50], e: [100, 100] },
            { t: 53, s: [100, 100], e: [50, 50] },
            { t: 90, s: [50, 50] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, -30] },
          s: { a: 0, k: [30, 60] },
          nm: "Petal Shape",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.792, 0.773, 0.725, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
    {
      ddd: 0,
      ind: 8,
      ty: 4,
      nm: "Petal 8",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 18, s: [0], e: [100] },
            { t: 48, s: [100], e: [100] },
            { t: 78, s: [100], e: [0] },
            { t: 90, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [315], e: [675] },
            { t: 90, s: [675] },
          ],
        },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 18, s: [50, 50], e: [100, 100] },
            { t: 63, s: [100, 100], e: [50, 50] },
            { t: 90, s: [50, 50] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, -30] },
          s: { a: 0, k: [30, 60] },
          nm: "Petal Shape",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.427, 0.424, 0.404, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
    {
      ddd: 0,
      ind: 9,
      ty: 4,
      nm: "Center",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [100], e: [100] },
            { t: 90, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100] },
        a: { a: 0, k: [0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [80, 80], e: [120, 120] },
            { t: 45, s: [120, 120], e: [80, 80] },
            { t: 90, s: [80, 80] },
          ],
        },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [20, 20] },
          nm: "Center Circle",
        },
        {
          ty: "fl",
          c: { a: 0, k: [1, 1, 1, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
    },
  ],
};

export default function PageTransition({ isLoading, onComplete }) {
  const [visible, setVisible] = useState(isLoading);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setFadeOut(false);
    } else {
      // Start fade out animation
      setFadeOut(true);
      // Hide completely after fade animation
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
    >
      <div className={styles.lottieContainer}>
        <Lottie animationData={lotusAnimation} loop={true} autoplay={true} />
      </div>
    </div>
  );
}
