import { render } from 'src/__test__/testUtils';
import Profile from './index.page';

describe('Profile', () => {
	it('should render profile page', () => {
		render(<Profile />);
	});
});
