import ResetPasswordFormForm from '@pages/auth/resetpassword/components/ResetPasswordForm';
import userEvent from '@testing-library/user-event';
import store from '@utils/store';
import { Provider } from 'react-redux';
import { act, cleanup, fireEvent, render, waitFor } from './testUtils';

const setup = () => {
	const resetPasswordSetup = render(
		<Provider store={store}>
			<ResetPasswordFormForm />
		</Provider>
	);

	const resetPasswordForm = resetPasswordSetup.getByRole('form', {
		name: /reset-password-form/i
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
			route: '/resetpassword',
			query: 'rp_success'
		};
	}
}));

// jest.spyOn(require('next/router'), 'useRouter');

describe('Reset password form', () => {
	afterEach(cleanup);
	it('matches snapshot', async () => {
		const { asFragment } = setup();

		await waitFor(() => asFragment());
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render ResetPasswordForm', async () => {
		const { resetPasswordForm } = setup();
		expect(resetPasswordForm).toBeInTheDocument();
	});

	it('should render ResetPasswordForm fields', async () => {
		const { emailField, submitButton } = setup();
		expect(emailField).toBeInTheDocument();
		expect(submitButton).toBeEnabled();
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

	it('should error if invalid email on blur', async () => {
		const { resetPasswordSetup, emailField } = setup();

		expect(emailField).toBeInTheDocument();

		fireEvent.focus(emailField);
		userEvent.type(emailField, 'testemail');
		await waitFor(() => expect(emailField).toHaveValue('testemail'));

		fireEvent.blur(emailField);

		resetPasswordSetup.getByText('You must enter a valid email address');
	});

	it('should error if email is empty on submit', async () => {
		const { resetPasswordSetup, emailField, submitButton } = setup();

		expect(emailField).toBeInTheDocument();

		await act(async () => {
			fireEvent.click(submitButton);
		});

		resetPasswordSetup.getByText('You must enter a valid email address');
	});
});
