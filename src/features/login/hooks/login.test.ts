import { renderHook } from '@testing-library/react';
import { useLogin } from './login';

const mockLogin = jest.fn();

jest.mock('@nhost/nextjs', () => ({
	useSignInEmailPassword: () => ({
		signInEmailPassword: mockLogin
	})
}));

describe('useLogin', () => {
	it('should login successfully with correct credentials', async () => {
		const signInEmailPassword = mockLogin.mockResolvedValue({
			isSuccess: true,
			isError: false
		});

		const { result } = renderHook(() => useLogin());

		await result.current.onLogin({
			email: 'jamie@example.com',
			password: 'password123'
		});

		expect(signInEmailPassword).toHaveBeenCalledWith(
			'jamie@example.com',
			'password123'
		);

		const loginResult = await signInEmailPassword.mock.results[0].value;
		expect(loginResult).toEqual({
			isSuccess: true,
			isError: false
		});
	});

	it('should not login successfully with incorrect credentials', async () => {
		const signInEmailPassword = mockLogin.mockRejectedValue(
			new Error('Incorrect credentials')
		);

		const { result } = renderHook(() => useLogin());

		await result.current.onLogin({
			email: 'jamie@example.com',
			password: 'password123'
		});

		expect(signInEmailPassword).toHaveBeenCalledWith(
			'jamie@example.com',
			'password123'
		);

		await expect(signInEmailPassword).rejects.toThrow(
			'Incorrect credentials'
		);
	});
});
