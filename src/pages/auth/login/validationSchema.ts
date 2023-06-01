import { TLoginFields } from '@/types/auth';
import * as yup from 'yup';

export const schema: yup.ObjectSchema<TLoginFields> = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email address')
		.required('You must enter a valid email address'),
	password: yup
		.string()
		.min(6, 'Your password must be a minimum of 6 characters')
		.max(20, 'Your password must be a minimum of 6 characters')
		.required('You must enter a valid password')
});
