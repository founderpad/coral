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

// type InputProperties = keyof TUsers_Set_Input

type PersonalDetailsinput = Pick<
	TUsers_Set_Input,
	'displayName' | 'country' | 'location'
>;

const PersonalDetailsForm = (): ReactElement<any> => {
	const auth = useCurrentUser();

	const dispatch = useDispatch();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();

	const {
		handleSubmit,
		control,
		getValues,
		watch,
		formState: { errors, isSubmitting, isValid }
	} = useForm<PersonalDetailsinput>({
		mode: 'all',
		defaultValues: {
			...auth
		}
	});

	const watchCountry = watch('country', auth.country);

	const [updateUserPersonalDetails] = useUpdateUserPersonalDetailsMutation({
		variables: {
			id: auth.id,
			userPersonalDetails: {
				displayName: getValues('displayName'),
				// lastName: getValues('lastName'),
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
			{/* <InputField
				id="displayName"
				label="First name"
				placeholder="First name"
				error={errors['first_name']}
				errorText="You must input a first name"
				name="displayName"
				control={control}
				isRequired
			/>
			<InputField
				id="lastName"
				label="Last name"
				placeholder="Last name"
				error={errors['last_name']}
				errorText="Your last name"
				name="lastName"
				control={control}
				helperText={'This will not be shown to other users.'}
			/> */}
			<InputField
				id="displayName"
				label="Your name"
				placeholder="You name"
				error={errors['displayName']}
				errorText="You must input a name"
				name="displayName"
				control={control}
				isRequired
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
