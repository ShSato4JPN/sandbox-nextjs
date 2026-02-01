import Link from "next/link";
import { Suspense } from "react";
import Analytics from "../_components/Analytics";
import Metrics from "../_components/Metrics";
import ErrorBoundaryWrapper from "../_components/ErrorBoundaryWrapper";

function LoadingFallback({ name }: { name: string }) {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        border: "1px dashed #ccc",
      }}
    >
      <p>Loading {name}...</p>
    </div>
  );
}

export default async function NormalComponentsPage({
  searchParams,
}: {
  searchParams: Promise<{ analyticsError?: string; metricsError?: string }>;
}) {
  const params = await searchParams;
  const analyticsError = params.analyticsError === "true";
  const metricsError = params.metricsError === "true";

  return (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <Link
        href="/sandbox/parallel-routes-comparison"
        style={{ color: "#0070f3" }}
      >
        ← 戻る
      </Link>

      <h1 style={{ marginTop: "16px" }}>通常コンポーネント版</h1>
      <p style={{ color: "#000", marginBottom: "24px" }}>
        Suspense + ErrorBoundaryで手動管理が必要
      </p>

      <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
        <Link
          href="/sandbox/parallel-routes-comparison/normal"
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
          href="/sandbox/parallel-routes-comparison/normal?analyticsError=true"
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
          href="/sandbox/parallel-routes-comparison/normal?metricsError=true"
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <ErrorBoundaryWrapper>
          <Suspense fallback={<LoadingFallback name="Analytics" />}>
            <Analytics delay={1500} shouldError={analyticsError} />
          </Suspense>
        </ErrorBoundaryWrapper>

        <ErrorBoundaryWrapper>
          <Suspense fallback={<LoadingFallback name="Metrics" />}>
            <Metrics delay={2500} shouldError={metricsError} />
          </Suspense>
        </ErrorBoundaryWrapper>
      </div>

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          backgroundColor: "#fffbeb",
          borderRadius: "8px",
          border: "1px solid #f59e0b",
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>注意点</h3>
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>Suspense/ErrorBoundaryを手動で各コンポーネントに設定</li>
          <li>エラー回復のロジックを自分で実装する必要あり</li>
          <li>
            ErrorBoundaryはClient Componentなので、react-error-boundaryなどが必要
          </li>
        </ul>
      </div>
    </div>
  );
}
