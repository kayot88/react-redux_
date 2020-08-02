import React, { PureComponent } from "react";
import TestRenderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Test from "./Test";

describe("testing class component", () => {
  afterEach(cleanup);
  beforeEach(cleanup);
  test("status from props should be in state ", () => {
    const component = TestRenderer.create(<Test testValue="Gromov" />);
    const instance = component.getInstance();
    expect(instance.state.testValue).toBe("Gromov");
  });
  it("after rendering we should see span by default", () => {
    const component = TestRenderer.create(<Test testValue="Gromov" />);
    const root = component.root;
    expect(root.findByType("span")).not.toBeNull();
  });
  it("after rendering we should`t see input by default", () => {
    const component = TestRenderer.create(<Test testValue="Gromov" />);
    const root = component.root;
    expect(() => {
      root.findByType("input");
    }).toThrow();
  });
  it("render status from state", () => {
    const component = TestRenderer.create(<Test testValue="Gromov" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.props.children).toBe("Gromov");
  });
  it("displaying input in edit mode (click fire)", () => {
    const component = TestRenderer.create(<Test testValue="Gromov" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("Gromov");
  });
  it("mock callback function should be call", () => {
    const mockFunction = jest.fn();
    const component = TestRenderer.create(
      <Test testValue="Gromov" updateStatus={mockFunction} />
    );
    const instance = component.getInstance();
    const root = component.root;
    instance.deactivateMode();
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
