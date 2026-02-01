export default function Page() {
  // Parallel Route は layout.ts と同じ階層にしか定義できないため
  // layout.ts が無い場合は default.tsx がレンダリングされる
  return <div>this is not parallel page</div>;
}
