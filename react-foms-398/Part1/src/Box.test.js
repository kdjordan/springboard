import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function() {
  render(<Box />);
})

it("matches snapshot", function() {
  let data ={ color:'#000000',height:'100px', width:'100px', id:'aeqwe'}
  const {asFragment} = render(<Box data={data}/>);
  expect(asFragment()).toMatchSnapshot();
})

it("matches diff color snapshot", function() {
  let data ={ color:'#ffffff',height:'100px', width:'100px', id:'aeqwe'}
  const {asFragment} = render(<Box data={data}/>);
  expect(asFragment()).toMatchSnapshot();
})