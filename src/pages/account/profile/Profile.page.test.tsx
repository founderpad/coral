import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './index.page';

describe('Profile', () => {
	it('should render profile page', () => {
		render(<Profile />);
	});
});
