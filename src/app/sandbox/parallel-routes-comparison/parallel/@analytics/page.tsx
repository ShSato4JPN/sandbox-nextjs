type Props = {
  searchParams: Promise<{ analyticsError?: string }>;
};

async function fetchAnalytics(shouldError: boolean) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

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

export default async function AnalyticsSlot({ searchParams }: Props) {
  const params = await searchParams;
  const shouldError = params.analyticsError === "true";
  const data = await fetchAnalytics(shouldError);

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
        Analytics (Parallel Route)
      </h3>
      <p style={{ fontSize: "12px", color: "#000", marginBottom: "12px" }}>
        @analytics スロット - 1500ms delay
      </p>
      <div style={{ display: "grid", gap: "8px" }}>
        <div>Visitors: {data.visitors.toLocaleString()}</div>
        <div>Page Views: {data.pageViews.toLocaleString()}</div>
        <div>Bounce Rate: {data.bounceRate}%</div>
      </div>
    </div>
  );
}
