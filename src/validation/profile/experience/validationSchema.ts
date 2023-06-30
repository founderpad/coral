import { TUser_Profile_Set_Input } from '@/generated/api';
import * as yup from 'yup';

type ExperienceInput = Pick<
	TUser_Profile_Set_Input,
	'objective' | 'background' | 'statement' | 'status'
>;

export const schema: yup.ObjectSchema<ExperienceInput> = yup.object().shape({
	objective: yup
		.string()
		.required('You must provide your objective on this platform.'),
	background: yup
		.string()
		.max(400, 'Your background can not be more than 400 characters.')
		.nullable(),
	statement: yup
		.string()
		.max(
			400,
			'Your personal statement can not be more than 400 characters.'
		)
		.nullable(),
	status: yup
		.string()
		.required('You must provide your current startup status.'),
	skills: yup.array().min(1, 'You must select at least one skill.')
});

export default schema;
