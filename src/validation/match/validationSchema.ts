import { TMatch_Settings_Set_Input } from '@/generated/api';
import * as yup from 'yup';

type TMatchSettings = Pick<
	TMatch_Settings_Set_Input,
	'type' | 'lookingFor' | 'skills'
>;

export const schema: yup.ObjectSchema<TMatchSettings> = yup.object().shape({
	type: yup.string().required('You must provide what you are offering.'),
	lookingFor: yup
		.string()
		.required('You must provide what you are looking for.'),
	skills: yup
		.array()
		.of(yup.string())
		.min(1, 'You must provide at least one skill.')
		.required('You must provide your current startup status.')
});

export default schema;
