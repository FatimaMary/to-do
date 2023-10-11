import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders todo app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Create my To do App/i);
  expect(linkElement).toBeInTheDocument();
});

test("adds and deletes a todo", () => {
  render(<App />);

  // Type a todo in the input field
  const inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: "Test Todo" } });

  // Click the "Create Todo" button
  const createButton = screen.getByText(/Create Todo/i);
  fireEvent.click(createButton);

  // Verify that the todo is added to the list
  const todoElement = screen.getByText(/Test Todo/i);
  expect(todoElement).toBeInTheDocument();

  // Click the "Delete" button
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  // Verify that the todo is deleted from the list
  expect(todoElement).not.toBeInTheDocument();
});
