import ForgottenPasswordForm from '@pages/forgottenpassword/components/ForgottenPasswordForm';
import userEvent from '@testing-library/user-event';
import store from '@utils/store';
import { Provider } from 'react-redux';
import { act, cleanup, fireEvent, render, waitFor } from './testUtils';

const setup = () => {
	const resetPasswordSetup = render(
		<Provider store={store}>
			<ForgottenPasswordForm />
		</Provider>
	);

	const resetPasswordForm = resetPasswordSetup.getByRole('form', {
		name: /resetpasswordform/i
	});
	const emailField = resetPasswordSetup.getByRole('textbox', {
		name: /email/i
	});
	const submitButton = resetPasswordSetup.getByRole('button', {
		name: /submit/i
	});

	return {
		resetPasswordSetup,
		resetPasswordForm,
		emailField,
		submitButton,
		...resetPasswordSetup
	};
};

const mockResetPassword = jest.fn();

jest.mock('@hooks/auth', () => ({
	useResetPassword: (): any => mockResetPassword
}));

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/forgottenpassword',
			query: '?es=true'
		};
	}
}));

// jest.spyOn(require('next/router'), 'useRouter');

describe('Forgotten password form', () => {
	afterEach(cleanup);
	it('matches snapshot', async () => {
		const { asFragment } = setup();

		await waitFor(() => asFragment());
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render ForgottenPasswordForm', async () => {
		const { resetPasswordForm } = setup();
		expect(resetPasswordForm).toBeInTheDocument();
	});

	it('should render ForgottenPasswordForm fields', async () => {
		const { submitButton } = setup();
		expect(submitButton).toBeDisabled();
	});

	it('should make reset password request on submit', async () => {
		const { emailField, submitButton } = setup();

		expect(emailField).toBeInTheDocument();

		userEvent.type(emailField, 'jamie@gmail.com');
		await waitFor(() => expect(emailField).toHaveValue('jamie@gmail.com'));

		await act(async () => {
			fireEvent.click(submitButton);
		});

		expect(mockResetPassword).toHaveBeenCalledTimes(1);
	});

	it('should error on empty email on blur', async () => {
		const { resetPasswordSetup, emailField } = setup();

		expect(emailField).toBeInTheDocument();

		fireEvent.focus(emailField);
		userEvent.type(emailField, 'j@gmail');
		await waitFor(() => expect(emailField).toHaveValue('j@gmail'));

		fireEvent.blur(emailField);

		resetPasswordSetup.getByText('Please enter a valid email');
	});
});
