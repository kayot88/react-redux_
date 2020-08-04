import React, { PureComponent } from "react";
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Paginator from "./Paginator";

describe("Paginator component testing", () => {
  it("pages count is 11 but should be showed only 10", () => {
    const component = TestRenderer.create(
      <Paginator countByPage={1} totalCount={11} portionSize={10} />
    );
    const root = component.root;
    let spans = root.findAllByType("span");
    expect(spans.length).toBe(10);
  });
  it("if pages count is more then 10 button NEXT should be present", () => {
    const component = TestRenderer.create(
      <Paginator countByPage={1} totalCount={11} portionSize={10} />
    );
    const root = component.root;
    let button = root.findAllByType("button");``
    expect(button.length).toBe(1);
  });
});

// if pages count is more then 10 button NEXT should be present
