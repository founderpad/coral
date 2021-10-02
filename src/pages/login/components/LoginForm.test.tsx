import { fireEvent, waitFor } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from 'utils/store';
import { render } from '__test__/testUtils';
import LoginForm from './LoginForm';

const setup = () => render(
	<Provider store={store}>
		<LoginForm />
	</Provider>
);

const mockLogin = jest.fn();
jest.mock('hooks/auth', () => ({
	useLogin: (): any => mockLogin
}));

describe('Login form', () => {
	it('matches snapshot', () => {
		const { asFragment } = setup();
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render LoginForm', () => {
		const { getByRole } = setup();
		expect(getByRole('form', { name: /loginform/i })).toBeInTheDocument();
	});

	it('should render LoginForm fields', () => {
		const { getByRole, getByPlaceholderText } = setup();
		expect(getByRole('textbox', { name: /email/i })).toBeInTheDocument();
		expect(getByPlaceholderText(/Password/i)).toBeInTheDocument();
		expect(getByRole('button', { name: /submit/i })).toBeInTheDocument();
		expect(getByRole('button', { name: /submit/i })).toBeDisabled();
	});

	test('should make login request on submit', async() => {
		const { getByPlaceholderText, getByRole } = setup();

		const emailInput = getByPlaceholderText(/Email/i);
		const passwordInput = getByPlaceholderText(/Password/i);
		const submitButton = getByRole('button', { name: /submit/i });

		expect(emailInput.value).toBe('');
		expect(passwordInput.value).toBe('');

		act(() => {
			fireEvent.change(emailInput, { target: { value: 'jamie@gmail.com' }});
			fireEvent.change(passwordInput, { target: { value: '123456' }});
		});

		expect(emailInput.value).toBe('jamie@gmail.com');
		expect(passwordInput.value).toBe('123456');

		fireEvent.submit(submitButton);
		await waitFor(() =>
			expect(mockLogin).toHaveBeenCalledTimes(1));
	});
});
