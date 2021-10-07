import LoginForm from 'pages/login/components/LoginForm';
import RegisterForm from 'pages/register/components/RegisterForm';
import { render } from '__test__/testUtils';
import store from 'utils/store';
import { Provider } from 'react-redux';
import AuthLayout from '../components/layouts/AuthLayout';

describe('AuthLayout layout', () => {
	it('matches AuthLayout snapshot', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<AuthLayout
					header="Login"
					subheader="Pick up where you left off"
					title="Login"
				>
					<LoginForm />
				</AuthLayout>
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('renders AuthLayout with LoginForm form', () => {
		render(
			<Provider store={store}>
				<AuthLayout header="Login" title="Login">
					<LoginForm />
				</AuthLayout>
			</Provider>
		);
	});

	it('renders AuthLayout with RegisterForm form', () => {
		const { getByText } = render(
			<Provider store={store}>
				<AuthLayout header="Register" title="Login">
					<RegisterForm />
				</AuthLayout>
			</Provider>
		);
		expect(getByText('Register')).toBeInTheDocument();
	});
});

// it('clicking button triggers alert', () => {
//     const { getByText } = render(<Home />, {});
//     window.alert = jest.fn();
//     fireEvent.click(getByText('Test Button'));
//     expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
// });
