import NormalClientComponent from "./client/client";
import CompositionClientComponent from "./client/composition-client";
import ServerComponent from "./server";

export default function ClientPatternPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Client Component パターン比較</h1>

      <section>
        <h2>1. 通常パターン</h2>
        <p>
          クライアントコンポーネント内でServerComponentをimportすると、
          ServerComponentもクライアントコンポーネントとして扱われる。
        </p>
        <NormalClientComponent />
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>2. Compositionパターン</h2>
        <p>
          ServerComponentをchildrenとして渡すと、
          ServerComponentはサーバー側でレンダリングされる。
        </p>
        <CompositionClientComponent>
          <ServerComponent />
        </CompositionClientComponent>
      </section>
    </div>
  );
}
