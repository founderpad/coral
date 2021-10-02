import { render } from '__test__/testUtils';
import store from 'utils/store';
import { Provider } from 'react-redux';
import PageLayout from './PageLayout';
import { Box } from '@chakra-ui/layout';

describe('PageLayout layout', () => {
	it('matches PageLayout snapshot', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<PageLayout
					title="Page layout test"
				>
					<Box>
                        Children
                    </Box>
				</PageLayout>
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('renders PageLayout with title', () => {
		const { getByText } = render(
			<Provider store={store}>
				<PageLayout
					title="Page layout test"
				>
					<Box>
                        Children
                    </Box>
				</PageLayout>
			</Provider>
		);
		expect(getByText(/Page layout test/i)).toBeInTheDocument();
	});

	it('renders PageLayout with children component', () => {
		const { getByText } = render(
			<Provider store={store}>
				<PageLayout
					title="Page layout test"
				>
					<Box data>
                        Children
                    </Box>
				</PageLayout>
			</Provider>
		);
		expect(getByText(/Page layout test/i)).toBeInTheDocument();
	});
});

// it('clicking button triggers alert', () => {
//     const { getByText } = render(<Home />, {});
//     window.alert = jest.fn();
//     fireEvent.click(getByText('Test Button'));
//     expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
// });
