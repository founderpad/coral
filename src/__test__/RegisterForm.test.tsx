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
		name: /register-form/i
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
	// const socialSignup = registerSetup.getByTestId('socialLogin');

	return {
		registerSetup,
		registerForm,
		firstNameField,
		lastNameField,
		emailField,
		passwordField,
		submitButton,
		// socialSignup,
		...registerSetup
	};
};

const mockRegister = jest.fn();
// const mockSocialRegister = jest.fn();

jest.mock('@hooks/auth', () => ({
	useRegister: (): any => mockRegister
	// useSocialLogin: (): any => mockSocialRegister
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

	it('should render RegisterForm fields and submit should be enabled by default', async () => {
		const {
			emailField,
			passwordField,
			firstNameField,
			lastNameField,
			submitButton
		} = setup();
		expect(firstNameField).toBeInTheDocument();
		expect(lastNameField).toBeInTheDocument();
		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();
		expect(submitButton).toBeEnabled();
	});

	it('should make successful register request on submit', async () => {
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

	it('should error if firstName is too short (< 2 characters) on blur', async () => {
		const { registerSetup, firstNameField } = setup();

		expect(firstNameField).toBeInTheDocument();

		fireEvent.focus(firstNameField);
		userEvent.type(firstNameField, 'j');
		await waitFor(() => expect(firstNameField).toHaveValue('j'));

		fireEvent.blur(firstNameField);

		registerSetup.getByText(
			'You first name must be a minimum of 2 characters'
		);
	});

	it('should error if firstName is too long (> 30 characters) on blur', async () => {
		const { registerSetup, firstNameField } = setup();

		expect(firstNameField).toBeInTheDocument();

		fireEvent.focus(firstNameField);
		userEvent.type(firstNameField, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
		await waitFor(() =>
			expect(firstNameField).toHaveValue(
				'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
			)
		);

		fireEvent.blur(firstNameField);

		registerSetup.getByText(
			'You first name must be a maximum of 30 characters'
		);
	});

	it('should error if lastName is too long (> 30 characters) on blur', async () => {
		const { registerSetup, lastNameField } = setup();

		expect(lastNameField).toBeInTheDocument();

		fireEvent.focus(lastNameField);
		userEvent.type(lastNameField, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
		await waitFor(() =>
			expect(lastNameField).toHaveValue('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
		);

		fireEvent.blur(lastNameField);

		registerSetup.getByText(
			'Your last name must be a maximum of 30 characters'
		);
	});

	it('should error if invalid register email format on blur', async () => {
		const { registerSetup, emailField } = setup();

		expect(emailField).toBeInTheDocument();

		fireEvent.focus(emailField);
		userEvent.type(emailField, 'testemail');
		await waitFor(() => expect(emailField).toHaveValue('testemail'));

		fireEvent.blur(emailField);

		registerSetup.getByText('You must enter a valid email address');
	});

	it('should error if register email is empty on blur', async () => {
		const { registerSetup, emailField, submitButton } = setup();

		expect(emailField).toBeInTheDocument();

		await act(async () => {
			fireEvent.click(submitButton);
		});

		registerSetup.getByText('You must enter a valid email address');
	});

	it('should error if password too short (< 6 characters) on blur', async () => {
		const { registerSetup, emailField, passwordField } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(passwordField);
		userEvent.type(passwordField, 'pwd');
		await waitFor(() => expect(passwordField).toHaveValue('pwd'));

		fireEvent.blur(passwordField);

		registerSetup.getByText(
			'Your password must be a minimum of 6 characters'
		);
	});

	it('should error if password too long (> 20 characters) on blur', async () => {
		const { registerSetup, emailField, passwordField } = setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(passwordField);
		userEvent.type(passwordField, 'abcdefghjklmnopqrstuvwxyz');
		await waitFor(() =>
			expect(passwordField).toHaveValue('abcdefghjklmnopqrstuvwxyz')
		);

		fireEvent.blur(passwordField);

		registerSetup.getByText(
			'Your password must be a maximum of 20 characters'
		);
	});

	it('should error if submitted without valid password', async () => {
		const { registerSetup, emailField, passwordField, submitButton } =
			setup();

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		await act(async () => {
			fireEvent.click(submitButton);
		});

		registerSetup.getByText('You must enter a valid password');
	});

	// it('should error on empty name on blur', async () => {
	// 	const {
	// 		registerSetup,
	// 		firstNameField,
	// 		lastNameField,
	// 		emailField,
	// 		passwordField
	// 	} = setup();

	// 	expect(firstNameField).toBeInTheDocument();
	// 	expect(lastNameField).toBeInTheDocument();
	// 	expect(emailField).toBeInTheDocument();
	// 	expect(passwordField).toBeInTheDocument();

	// 	fireEvent.focus(firstNameField);
	// 	userEvent.type(firstNameField, ' ');
	// 	await waitFor(() => expect(firstNameField).toHaveValue(' '));

	// 	fireEvent.blur(firstNameField);

	// 	registerSetup.getByText('You must enter a first name');
	// });

	// it('should error on empty name on blur', async () => {
	// 	const {
	// 		registerSetup,
	// 		firstNameField,
	// 		lastNameField,
	// 		emailField,
	// 		passwordField
	// 	} = setup();

	// 	expect(firstNameField).toBeInTheDocument();
	// 	expect(lastNameField).toBeInTheDocument();
	// 	expect(emailField).toBeInTheDocument();
	// 	expect(passwordField).toBeInTheDocument();

	// 	fireEvent.focus(firstNameField);
	// 	userEvent.type(firstNameField, ' ');
	// 	await waitFor(() => expect(firstNameField).toHaveValue(' '));

	// 	fireEvent.blur(firstNameField);

	// 	registerSetup.getByText('You must enter a first name');
	// });

	it('should error on empty email on blur', async () => {
		const {
			registerSetup,
			firstNameField,
			lastNameField,
			emailField,
			passwordField
		} = setup();

		expect(firstNameField).toBeInTheDocument();
		expect(lastNameField).toBeInTheDocument();
		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(emailField);
		userEvent.type(emailField, 'j@gmail');
		await waitFor(() => expect(emailField).toHaveValue('j@gmail'));

		fireEvent.blur(emailField);

		registerSetup.getByText('You must enter a valid email address');
	});

	it('should error on empty password on blur', async () => {
		const {
			registerSetup,
			firstNameField,
			lastNameField,
			emailField,
			passwordField
		} = setup();

		expect(firstNameField).toBeInTheDocument();
		expect(lastNameField).toBeInTheDocument();
		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();

		fireEvent.focus(passwordField);
		userEvent.type(passwordField, 'pwd');
		await waitFor(() => expect(passwordField).toHaveValue('pwd'));

		fireEvent.blur(passwordField);

		registerSetup.getByText(
			'Your password must be a minimum of 6 characters'
		);
	});

	// it('should make social sign up request', async () => {
	// 	const { socialSignup } = setup();

	// 	await act(async () => {
	// 		fireEvent.click(socialSignup);
	// 	});

	// 	expect(mockSocialRegister).toHaveBeenCalledTimes(1);
	// });
});
