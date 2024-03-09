import { render, waitFor } from '@testing-library/react';
import LoginContainer from './LoginContainer';
import userEvent from '@testing-library/user-event';

const mockRoutePush = jest.fn();
jest.mock('next/router', () => ({
	useRouter: () => ({
		push: mockRoutePush
	})
}));

describe('LoginContainer', () => {
	it('should render the LoginContainer', async () => {
		const screen = render(<LoginContainer />);

		const loginContainerTitle = screen.getByText('Sign in to founderpad');
		expect(loginContainerTitle).toBeInTheDocument();
	});

	it('should successfully login', async () => {
		const screen = render(<LoginContainer />);

		userEvent.type(screen.getByLabelText('Email'), 'jamie@test.com');
		userEvent.type(screen.getByLabelText('Password'), '123456');

		expect(screen.getByPlaceholderText('Email')).toHaveValue(
			'jamie@test.com'
		);
		expect(screen.getByPlaceholderText('Password')).toHaveValue('123456');

		userEvent.click(screen.getByText('Log in'));

		await waitFor(() => {
			expect(jest.fn()).toHaveBeenCalled();
		});

		expect(mockRoutePush).toHaveBeenCalledWith('/home');
	});

	it('should display error if submitted without password', async () => {
		const screen = render(<LoginContainer />);

		userEvent.type(screen.getByLabelText('Email'), 'jamie@test.com');
		expect(screen.getByPlaceholderText('Email')).toHaveValue(
			'jamie@test.com'
		);

		userEvent.click(screen.getByText('Log in'));

		await waitFor(() => {
			expect(
				screen.getByText('You must enter a valid email address')
			).toBeInTheDocument();
		});

		await waitFor(() => {
			expect(jest.fn()).not.toHaveBeenCalled();
		});
	});
});
