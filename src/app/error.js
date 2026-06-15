"use client";

export default function Error({ reset }) {
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
        500
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
        Something Went Wrong
      </h1>
      <p style={{
        fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
        color: "var(--color-accent-2)",
        maxWidth: "420px",
        lineHeight: 1.6,
      }}>
        An unexpected error occurred. Try again, or head back to the home page.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
        <button
          onClick={reset}
          style={{
            padding: "0.85rem 2.5rem",
            borderRadius: "999px",
            background: "var(--color-accent-1)",
            color: "var(--color-black)",
            fontFamily: "var(--font-subtitle)",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            minHeight: "44px",
          }}
        >
          Try Again
        </button>
        <a
          href="/"
          style={{
            padding: "0.85rem 2.5rem",
            borderRadius: "999px",
            border: "1px solid var(--color-accent-3)",
            color: "var(--color-white)",
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
        </a>
      </div>
    </div>
  );
}
