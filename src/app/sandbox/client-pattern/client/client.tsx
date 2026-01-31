"use client";

import ServerComponent from "../server";

// 通常パターン: クライアントコンポーネント内でサーバーコンポーネントをインポート
// この場合、ServerComponentもクライアントコンポーネントとして扱われる
export default function NormalClientComponent() {
  console.log("NormalClientComponent: rendered on client");

  return (
    <div style={{ border: "2px solid red", padding: "16px", margin: "8px" }}>
      <h3>通常パターン (NormalClientComponent)</h3>
      <p>クライアントコンポーネント内でServerComponentをインポート</p>
      <ServerComponent />
    </div>
  );
}
