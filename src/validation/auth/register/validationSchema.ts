import { TRegisterFormFields } from '@/types/auth';
import * as yup from 'yup';

const schema: yup.ObjectSchema<TRegisterFormFields> = yup.object().shape({
	firstName: yup
		.string()
		.min(2, 'Your first name must be a minimum of 2 characters')
		.max(30, 'Your first name must be a maximum of 30 characters')
		.required('You must enter a first name'),
	lastName: yup
		.string()
		.max(30, 'Your last name must be a maximum of 30 characters'),
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

export default schema;
