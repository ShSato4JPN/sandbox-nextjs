export default function ServerComponent() {
  console.log("ServerComponent: rendered on server");

  return (
    <div style={{ border: "2px solid green", padding: "8px", margin: "8px" }}>
      <strong>ServerComponent</strong>
      <p>このconsole.logがサーバーのターミナルに出力されれば、サーバー側でレンダリングされている。</p>
    </div>
  );
}
