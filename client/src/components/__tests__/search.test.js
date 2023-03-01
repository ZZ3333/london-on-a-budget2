import { render, screen} from '@testing-library/react'
import Search from '../Search/Search';

test('should render search component', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('search');
    expect(SearchElement).toBeInTheDocument();
});

test('should render price element', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('price');
    expect(SearchElement).toBeInTheDocument();
});

test('should render date element', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('date');
    expect(SearchElement).toBeInTheDocument();
});

test('should render location element', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('location');
    expect(SearchElement).toBeInTheDocument();
});

test('should render search button element', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('search-btn');
    expect(SearchElement).toBeInTheDocument();
});