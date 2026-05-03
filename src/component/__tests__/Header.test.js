import { fireEvent,render ,screen} from '@testing-library/react';
import Header from '../Header';
import appStore from '../../utils/appStore';
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
describe("Header component",()=>{
test("Should render header with login button",()=>{

render(
<BrowserRouter>
<Provider store={appStore}> 
<Header/>
</Provider>
</BrowserRouter>
);

const loginButton=screen.getByRole("button", { name: "Login" });

expect(loginButton).toBeInTheDocument();
});

test("Should render header with Cart 0 button",()=>{

render(
<BrowserRouter>
<Provider store={appStore}> 
<Header/>
</Provider>
</BrowserRouter>
);

const cartButton=screen.getByText("Cart (0)");

expect(cartButton).toBeInTheDocument();
});

test("Should render header with all cart button",()=>{

render(
<BrowserRouter>
<Provider store={appStore}> 
<Header/>
</Provider>
</BrowserRouter>
);

const AllCartButton=screen.getByText(/Cart/);

expect(AllCartButton).toBeInTheDocument();
});

test("Should render header with all cart button",()=>{

render(
<BrowserRouter>
<Provider store={appStore}> 
<Header/>
</Provider>
</BrowserRouter>
);

const ClickButton=screen.getByRole("button", { name: "Login" });

fireEvent.click(ClickButton);
expect(ClickButton).toBeInTheDocument("LogOut");
})});