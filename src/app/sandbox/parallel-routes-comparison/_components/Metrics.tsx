type Props = {
  delay: number;
  shouldError?: boolean;
};

async function fetchMetrics(delay: number, shouldError: boolean) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  if (shouldError) {
    throw new Error("Metrics fetch failed!");
  }

  // 固定値を使用（Math.random()はSSRとクライアントで異なる値になりhydrationエラーになる）
  return {
    cpu: 45,
    memory: 67,
    requests: 523,
  };
}

export default async function Metrics({ delay, shouldError = false }: Props) {
  const data = await fetchMetrics(delay, shouldError);

  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f0fdf4",
        borderRadius: "8px",
        border: "1px solid #22c55e",
      }}
    >
      <h3 style={{ margin: "0 0 12px 0", color: "#000" }}>
        Metrics (通常コンポーネント)
      </h3>
      <p style={{ fontSize: "12px", color: "#000", marginBottom: "12px" }}>
        Fetched after {delay}ms delay
      </p>
      <div style={{ display: "grid", gap: "8px" }}>
        <div>CPU: {data.cpu}%</div>
        <div>Memory: {data.memory}%</div>
        <div>Requests/min: {data.requests}</div>
      </div>
    </div>
  );
}
