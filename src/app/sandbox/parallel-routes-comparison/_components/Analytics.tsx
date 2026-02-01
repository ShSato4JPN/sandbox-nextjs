type Props = {
  delay: number;
  shouldError?: boolean;
};

async function fetchAnalytics(delay: number, shouldError: boolean) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  if (shouldError) {
    throw new Error("Analytics fetch failed!");
  }

  // 固定値を使用（Math.random()はSSRとクライアントで異なる値になりhydrationエラーになる）
  return {
    visitors: 8234,
    pageViews: 42156,
    bounceRate: 32,
  };
}

export default async function Analytics({ delay, shouldError = false }: Props) {
  const data = await fetchAnalytics(delay, shouldError);

  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f0f9ff",
        borderRadius: "8px",
        border: "1px solid #0ea5e9",
      }}
    >
      <h3 style={{ margin: "0 0 12px 0", color: "#000" }}>
        Analytics (通常コンポーネント)
      </h3>
      <p style={{ fontSize: "12px", color: "#000", marginBottom: "12px" }}>
        Fetched after {delay}ms delay
      </p>
      <div style={{ display: "grid", gap: "8px" }}>
        <div>Visitors: {data.visitors.toLocaleString()}</div>
        <div>Page Views: {data.pageViews.toLocaleString()}</div>
        <div>Bounce Rate: {data.bounceRate}%</div>
      </div>
    </div>
  );
}
