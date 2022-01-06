import Form from 'components/form/Form';
import { InputField } from 'components/input/InputField';
import { SelectField } from 'components/input/SelectField';
import ModalDrawerContext from 'context/ModalDrawerContext';
import {
	TUsers,
	TUsers_Set_Input,
	useUpdateUserPersonalDetailsMutation
} from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useSuccessNotification } from 'hooks/toast';
import { ReactElement, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updatePersonalDetails } from 'slices/auth';
import { countriesList } from 'utils/Constants';
import { auth } from 'utils/nhost';

const PersonalDetailsForm = (): ReactElement<any> => {
	const user = useCurrentUser();

	const dispatch = useDispatch();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();

	const {
		handleSubmit,
		control,
		getValues,
		watch,
		formState: { errors, isSubmitting, isValid }
	} = useForm<
		Pick<
			TUsers_Set_Input,
			'first_name' | 'last_name' | 'country' | 'location'
		>
	>({
		mode: 'all',
		defaultValues: {
			...user
		}
	});

	const watchCountry = watch('country', user.country);

	const [updateUserPersonalDetails] = useUpdateUserPersonalDetailsMutation({
		variables: {
			id: auth.getClaim('x-hasura-user-id') as string,
			userPersonalDetails: {
				first_name: getValues('first_name'),
				last_name: getValues('last_name'),
				country: getValues('country'),
				location: getValues('location')
			}
		},
		onCompleted: (data) => {
			const user = data.user;
			dispatch(updatePersonalDetails(user as TUsers));
			setModalDrawer({
				isOpen: false
			});

			showSuccessNotification({
				title: 'Your personal details have been updated'
			});
		}
	});

	return (
		<Form
			id={'editPersonalDetailsForm'}
			name={'editPersonalDetailsForm'}
			onSubmit={handleSubmit(updateUserPersonalDetails)}
			isSubmitting={isSubmitting}
			isValid={isValid}
		>
			<InputField
				id="first_name"
				label="First name"
				placeholder="First name"
				error={errors['first_name']}
				errorText="You must input a first name"
				name="first_name"
				control={control}
				isRequired
			/>
			<InputField
				id="last_name"
				label="Last name"
				placeholder="Last name"
				error={errors['last_name']}
				errorText="Your last name"
				name="last_name"
				control={control}
				helperText={'This will not be shown to other users.'}
			/>

			<SelectField
				id="country"
				name="country"
				label="Country"
				placeholder={'country'}
				options={countriesList()}
				control={control}
				full
			/>

			{watchCountry && (
				<InputField
					id="location"
					label="Location"
					placeholder="Location"
					name="location"
					control={control}
				/>
			)}
		</Form>
	);
};

export default PersonalDetailsForm;
