"use client";

export default function AnalyticsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#fef2f2",
        borderRadius: "8px",
        border: "1px solid #ef4444",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0", color: "#000" }}>Analytics Error</h3>
      <p style={{ color: "#000", marginBottom: "12px" }}>{error.message}</p>
      <button
        onClick={reset}
        style={{
          padding: "8px 16px",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Retry
      </button>
      <p style={{ fontSize: "12px", color: "#000", marginTop: "8px" }}>
        このエラーは @analytics スロット内に閉じ込められています
      </p>
    </div>
  );
}
