"use client";

import { ReactElement, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  Hello: ReactElement;
};

export default function Wrapper({ children, Hello }: Props) {
  const [isClick, setIsClick] = useState<boolean>(false);
  console.log("this is wrapper");
  return (
    <div>
      {Hello}
      <button onClick={() => setIsClick((prev) => !prev)}>click me</button>
      {isClick && <div>hello</div>}
      {children}
    </div>
  );
}
