"use client";

import { useState } from "react";

// React Compilerなしだと、親の再レンダリング時に毎回再レンダリングされる
// React Compilerありだと、propsが変わらなければ再レンダリングされない
function ChildComponent({ value }: { value: number }) {
  console.log("ChildComponent rendered:", value);
  return (
    <div style={{ border: "1px solid gray", padding: "8px", margin: "4px" }}>
      Child: {value}
    </div>
  );
}

// 高コストな計算（React Compilerが自動でメモ化する）
function ExpensiveCalculation({ count }: { count: number }) {
  console.log("ExpensiveCalculation rendered");

  // 重い計算のシミュレーション
  const result = Array.from({ length: 1000 }, (_, i) => i)
    .filter((n) => n % 2 === 0)
    .reduce((acc, n) => acc + n, 0);

  return (
    <div style={{ border: "1px solid orange", padding: "8px", margin: "4px" }}>
      計算結果: {result} (count: {count})
    </div>
  );
}

export default function ReactCompilerPage() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // React Compilerなしだと、このコールバックは毎回新しい参照になる
  // React Compilerありだと、自動でメモ化される
  const handleClick = () => {
    console.log("Button clicked");
  };

  console.log("Parent rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Compiler 動作確認</h1>

      <section style={{ marginBottom: "24px" }}>
        <h2>カウンター</h2>
        <p>count: {count}</p>
        <p>other: {other}</p>
        <button onClick={() => setCount((c) => c + 1)}>count++</button>
        <button onClick={() => setOther((o) => o + 1)} style={{ marginLeft: "8px" }}>
          other++
        </button>
      </section>

      <section style={{ marginBottom: "24px" }}>
        <h2>子コンポーネントの再レンダリング確認</h2>
        <p>
          React Compilerが有効なら、otherを変更してもChildComponentは再レンダリングされない。
          コンソールで確認。
        </p>
        <ChildComponent value={count} />
      </section>

      <section style={{ marginBottom: "24px" }}>
        <h2>高コスト計算のメモ化確認</h2>
        <p>
          React Compilerが有効なら、otherを変更しても計算は再実行されない。
        </p>
        <ExpensiveCalculation count={count} />
      </section>

      <section>
        <h2>コールバックのメモ化確認</h2>
        <p>
          React Compilerが有効なら、handleClickは自動でメモ化される。
        </p>
        <button onClick={handleClick}>クリック（コンソール確認）</button>
      </section>
    </div>
  );
}
