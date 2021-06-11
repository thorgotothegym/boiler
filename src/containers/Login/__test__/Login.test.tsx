import { render, screen } from "@testing-library/react";

import { Login } from "../Login";

describe("<Login />", () => {
  test("check if exit input-user, input-password and button-login", () => {
    render(<Login />);

    const inputUSerName = screen.getByTestId("input-username");
    expect(inputUSerName).toBeInTheDocument();
    expect(inputUSerName).toHaveAttribute("type", "text");

    const inputPassword = screen.getByTestId("input-password");
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveAttribute("type", "password");

    const buttonLogin = screen.getByTestId("button-login");
    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toHaveAttribute("type", "button");
  });
});
