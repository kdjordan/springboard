import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", async function() {
    render(<MemoryRouter><App /></MemoryRouter>);
}); 

it("matches snapshot", async function() {
    const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});

