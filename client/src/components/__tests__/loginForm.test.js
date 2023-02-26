import {render, screen, cleanup} from '@testing-library/react'
import LogInForm from '../auth/LoginForm';

test ('should render LoginForm email component', () => {
    render(<LogInForm />);
    const LoginElement = screen.getByTestId('email');
    expect(LoginElement).toBeInTheDocument();
})

test ('should render LoginForm password component', () => {
    render(<LogInForm/>);
    const SignUpElement = screen.getByTestId('password');
    expect(SignUpElement).toBeInTheDocument();
})

// test ('should render Signup firstName component', () => {
//     render(<SignUpForm/>);
//     const SignUpElement = screen.getByTestId('firstName');
//     expect(SignUpElement).toBeInTheDocument();
// })

// test ('should render Signup lastName component', () => {
//     render(<SignUpForm/>);
//     const SignUpElement = screen.getByTestId('lastName');
//     expect(SignUpElement).toBeInTheDocument();
// })
