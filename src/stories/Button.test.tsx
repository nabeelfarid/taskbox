import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

//👇 Imports a specific story for the test
import { Primary } from "./Button.stories";
import { ButtonProps } from "./Button";

it("renders the button in the primary state", () => {
  render(<Primary {...(Primary.args as ButtonProps)} />);
  expect(screen.getByRole("button")).toHaveTextContent("Primary");
});
