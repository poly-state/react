import '@testing-library/jest-dom';
import * as tester from '@testing-library/react';
import { Counter } from '../components/counter';
import { counterStore } from '../stores/counter.store';
test('renders a message', () => {
	const subscriber = counterStore.subscribe(console.log);
	const { container } = tester.render(<Counter />);
	const h1 = container.querySelector('h1');
	expect(h1).toBeInTheDocument();

	const [incrementButton, decrementButton] = container.querySelectorAll('button');
	expect(incrementButton).toBeInTheDocument();
	expect(decrementButton).toBeInTheDocument();

	expect(h1).toHaveTextContent('count is 0');

	incrementButton.click();
	expect(container.querySelector('h1')).toHaveTextContent('count is 1');

	decrementButton.click();
	expect(container.querySelector('h1')).toHaveTextContent('count is 0');
	subscriber();
});
