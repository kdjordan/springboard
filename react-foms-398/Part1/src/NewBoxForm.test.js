import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function() {
  render(<NewBoxForm />);
}); 

it("matches snapshot", function() {
  const {asFragment} = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});


it(('should add update width input'), function() {
  render(<NewBoxForm />)
  const input = screen.getByLabelText('Enter Box Width')
  fireEvent.change(input, {target: {value:'120'}})
  expect(input.value).toBe('120')
})

it(('should call passed function on form submit'), function() {
  const {addBox} = jest.fn();
  render(<NewBoxForm addBox={addBox}/>)
  const form = screen.getByTestId('form')
  fireEvent.submit(form)
  expect(addBox).toHaveBeenCalled();
})


