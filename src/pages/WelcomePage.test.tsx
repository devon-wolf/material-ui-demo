import { render } from "@testing-library/react";
import React from "react";
import WelcomePage, { WelcomePageProps } from "./WelcomePage";

const defaultProps: WelcomePageProps = {
  handleStartClick: jest.fn(),
};

describe("Welcome Page", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<WelcomePage {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
