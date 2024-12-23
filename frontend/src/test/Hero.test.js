import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders the hero image with correct alt text", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders the title and description", () => {
    render(<Hero />);
    const title = screen.getByText("Invest in everything");
    const description = screen.getByText(
      "Online platform to invest in stocks, derivatives, mutual funds, and more"
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test("renders the signup button with correct text", () => {
    render(<Hero />);
    const signupButton = screen.getByText("Signup Now");
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn btn-primary fs-5");
  });

  test("signup button has correct inline styles", () => {
    render(<Hero />);
    const signupButton = screen.getByText("Signup Now");
    expect(signupButton).toHaveStyle({
      width: "20%",
      margin: "0 auto",
    });
  });
});
