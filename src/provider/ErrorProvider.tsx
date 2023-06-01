import ErrorContext from '@/context/ErrorContext';
import { TError } from '@/types/error';
import { ReactNode, useState } from 'react';

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
	const [error, setError] = useState<TError | null>({
		isError: false,
		errorMessage: '',
		errorCode: undefined,
		optionalMessage: ''
	});

	const showError = (error: TError) => {
		setError({ ...error });
	};

	const clearError = () => {
		setError(null);
	};

	return (
		<ErrorContext.Provider value={{ error, showError, clearError }}>
			{children}
		</ErrorContext.Provider>
	);
};
