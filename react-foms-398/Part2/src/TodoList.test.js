import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(boxList, name = "test", completed = false, id = "e45") {
    const todoInput = screen.getByLabelText("New Todo:");
    fireEvent.change(todoInput, { target: { value: 'newTest' } });
    const button = screen.getByText("ADD");
    fireEvent.click(button);
  }
it("renders without crashing", function() {
  render(<TodoList />);
}); 

it("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders no todos", function() {
  render(<TodoList />);
  expect(screen.getByTestId('no-todos')).toBeInTheDocument()
});

it("renders 1 todo", function() {
  const { todo } = render(<TodoList />);
  addTodo(todo)
  expect(screen.getByText('X')).toBeInTheDocument()
});

it("should delete the todo", function() {
  const { todo } = render(<TodoList />);
  addTodo(todo)
  const delBtn = screen.getByText('X')
  fireEvent.click(delBtn)
  expect(delBtn).not.toBeInTheDocument()

});



