import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

it("renders without crashing", function() {
  render(<App />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

