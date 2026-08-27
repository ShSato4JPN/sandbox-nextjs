"use client";

import { useState } from "react";

export default function Hello() {
  const [count, setCount] = useState<number>(0);
  console.log("hello count");
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>count up</button>
      <div>{count}</div>
    </>
  );
}
