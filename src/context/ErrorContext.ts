import { TError } from '@/types/error';
import { createContext } from 'react';

interface IErrorProps {
	error: TError | null;
	showError: (error: TError) => void;
	clearError: () => void;
}

const ErrorContext = createContext<IErrorProps>({
	error: {} as TError,
	showError: () => {},
	clearError: () => {}
});

export default ErrorContext;
