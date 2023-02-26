import {render, screen, cleanup} from '@testing-library/react'
import SignUpForm from '../user/SignUpForm'

test ('should render Signup component', () => {
    render(<SignUpForm/>);
    const SignUpElement = screen.getByTestId('email');
    expect(SignUpElement).toBeInTheDocument();
})