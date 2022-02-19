import { FlexProps } from '@chakra-ui/react';
import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import {
	IoLocationOutline,
	IoLockClosedOutline,
	IoMailOutline,
	IoTimeOutline
} from '@components/icons';
import { Label } from '@components/labels';
import { StackLayout } from '@components/layouts';
import { TitleEditAction } from '@components/shared';
import ChangePasswordForm from '@components/shared/ChangePasswordForm';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { formatDate } from '@utils/validators';
import React, { memo, useContext } from 'react';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import ProfileSectionLabel from './ProfileSectionLabel';
import UserImageUploader from './UserImageUploader';

type Props = Pick<FlexProps, 'display' | 'mb'>;

const UserPersonalInformation = memo((props: Props) => {
	const user = useCurrentUser();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const {
		createdAt = '',
		displayName = '',
		email = '',
		address,
		profile
	} = user ?? {};
	const { location = '', country = '' } = address ?? {};
	const { pronouns = '', customPronouns = '' } = profile ?? {};

	const userLocation = location
		? `${location}, ${country}`
		: country
		? country
		: 'Location not set';

	const isDetailsChangeSuccess = useQueryParam('pd_success');
	const isPwdChangeSuccess = useQueryParam('cp_success');
	const isPwdChangeError = useQueryParam('cp_error');

	const onPersonalDetailsClick = () => {
		setModalDrawer({
			title: 'Your details',
			isOpen: true,
			action: (
				<SubmitButton
					name="open-modal-drawer-personal-details-button"
					form="editPersonalDetailsForm"
					label="Save"
				/>
			),
			body: <PersonalDetailsForm />
		});
	};

	const onPasswordClick = () => {
		setModalDrawer({
			title: 'Your new password',
			isOpen: true,
			action: (
				<SubmitButton
					name="open-modal-drawer-change-password-button"
					form="edit-change-password"
					label="Save"
				/>
			),
			body: (
				<ChangePasswordForm
					showPasswordLabel={true}
					showSubmit={false}
				/>
			)
		});
	};

	return (
		<StackLayout p={{ base: 4, sm: 0 }}>
			<UserImageUploader />
			<StackLayout {...props} spacing={2}>
				<TitleEditAction
					title={displayName}
					subtitle={
						<Label fontSize={'xs'} color={'fpGrey.500'}>
							(
							{customPronouns
								? customPronouns
								: pronouns
								? pronouns
								: ''}
							)
						</Label>
					}
					onClick={onPersonalDetailsClick}
				/>

				<ProfileSectionLabel label={email} icon={IoMailOutline} />

				<ProfileSectionLabel
					label={userLocation}
					icon={IoLocationOutline}
				/>
				<ProfileSectionLabel
					label={`Joined ` + formatDate(createdAt, true)}
					icon={IoTimeOutline}
				/>
				{isDetailsChangeSuccess && (
					<AlertFeedback
						status={'success'}
						message={'Details updated successfully'}
					/>
				)}
				{/* <SocialMediaDetails /> */}
			</StackLayout>

			<StackLayout spacing={2} w={'full'}>
				<TitleEditAction title={'Password'} onClick={onPasswordClick} />
				<ProfileSectionLabel
					label={'*********'}
					icon={IoLockClosedOutline}
				/>
				{isPwdChangeSuccess && (
					<AlertFeedback
						status={'success'}
						message={'Password updated successfully'}
					/>
				)}
				{isPwdChangeError && (
					<AlertFeedback
						status={'error'}
						message={
							'Failed to change password. Please try again later'
						}
					/>
				)}
			</StackLayout>
		</StackLayout>
	);
});

export default UserPersonalInformation;
