import Link from "next/link";

export default async function ParallelPage({
  searchParams,
}: {
  searchParams: Promise<{ analyticsError?: string; metricsError?: string }>;
}) {
  const params = await searchParams;

  return (
    <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
      <Link
        href="/sandbox/parallel-routes-comparison/parallel"
        style={{
          padding: "8px 16px",
          backgroundColor: "#10b981",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        正常動作
      </Link>
      <Link
        href="/sandbox/parallel-routes-comparison/parallel?analyticsError=true"
        style={{
          padding: "8px 16px",
          backgroundColor: "#ef4444",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        Analyticsエラー
      </Link>
      <Link
        href="/sandbox/parallel-routes-comparison/parallel?metricsError=true"
        style={{
          padding: "8px 16px",
          backgroundColor: "#ef4444",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        Metricsエラー
      </Link>
    </div>
  );
}
