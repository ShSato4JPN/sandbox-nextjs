import Link from "next/link";

export default function ComparisonIndex() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h1>Parallel Routes vs Normal Components</h1>
      <p style={{ color: "#000", marginBottom: "24px" }}>
        Parallel Routesと通常のコンポーネントの違いを検証します
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Link
          href="/sandbox/parallel-routes-comparison/normal"
          style={{
            padding: "16px 24px",
            backgroundColor: "#0070f3",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          通常コンポーネント版
        </Link>
        <Link
          href="/sandbox/parallel-routes-comparison/parallel"
          style={{
            padding: "16px 24px",
            backgroundColor: "#10b981",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Parallel Routes版
        </Link>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h2>主な違い</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "16px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                機能
              </th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                通常コンポーネント
              </th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                Parallel Routes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                ローディング状態
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                親がSuspenseで囲む必要あり
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                各スロット独自のloading.tsx
              </td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                エラーハンドリング
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                親がError Boundaryで囲む必要あり
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                各スロット独自のerror.tsx
              </td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                エラー時の影響範囲
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                設定次第で全体に波及
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                該当スロットのみ
              </td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                データフェッチ
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                順次または手動で並列化
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                自動で並列フェッチ
              </td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                URL状態
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                保持されない
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                ブラウザ履歴で保持
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
