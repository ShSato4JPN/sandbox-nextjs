import ClientComp from "./components/ClientComp";
import Hello from "./components/Hello";
import ServerComp from "./components/ServerComp";
import Wrapper from "./components/Wrapper";

export default function page() {
  return (
    <>
      <Wrapper Hello={<Hello />}>
        <ServerComp />
        <ClientComp />
      </Wrapper>
    </>
  );
}
