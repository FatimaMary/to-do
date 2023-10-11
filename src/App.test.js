import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  userEvent.type(inputElement, "Test Todo");

  // Click the "Create Todo" button
  const createButton = screen.getByText(/create todo/i);
  userEvent.click(createButton);

  // Verify that the todo is added to the list
  const todoElement = screen.getByText(/test todo/i);
  expect(todoElement).toBeInTheDocument();

  // Click the "Delete" button
  const deleteButton = screen.getByText(/delete/i);
  userEvent.click(deleteButton);

  // Verify that the todo is deleted from the list
  expect(todoElement).not.toBeInTheDocument();
});
