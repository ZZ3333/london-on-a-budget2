import { render, screen, cleanup } from "@testing-library/react";
import IconsMenu from "../IconsMenu/IconsMenu";


test ('should render IconsMenu music icon component', () => {
    render(<IconsMenu/>);
    const IconsMenuElement = screen.getByTestId('music');
    expect(IconsMenuElement).toBeInTheDocument();
})
test ('should render IconsMenu sports icon component', () => {
    render(<IconsMenu/>);
    const IconsMenuElement = screen.getByTestId('sports');
    expect(IconsMenuElement).toBeInTheDocument();
})