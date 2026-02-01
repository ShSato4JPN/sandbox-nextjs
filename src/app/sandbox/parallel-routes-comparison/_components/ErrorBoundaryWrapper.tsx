"use client";

import { ErrorBoundary } from "react-error-boundary";
import { ReactNode } from "react";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
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
      <p style={{ color: "#000" }}>Error: {error.message}</p>
      <button
        onClick={resetErrorBoundary}
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
    </div>
  );
}

export default function ErrorBoundaryWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}
