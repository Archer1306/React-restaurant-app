import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";




describe("Contact component",()=>{  

    beforeEach(() => {
    console.log("Before each test");
  });
test("The page should have a heading with text 'Contact us'",()=>{
    render(<Contact/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("The page should have a button with text 'Contact us'",()=>{
    render(<Contact/>);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})}
);