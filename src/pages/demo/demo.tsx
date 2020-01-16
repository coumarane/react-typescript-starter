import * as React from "react";
import { ExempleDemo } from "./exemple";
import { Wrapper } from "../../components/layout/wrapper";
import ParentToChild from "./communication.parentchild";
import ChildToParent from "./communication.childparent";
import PureComponentDemo from "./purecomponent";

const Demo = () => {
  return (
    <>
      <Wrapper title={"Demo"}>
        <ExempleDemo />

        <PureComponentDemo />

        <ParentToChild />

        <ChildToParent />
      </Wrapper>
    </>
  );
};

export default Demo;
