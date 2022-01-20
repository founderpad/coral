import LoginForm from '@pages/login/components/LoginForm';
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

	const loginForm = loginSetup.getByRole('form', { name: /loginform/i });
	const emailField = loginSetup.getByRole('textbox', { name: /email/i });
	const passwordField = loginSetup.getByPlaceholderText(/Password/i);
	const submitButton = loginSetup.getByRole('button', { name: /submit/i });

	return {
		loginSetup,
		loginForm,
		emailField,
		passwordField,
		submitButton,
		...loginSetup
	};
};

const mockLogin = jest.fn();
jest.mock('@hooks/auth', () => ({
	useLogin: (): any => mockLogin
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
		const { submitButton } = setup();
		expect(submitButton).toBeDisabled();
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

	it('should error on empty email on blur', async () => {
		const { loginSetup, emailField, passwordField } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(emailField);
		userEvent.type(emailField, 'j@gmail');
		await waitFor(() => expect(emailField).toHaveValue('j@gmail'));

		fireEvent.blur(emailField);

		loginSetup.getByText('Please enter a valid email');
	});

	it('should error on empty password on blur', async () => {
		const { loginSetup, emailField, passwordField } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(passwordField);
		userEvent.type(passwordField, 'pwd');
		await waitFor(() => expect(passwordField).toHaveValue('pwd'));

		fireEvent.blur(passwordField);

		loginSetup.getByText(
			'Please enter a valid password between 6 and 20 characters'
		);
	});
});
