import LoginForm from '@pages/auth/login/components/LoginForm';
import userEvent from '@testing-library/user-event';
import store from '@utils/store';
import { Provider } from 'react-redux';
import { act, cleanup, fireEvent, render, waitFor } from './testUtils';

const setup = () => {
	const loginSetup = render(
		<Provider store={store}>
			<LoginForm />
		</Provider>
	);

	const loginForm = loginSetup.getByRole('form', { name: /login-form/i });
	const emailField = loginSetup.getByRole('textbox', { name: /email/i });
	const passwordField = loginSetup.getByPlaceholderText(/Password/i);
	const submitButton = loginSetup.getByRole('button', { name: /submit/i });

	// const socialLogin = loginSetup.getByTestId('socialLogin');

	return {
		loginSetup,
		loginForm,
		emailField,
		passwordField,
		submitButton,
		// socialLogin,
		...loginSetup
	};
};

const mockLogin = jest.fn();
const mockQueryParams = jest.fn();
const mockSocialLogin = jest.fn();

jest.mock('@hooks/auth', () => ({
	useLogin: (): any => mockLogin,
	useSocialLogin: (): any => mockSocialLogin
}));

jest.mock('@hooks/util', () => ({
	useQueryParam: (): any => mockQueryParams
}));

describe('Login form', () => {
	afterEach(cleanup);
	it('matches snapshot', async () => {
		const { asFragment } = setup();

		await waitFor(() => asFragment());
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render LoginForm', async () => {
		const { loginForm } = setup();
		expect(loginForm).toBeInTheDocument();
	});

	it('should render LoginForm fields', async () => {
		const { emailField, passwordField, submitButton } = setup();
		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();
		expect(submitButton).toBeEnabled();
	});

	it('should make login request on submit', async () => {
		const { emailField, passwordField, submitButton } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		userEvent.type(emailField, 'jamie@gmail.com');
		await waitFor(() => expect(emailField).toHaveValue('jamie@gmail.com'));

		userEvent.type(passwordField, 'admin123456');
		await waitFor(() => expect(passwordField).toHaveValue('admin123456'));

		await act(async () => {
			fireEvent.click(submitButton);
		});

		expect(mockLogin).toHaveBeenCalledTimes(1);
	});

	// it('should error if empty email on blur', async () => {
	// 	const { loginSetup, emailField } = setup();

	// 	expect(emailField).toBeInTheDocument();

	// 	fireEvent.focus(emailField);

	// 	fireEvent.blur(emailField);

	// 	loginSetup.getByText('You must enter a valid email address');
	// });

	it('should error if invalid email on blur', async () => {
		const { loginSetup, emailField } = setup();

		expect(emailField).toBeInTheDocument();

		fireEvent.focus(emailField);
		userEvent.type(emailField, 'testemail');
		await waitFor(() => expect(emailField).toHaveValue('testemail'));

		fireEvent.blur(emailField);

		loginSetup.getByText('You must enter a valid email address');
	});

	it('should error if email is empty on submit', async () => {
		const { loginSetup, emailField, submitButton } = setup();

		expect(emailField).toBeInTheDocument();

		await act(async () => {
			fireEvent.click(submitButton);
		});

		loginSetup.getByText('You must enter a valid email address');
	});

	it('should error if password too short (< 6 characters) on blur', async () => {
		const { loginSetup, emailField, passwordField } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(passwordField);
		userEvent.type(passwordField, 'pwd');
		await waitFor(() => expect(passwordField).toHaveValue('pwd'));

		fireEvent.blur(passwordField);

		loginSetup.getByText('Your password must be a minimum of 6 characters');
	});

	it('should error if password too long (> 20 characters) on blur', async () => {
		const { loginSetup, emailField, passwordField } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(passwordField);
		userEvent.type(passwordField, 'abcdefghjklmnopqrstuvwxyz');
		await waitFor(() =>
			expect(passwordField).toHaveValue('abcdefghjklmnopqrstuvwxyz')
		);

		fireEvent.blur(passwordField);

		loginSetup.getByText(
			'Your password must be a maximum of 20 characters'
		);
	});

	it('should error if submitted without valid password', async () => {
		const { loginSetup, emailField, passwordField, submitButton } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		await act(async () => {
			fireEvent.click(submitButton);
		});

		loginSetup.getByText('You must enter a valid password');
	});

	// it('should make social login request', async () => {
	// 	const { socialLogin } = setup();

	// 	await act(async () => {
	// 		fireEvent.click(socialLogin);
	// 	});

	// 	expect(mockSocialLogin).toHaveBeenCalledTimes(1);
	// });
});
