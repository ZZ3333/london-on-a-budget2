import { render, screen} from '@testing-library/react'
import Search from '../Search/Search';

afterEach(() => {
    cleanup();
});

test('should render search component', () => {
    render(<Search/>);
    const SearchElement = screen.getByTestId('search');
    expect(SearchElement).toBeInTheDocument();
});