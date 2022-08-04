import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BoxList from "./BoxList";

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

it(('should call passed function on form submit'), function() {
  const box = {id: 'ee4e', color:'#000000', height:'100px', width:'100px'}
  const deleteBox = jest.fn();
  render(<BoxList />)
  const boxBtn = screen.
  const boxWrapper = screen.getByTestId('Current-boxes')
  fireEvent.submit(form)
  expect(deleteBox).toHaveBeenCalled();
})