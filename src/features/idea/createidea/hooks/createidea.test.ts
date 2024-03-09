import { renderHook } from '@testing-library/react';
import useCreateIdea from './createidea';

const mockCreateIdea = jest.fn();

jest.mock('@/generated/api', () => ({
	useCreateIdeaMutation: () => [mockCreateIdea]
}));

const idea = {
	additionalInformation: '',
	businessPlan: '',
	competitors: '',
	createdAt: new Date(),
	description: '',
	field: 'Cryptocurrency',
	isPublished: true,
	name: 'A new idea',
	team: '',
	summary: '',
	status: ''
};

describe('useCreateIdea', () => {
	it('should create a new idea successfully', async () => {
		const { result } = renderHook(() => useCreateIdea());

		const mockSuccessfulIdea = {
			idea: {
				name: 'A new idea'
			}
		};

		result.current.onCreateIdea(idea);

		expect(mockCreateIdea).toHaveBeenCalledWith({
			variables: {
				idea
			},
			onCompleted: expect.any(Function),
			onError: expect.any(Function)
		});
	});
});
