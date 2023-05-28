import { render, screen } from "@testing-library/react";
import SignInForm from "./components/signInForm/SignInForm";

test("renders learn react link", () => {
  render(<SignInForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
