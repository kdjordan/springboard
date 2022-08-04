import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "2", width = "2", color = "#ff2233") {
  const heightInput = screen.getByLabelText("Enter Box Height");
  const widthInput = screen.getByLabelText("Enter Box Width");
  const backgroundInput = screen.getByLabelText("Select a Color");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = screen.getByText("ADD");
  fireEvent.click(button);
}

it("renders without crashing", function() {
  render(<BoxList data={[{key:'88', id:'test', height: '100px', width:'100px', color:'#000000'}]}/>);
}); 

it("matches snapshot", function() {
  const {asFragment} = render(<BoxList data={[{key:'88', id:'test', height: '100px', width:'100px', color:'#000000'}]}/>);
  expect(asFragment()).toMatchSnapshot();
});

it("matches diff snapshot", function() {
  const {asFragment} = render(<BoxList data={[{key:'88', id:'test', height: '100px', width:'100px', color:'#ffffff'}]}/>);
  expect(asFragment()).toMatchSnapshot();
});

it(('should haven no boxes present'), function() {
  render(<BoxList />)
  expect(screen.queryByText("X")).not.toBeInTheDocument()
})

it(('should have 1 box'), function() {
  const { boxList } = render(<BoxList />)
  addBox(boxList)
  expect(screen.getByText("X")).toBeInTheDocument()
})

it(('should delete a box'), function() {
  const { boxList } = render(<BoxList />)
  addBox(boxList)
  const removeBtn = screen.getByText("X")
  fireEvent.click(removeBtn)
  expect(removeBtn).not.toBeInTheDocument()
})

