export default function MetricsLoading() {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f0fdf4",
        borderRadius: "8px",
        border: "1px dashed #22c55e",
        animation: "pulse 2s infinite",
      }}
    >
      <h3 style={{ margin: "0 0 12px 0", color: "#166534" }}>Metrics</h3>
      <p>Loading metrics data...</p>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
