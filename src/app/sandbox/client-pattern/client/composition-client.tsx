"use client";

import { ReactNode } from "react";

type CompositionClientComponentProps = {
  children: ReactNode;
};

// Compositionパターン: childrenとしてサーバーコンポーネントを受け取る
// この場合、childrenはサーバー側でレンダリングされる
export default function CompositionClientComponent({
  children,
}: CompositionClientComponentProps) {
  console.log("CompositionClientComponent: rendered on client");

  return (
    <div style={{ border: "2px solid blue", padding: "16px", margin: "8px" }}>
      <h3>Compositionパターン (CompositionClientComponent)</h3>
      <p>childrenとしてServerComponentを受け取る</p>
      {children}
    </div>
  );
}
