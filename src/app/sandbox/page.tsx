import Link from "next/link";

export default function SandBox() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sandbox</h1>
      <ul>
        <li>
          <Link href="/sandbox/client-pattern">Client Component パターン比較</Link>
        </li>
        <li>
          <Link href="/sandbox/react-compiler">React Compiler 動作確認</Link>
        </li>
      </ul>
    </div>
  );
}
