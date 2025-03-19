import { render, screen } from '@testing-library/react';
import Page from '../path/to/Page';

test('renders page component', () => {
	render(<Page />);
	const linkElement = screen.getByText(/page content/i);
	expect(linkElement).toBeInTheDocument();
});