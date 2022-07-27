import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";

//smoke test
it("renders without crashing", function() {
  render(<Carousel />);
});

// snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
  });