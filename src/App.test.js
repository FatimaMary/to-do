import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders todo app", () => {
  render(<App />);
  const createTodoButton = screen.getByText(/Create my To do App/i);
  expect(createTodoButton).toBeInTheDocument();
});

test("adds and deletes a todo", async () => {
  render(<App />);

  // Type a todo and owner in the input fields
  const taskInput = screen.getByLabelText(/tasks/i);
  userEvent.type(taskInput, "Test Todo");

  const ownerInput = screen.getByLabelText(/owner/i);
  userEvent.type(ownerInput, "Test Owner");

  // Click the "Create Todo" button
  const createTodoButton = screen.getByText(/create todo/i);
  userEvent.click(createTodoButton);

  // Verify that the todo is added to the list
  const todoElement = await screen.findByText(/Test Todo/i);
  expect(todoElement).toBeInTheDocument();

  // Click the "Delete" button
  const deleteButton = screen.getByText(/delete/i);
  userEvent.click(deleteButton);

  // Verify that the todo is deleted from the list
  expect(todoElement).not.toBeInTheDocument();
});
