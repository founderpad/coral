import { renderHook } from '@testing-library/react';
import useUpdateIdea from './updateidea';

const mockUpdateIdea = jest.fn();

jest.mock('@/generated/api', () => ({
	useUpdateIdeaMutation: () => [mockUpdateIdea]
}));

const idea = {
	additionalInformation: '',
	businessPlan: '',
	competitors: '',
	createdAt: new Date(),
	description: '',
	field: 'Cryptocurrency',
	isPublished: true,
	name: 'An updated idea',
	team: '',
	summary: '',
	status: ''
};

describe('useUpdateIdea', () => {
	it('should update an idea successfully', async () => {
		const { result } = renderHook(() => useUpdateIdea('1'));

		const mockSuccessfulUpdatedIdea = {
			idea: {
				name: 'An updated idea'
			}
		};

		result.current.onUpdateIdea(idea);

		expect(mockUpdateIdea).toHaveBeenCalledWith({
			variables: {
				idea,
				id: '1'
			},
			onCompleted: expect.any(Function),
			onError: expect.any(Function)
		});
	});
});
