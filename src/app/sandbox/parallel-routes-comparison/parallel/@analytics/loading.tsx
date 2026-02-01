export default function AnalyticsLoading() {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f0f9ff",
        borderRadius: "8px",
        border: "1px dashed #0ea5e9",
        animation: "pulse 2s infinite",
      }}
    >
      <h3 style={{ margin: "0 0 12px 0", color: "#0369a1" }}>Analytics</h3>
      <p>Loading analytics data...</p>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
