import Body from "../Body";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react"; 
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});
test("Should render Body component", async () => {
    await act(async () => render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ));
    const beforeCard=screen.queryAllByTestId("resCard");
    const searchBtn=screen.getByRole("button", { name: "Search" });
    const searchInput=screen.getByTestId("searchInput") 
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);
    const card=screen.getAllByTestId("resCard");
    expect(beforeCard.length).toBe(20);
    expect(card.length).toBeGreaterThanOrEqual(3);
    const Filter=screen.getByRole("button", { name: "FILTER" });
    fireEvent.click(Filter) 
  
  });