import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", function() {
  render(<App />);
}); 

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});