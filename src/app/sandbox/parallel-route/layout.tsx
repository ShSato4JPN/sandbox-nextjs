import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  sample1: ReactNode;
  sample2: ReactNode;
  sample3: ReactNode;
};

export default function Layout({ children, sample1, sample2, sample3 }: Props) {
  return (
    <>
      {children}
      {sample1}
      {sample2}
      {sample3}
    </>
  );
}
