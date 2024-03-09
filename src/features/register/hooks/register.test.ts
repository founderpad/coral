import { renderHook } from '@testing-library/react';
import { useRegister } from './register';

const mockRegister = jest.fn();

jest.mock('@nhost/nextjs', () => ({
	useSignUpEmailPassword: () => ({
		signUpEmailPassword: mockRegister
	})
}));

describe('useRegister', () => {
	it('should register successfully with correct credentials', async () => {
		const signUpEmailPassword = mockRegister.mockResolvedValue({
			isSuccess: true,
			isError: false
		});

		const { result } = renderHook(() => useRegister());

		await result.current.onRegister({
			firstName: 'Jamie',
			lastName: 'Lee',
			email: 'jamie@example.com',
			password: 'password123'
		});

		expect(signUpEmailPassword).toHaveBeenCalledWith(
			'jamie@example.com',
			'password123',
			{
				displayName: 'Jamie Lee',
				metadata: { firstName: 'Jamie', lastName: 'Lee' }
			}
		);

		const registerResult = await signUpEmailPassword.mock.results[0].value;
		expect(registerResult).toEqual({
			isSuccess: true,
			isError: false
		});
	});
});
