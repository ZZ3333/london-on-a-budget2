import { render, screen } from "@testing-library/react";
import Navbar from "../navbar/Navbar";


test ('should render NavBar login component', () => {
    render(<Navbar/>);
    const NavBarElement = screen.getByTestId('login');
    expect(NavBarElement).toBeInTheDocument();
})
