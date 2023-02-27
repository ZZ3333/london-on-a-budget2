import { render, screen } from "@testing-library/react";
import Navbar from "../navbar/Navbar";


test ('should render NavBar login component', () => {
    render(<Navbar/>);
    const NavBarElement = screen.getByTestId('login');
    expect(NavBarElement).toBeInTheDocument();
})
test ('should render NavBar signup component', () => {
    render(<Navbar/>);
    const NavBarElement = screen.getByTestId('signup');
    expect(NavBarElement).toBeInTheDocument();
})







// test render login navbar component on the page 