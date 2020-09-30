import { getQueriesForElement } from "@testing-library/dom";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import UserStatus from "./Status copy";

afterEach(cleanup);
beforeEach(cleanup);

describe("Status component", () => {
  it("should be render without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<UserStatus />, root);
    const { getByText, getBylabelText } = getQueriesForElement(root);
    expect(getByText(/Enter status here/i)).not.toBeNull();
  });
  it("renders correct context", () => {
    const root = document.createElement("div");
    ReactDOM.render(<UserStatus />, root);
    const { getByText, getBylabelText } = getQueriesForElement(root);
    expect(getByText(/Enter status here/i)).not.toBeNull();
  });
  it("renders correctly element", () => {
    const { getByTestId, getByText, getByLabelText } = render(<UserStatus />);
    expect(getByText(/Enter status here/i));
  });
  it("should snapshot component", () => {
    const tree = create(<UserStatus test="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
