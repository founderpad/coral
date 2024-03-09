import { render } from '@testing-library/react';
import { CreateIdeaContainer } from '..';

describe('CreateIdeaContainer', () => {
	it('shoulder render the CreateIdeaContainer', async () => {
		render(<CreateIdeaContainer />);
	});
});
