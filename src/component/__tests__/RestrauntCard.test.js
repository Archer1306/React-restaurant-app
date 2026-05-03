import RestrauntCard from "../RestrauntCard";
import { render,screen } from "@testing-library/react";    
import "@testing-library/jest-dom";
import Mock_Data from "../mocks/resCardMock.json";

test("Should render RestrauntCard component",()=>{
    render(<RestrauntCard resData={Mock_Data}/>);

    const name=screen.getByText("The Belgian Waffle Co.")
    expect(name).toBeInTheDocument();


});