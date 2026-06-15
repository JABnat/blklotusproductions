import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--container-padding)",
      textAlign: "center",
      gap: "1.5rem",
    }}>
      <p style={{
        fontFamily: "var(--font-subtitle)",
        fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--color-accent-2)",
      }}>
        404
      </p>
      <h1 style={{
        fontFamily: "var(--font-primary)",
        fontSize: "clamp(2.5rem, 8vw, 7rem)",
        fontWeight: 900,
        color: "var(--color-white)",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        margin: 0,
      }}>
        Page Not Found
      </h1>
      <p style={{
        fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
        color: "var(--color-accent-2)",
        maxWidth: "420px",
        lineHeight: 1.6,
      }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "0.5rem",
          padding: "0.85rem 2.5rem",
          borderRadius: "999px",
          background: "var(--color-accent-1)",
          color: "var(--color-black)",
          fontFamily: "var(--font-subtitle)",
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          display: "inline-block",
          minHeight: "44px",
          lineHeight: "22px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
