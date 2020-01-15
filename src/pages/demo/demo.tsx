import * as React from "react";
import { ExempleDemo } from "./exemple";
import { Wrapper } from "../../components/layout/wrapper";
import ParentToChild from "./communication.parentchild";
import ChildToParent from "./communication.childparent";

const Demo = () => {
  return (
    <>
      <Wrapper title={"Demo"}>
        <ExempleDemo />

        <ParentToChild />

        <ChildToParent />
      </Wrapper>
    </>
  );
};

export default Demo;
