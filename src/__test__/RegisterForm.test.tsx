import RegisterForm from '@pages/register/components/RegisterForm';
import store from '@utils/store';
import { Provider } from 'react-redux';
import { act, fireEvent, render, userEvent, waitFor } from './testUtils';

const setup = () => {
	const registerSetup = render(
		<Provider store={store}>
			<RegisterForm />
		</Provider>
	);

	const registerForm = registerSetup.getByRole('form', {
		name: /registerForm/i
	});
	const firstNameField = registerSetup.getByRole('textbox', {
		name: /firstName/i
	});
	const lastNameField = registerSetup.getByRole('textbox', {
		name: /lastName/i
	});
	const emailField = registerSetup.getByRole('textbox', { name: /email/i });
	const passwordField = registerSetup.getByPlaceholderText(/Password/i);

	const submitButton = registerSetup.getByRole('button', { name: /submit/i });

	return {
		registerSetup,
		registerForm,
		firstNameField,
		lastNameField,
		emailField,
		passwordField,
		submitButton,
		...registerSetup
	};
};

const mockRegister = jest.fn();
jest.mock('@hooks/auth', () => ({
	useRegister: (): any => mockRegister
}));

describe('Register form', () => {
	it('matches snapshot', async () => {
		const { asFragment } = setup();
		await waitFor(() => asFragment());
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render RegisterForm', async () => {
		const { registerForm } = setup();
		expect(registerForm).toBeInTheDocument();
	});

	it('should render RegisterForm fields and submit should be disabled', async () => {
		const { submitButton } = setup();
		expect(submitButton).toBeDisabled();
	});

	it('should make register request on submit', async () => {
		const {
			firstNameField,
			lastNameField,
			emailField,
			passwordField,
			submitButton
		} = setup();

		expect(firstNameField).toBeInTheDocument();
		expect(lastNameField).toBeInTheDocument();
		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		userEvent.type(firstNameField, 'Jamie');
		await waitFor(() => expect(firstNameField).toHaveValue('Jamie'));

		userEvent.type(lastNameField, 'Lee');
		await waitFor(() => expect(lastNameField).toHaveValue('Lee'));

		userEvent.type(emailField, 'jamie@gmail.com');
		await waitFor(() => expect(emailField).toHaveValue('jamie@gmail.com'));

		userEvent.type(passwordField, 'admin123456');
		await waitFor(() => expect(passwordField).toHaveValue('admin123456'));

		await act(async () => {
			fireEvent.click(submitButton);
		});

		expect(mockRegister).toHaveBeenCalledTimes(1);
	});

	it('should error empty fields on blur', async () => {
		const { registerSetup, emailField, passwordField } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(passwordField);
		userEvent.type(passwordField, 'pwd');
		await waitFor(() => expect(passwordField).toHaveValue('pwd'));

		fireEvent.blur(passwordField);

		registerSetup.getByText(
			'Please enter a valid password between 6 and 20 characters'
		);
	});
});
