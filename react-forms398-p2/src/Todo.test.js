import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function() {
  render(<Todo />);
}); 

it("matches snapshot", function() {
  const {asFragment} = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs delete function on click", function() {
    const deleteTodo = jest.fn();
    render(<Todo removeTodo={deleteTodo}/>);
    const delButton = screen.getByText("X");
    fireEvent.click(delButton);
    expect(deleteTodo).toHaveBeenCalled()
    
  });

