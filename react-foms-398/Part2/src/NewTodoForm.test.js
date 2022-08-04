import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<NewTodoForm/>);
}); 

it("matches snapshot", function() {
  const {asFragment} = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it(('should add update width input'), function() {
  render(<NewTodoForm />)
  const input = screen.getByLabelText('New Todo:')
  fireEvent.change(input, {target: {value:'test'}})
  expect(input.value).toBe('test')
})

it(('should call passed function on form submit'), function() {
  const addTodo = jest.fn();
  render(<NewTodoForm addTodo={addTodo}/>)
  const form = screen.getByTestId('form')
  fireEvent.submit(form)
  expect(addTodo).toHaveBeenCalled();
})





