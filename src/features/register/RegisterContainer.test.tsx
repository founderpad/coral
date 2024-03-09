import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterContainer from './RegisterContainer';
import { encodeString } from '@/utils/validators';

const mockRoutePush = jest.fn();
jest.mock('next/router', () => ({
	useRouter: () => ({
		push: mockRoutePush
	})
}));

describe('RegisterContainer', () => {
	it('submits the form when inputs are filled and submit button is clicked', async () => {
		const mockSubmit = jest.fn();

		render(<RegisterContainer />);

		userEvent.type(screen.getByPlaceholderText('First name'), 'Jamie');
		userEvent.type(screen.getByPlaceholderText('Last name'), 'Lee');
		userEvent.type(screen.getByPlaceholderText('Email'), 'jamie@test.com');
		userEvent.type(screen.getByPlaceholderText('Password'), '123456');

		userEvent.click(screen.getByText('Create account'));

		await waitFor(() => {
			expect(mockSubmit).toHaveBeenCalled();

			// After we register, we navigate to the Register Success page
			expect(mockRoutePush).toHaveBeenCalledWith(
				`/register/registersuccess?nm=${encodeString('Jamie')}`
			);
		});
	});
});
