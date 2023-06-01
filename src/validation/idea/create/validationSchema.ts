import { TIdeas_Set_Input } from '@/generated/api';
import * as yup from 'yup';

type TIdeaInput = Pick<
	TIdeas_Set_Input,
	'name' | 'summary' | 'description' | 'status' | 'field' | 'competitors'
>;

export const schema: yup.ObjectSchema<TIdeaInput> = yup.object().shape({
	name: yup
		.string()
		.max(75, 'Idea name can not be more than 75 characters.')
		.required(
			'You must provide a name for your idea (max. 75 characters).'
		),
	summary: yup
		.string()
		.max(200, 'Summary can not be more than 200 characters.')
		.required(
			'You must provide a summary for your idea (max. 200 characters).'
		),
	description: yup
		.string()
		.max(750, 'Description can not be more than 750 characters.'),
	status: yup.string().required('You must provide the status for your idea.'),
	field: yup.string().required('You must provide the field for your idea'),
	competitors: yup
		.string()
		.max(250, 'Competitors can not be more than 250 characters.'),
	team: yup.string().max(250, 'Team can not be more than 250 characters.'),
	additionalInformation: yup
		.string()
		.max(500, 'Additional information can not be more than 500 characters.')
});

export default schema;
