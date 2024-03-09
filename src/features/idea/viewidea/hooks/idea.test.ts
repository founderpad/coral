import { renderHook } from '@testing-library/react';
import useIdea from './idea';

const idea = {
	hasBoostedFeedback: [],
	hasInterest: null,
	data: {
		idea: {
			createdAt: new Date(),
			id: 'ideaId123',
			userId: 'userId123',
			field: 'Crytocurrency',
			name: 'A new idea',
			additionalInformation: 'additionalInformation'
		}
	}
};

const mockUseIdea = jest.fn();
jest.mock('@/generated/api', () => ({
	useIdeaQuery: () =>
		mockUseIdea({ variables: { id: 'ideaId123', userId: 'userId123' } }) // Move it inside the function
}));

describe('useIdea', () => {
	it('should call useIdea hook with provided params', async () => {
		renderHook(() => useIdea('ideaId123', 'userId123'));

		expect(mockUseIdea).toHaveBeenCalledWith({
			variables: {
				id: 'ideaId123',
				userId: 'userId123'
			}
		});
	});

	it('should return the idea from the useIdea hook', async () => {
		mockUseIdea.mockResolvedValue({
			loading: false,
			error: null,
			data: idea
		});

		const { result } = renderHook(() => useIdea('ideaId123', 'userId123'));

		const data = await result.current;

		expect(data).toEqual({
			loading: false,
			error: null,
			data: idea
		});
	});
});
