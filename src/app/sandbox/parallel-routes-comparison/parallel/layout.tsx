import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  analytics: ReactNode;
  metrics: ReactNode;
};

export default function ParallelLayout({
  children,
  analytics,
  metrics,
}: Props) {
  return (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <Link
        href="/sandbox/parallel-routes-comparison"
        style={{ color: "#0070f3" }}
      >
        ← 戻る
      </Link>

      <h1 style={{ marginTop: "16px" }}>Parallel Routes版</h1>
      <p style={{ color: "#000", marginBottom: "24px" }}>
        各スロットが独立してloading/errorを管理
      </p>

      {children}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {analytics}
        {metrics}
      </div>

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          backgroundColor: "#ecfdf5",
          borderRadius: "8px",
          border: "1px solid #10b981",
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>メリット</h3>
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>各スロットにloading.tsx/error.tsxを配置するだけ</li>
          <li>エラーが他のスロットに影響しない</li>
          <li>データフェッチが自動で並列化</li>
          <li>Next.jsのファイルベースの規約に従うだけ</li>
        </ul>
      </div>
    </div>
  );
}
