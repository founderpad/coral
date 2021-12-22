import { FlexProps } from '@chakra-ui/react';
import { SubmitButton } from 'components/buttons';
import { StackLayout } from 'components/layouts';
import { TitleEditAction } from 'components/shared';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useCurrentUser } from 'hooks/auth';
import React, { memo, useContext } from 'react';
import { IoLocationSharp, IoMailSharp, IoTimeSharp } from 'react-icons/io5';
import { formatDate } from 'utils/validators';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import ProfileSectionLabel from './ProfileSectionLabel';
import SocialMediaDetails from './SocialMediaDetails';
import UserImageUploader from './UserImageUploader';

type Props = Pick<FlexProps, 'display' | 'mb'>;

const UserPersonalInformation = memo((props: Props): JSX.Element => {
	const user = useCurrentUser();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = () => {
		setModalDrawer({
			title: 'Your details',
			isOpen: true,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-personal-details-button'}
					form="editPersonalDetailsForm"
					label={'Save'}
					size={'xs'}
				/>
			),
			body: <PersonalDetailsForm />,
			noBtnLabel: 'Cancel',
			yesBtnLabel: 'Log out',
			yesBtnColor: 'red',
			hideFooter: true
		});
	};

	return (
		<StackLayout p={4}>
			<UserImageUploader />
			<StackLayout {...props} spacing={2} w={'full'}>
				<TitleEditAction
					title={user?.first_name + ' ' + user?.last_name}
					onClick={onClick}
				/>

				<ProfileSectionLabel
					label={user?.account.email}
					icon={IoMailSharp}
				/>

				<ProfileSectionLabel
					label={user?.country ?? 'Location not set'}
					icon={IoLocationSharp}
				/>
				<ProfileSectionLabel
					label={`Joined ` + formatDate(user?.created_at, true)}
					icon={IoTimeSharp}
				/>
				<SocialMediaDetails />
			</StackLayout>
		</StackLayout>
	);
});

export default UserPersonalInformation;
