import { render } from '__test__/testUtils';
import RegisterForm from '../pages/register/components/RegisterForm';
import { Provider } from 'react-redux';
import store from 'utils/store';
import { act } from 'react-dom/test-utils';
import { fireEvent, waitFor } from '@testing-library/dom';

const setup = () =>
	render(
		<Provider store={store}>
			<RegisterForm />
		</Provider>
	);

const mockRegister = jest.fn();
jest.mock('hooks/auth', () => ({
	useRegister: (): any => mockRegister
}));

describe('Register form', () => {
	it('matches snapshot', () => {
		const { asFragment } = setup();
		// expect(asFragment()).toMatchSnapshot();
	});

	it('renders register form', () => {
		const { getByText } = setup();
		expect(getByText(/Create account/i)).toBeInTheDocument();
	});

	it('should render RegisterForm fields', () => {
		const { getByRole } = setup();
		// expect(getByRole('combobox', { name: 'type' })).toBeInTheDocument();
		expect(getByRole('textbox', { name: 'firstName' })).toBeInTheDocument();
		expect(getByRole('textbox', { name: 'lastName' })).toBeInTheDocument();
		expect(getByRole('textbox', { name: 'email' })).toBeInTheDocument();
	});

	it('should accept RegisterForm fields with input', () => {
		const { getByPlaceholderText } = setup();
		const firstNameInput = getByPlaceholderText(/First name/i);
		const lastNameInput = getByPlaceholderText(/Last name/i);

		expect(firstNameInput.value).toBe('');
		expect(lastNameInput.value).toBe('');

		act(() => {
			fireEvent.change(firstNameInput, { target: { value: 'Jamie' } });
			fireEvent.change(lastNameInput, { target: { value: 'Last name' } });
		});

		expect(firstNameInput.value).toBe('Jamie');
		expect(lastNameInput.value).toBe('Last name');
	});

	test('should make register request on submit', async () => {
		const { getByRole, getByPlaceholderText } = setup();

		const typeInput = getByRole('combobox', { name: /type/i });
		const firstNameInput = getByRole('textbox', { name: /firstName/i });
		const lastNameInput = getByRole('textbox', { name: /lastName/i });
		const emailInput = getByRole('textbox', { name: /email/i });
		const passwordInput = getByPlaceholderText(/Password/i);
		const submitButton = getByRole('button', { name: /submit/i });

		expect(typeInput.value).toBe('');
		expect(firstNameInput.value).toBe('');
		expect(lastNameInput.value).toBe('');
		expect(emailInput.value).toBe('');
		expect(passwordInput.value).toBe('');

		act(() => {
			fireEvent.change(typeInput, { target: { value: 'IDEAS' } });
			fireEvent.change(firstNameInput, { target: { value: 'Jamie' } });
			fireEvent.change(lastNameInput, { target: { value: 'Lee' } });
			fireEvent.change(emailInput, {
				target: { value: 'jamie@gmail.com' }
			});
			fireEvent.change(passwordInput, { target: { value: '123456' } });
		});

		expect(typeInput.value).toBe('IDEAS');
		expect(firstNameInput.value).toBe('Jamie');
		expect(lastNameInput.value).toBe('Lee');
		expect(emailInput.value).toBe('jamie@gmail.com');
		expect(passwordInput.value).toBe('123456');

		fireEvent.submit(submitButton);
		await waitFor(() => expect(mockRegister).toHaveBeenCalledTimes(1));
	});
});
