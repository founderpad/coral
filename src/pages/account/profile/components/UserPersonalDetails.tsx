import { FlexProps } from '@chakra-ui/react';
import {
	IoLockClosedOutline,
	IoMailOutline,
	IoTimeOutline
} from '@/components/icons';
import { StackLayout } from '@/components/layouts';
import { TitleEditAction } from '@/components/shared';
import { formatDate } from '@/utils/validators';
import React, { memo } from 'react';
import ProfileSectionLabel from './ProfileSectionLabel';
import UserImageUploader from './UserImageUploader';
import { useUserData } from '@nhost/react';
import useChangePasswordModal from '../hooks/changepassword';

type Props = Pick<FlexProps, 'display' | 'mb'>;

const UserPersonalInformation = memo((props: Props) => {
	const user = useUserData();
	const { onOpenModal } = useChangePasswordModal();
	const {
		createdAt = '',
		displayName = '',
		email = ''
		// address,
		// profile
	} = user ?? {};
	// const { location = '', country = '' } = address ?? {};
	// const { pronouns = '', customPronouns = '' } = profile ?? {};

	// const userLocation = location
	// 	? `${location}, ${country}`
	// 	: country || 'Location not set';

	// const onPersonalDetailsClick = () => {
	// 	openModalDrawer({
	// 		title: 'Your details',
	// 		action: (
	// 			<SubmitButton
	// 				name="open-modal-drawer-personal-details-button"
	// 				form="edit-personal-details-form"
	// 				label="Save"
	// 			/>
	// 		),
	// 		body: <PersonalDetailsForm />
	// 	});
	// };

	// const onPasswordClick = () => {
	// 	openModalDrawer({
	// 		title: 'Your new password',
	// 		action: (
	// 			<SubmitButton
	// 				name="open-modal-drawer-change-password-button"
	// 				form="edit-change-password"
	// 				label="Save"
	// 			/>
	// 		),
	// 		body: (
	// 			<ChangePasswordForm
	// 				showPasswordLabel={true}
	// 				showSubmit={false}
	// 			/>
	// 		)
	// 	});
	// };

	return (
		<StackLayout p={4} spacing={8}>
			<UserImageUploader />
			<StackLayout {...props} spacing={2}>
				<TitleEditAction
					title={displayName}
					// subtitle={
					// 	<PronounsLabel
					// 		pronouns={pronouns}
					// 		customPronouns={customPronouns}
					// 	/>
					// }
					// onClick={onPersonalDetailsClick}
				/>

				<ProfileSectionLabel label={email} icon={IoMailOutline} />

				{/* <ProfileSectionLabel
					label={userLocation}
					icon={IoLocationOutline}
				/> */}
				<ProfileSectionLabel
					label={`Joined ` + formatDate(createdAt, true)}
					icon={IoTimeOutline}
				/>
			</StackLayout>

			<StackLayout spacing={2} w="full">
				<TitleEditAction title="Password" onClick={onOpenModal} />
				<ProfileSectionLabel
					label="*********"
					icon={IoLockClosedOutline}
				/>
			</StackLayout>
		</StackLayout>
	);
});

export default UserPersonalInformation;
