import * as yup from 'yup';

export const schema: yup.ObjectSchema<{ email: string }> = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email address')
		.required('You must enter a valid email address')
});

export default schema;
