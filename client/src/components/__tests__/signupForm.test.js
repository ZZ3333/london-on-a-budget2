import {render, screen, cleanup} from '@testing-library/react'
import SignUpForm from '../user/SignUpForm'

test ('should render Signup email component', () => {
    render(<SignUpForm/>);
    const SignUpElement = screen.getByTestId('email');
    expect(SignUpElement).toBeInTheDocument();
})
test ('should render Signup password component', () => {
    render(<SignUpForm/>);
    const SignUpElement = screen.getByTestId('password');
    expect(SignUpElement).toBeInTheDocument();
})