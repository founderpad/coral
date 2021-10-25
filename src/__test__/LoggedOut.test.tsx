import LoggedOut from 'pages/app/loggedout';
import { Provider } from 'react-redux';
import store from 'utils/store';
import { render } from '__test__/testUtils';

const setup = () =>
	render(
		<Provider store={store}>
			<LoggedOut />
		</Provider>
	);

describe('Logged out page', () => {
	it('matches snapshot', () => {
		const { asFragment } = setup();
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render LoggedOut page', () => {
		const { getByRole } = setup();
		expect(getByRole('link')).toBeInTheDocument();
	});
});
