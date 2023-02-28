import {render, screen } from '@testing-library/react'
import LogInForm from '../auth/LoginForm';

test ('should render LoginForm email component', () => {
    render(<LogInForm />);
    const LoginElement = screen.getByTestId('email');
    expect(LoginElement).toBeInTheDocument();
})

test ('should render LoginForm password component', () => {
    render(<LogInForm/>);
    const LoginElement = screen.getByTestId('password');
    expect(LoginElement).toBeInTheDocument();
})
