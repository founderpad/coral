import { Stack } from '@chakra-ui/layout';
import { FlexProps } from '@chakra-ui/react';
import { SubmitButton } from 'components/buttons';
import { TitleEditAction } from 'components/shared';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useCurrentUser } from 'hooks/auth';
import React, { memo, useContext } from 'react';
import { IoLocationSharp, IoMailSharp, IoTimeSharp } from 'react-icons/io5';
import { formatDate } from 'utils/validators';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import ProfileSectionLabel from './ProfileSectionLabel';

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
		<Stack {...props} spacing={1} w={'full'} mb={4}>
			<TitleEditAction
				title={user?.first_name + ' ' + user?.last_name}
				onClick={onClick}
			/>

			<ProfileSectionLabel
				label={user?.account.email}
				icon={IoMailSharp}
			/>

			<ProfileSectionLabel label={user?.country} icon={IoLocationSharp} />
			<ProfileSectionLabel
				label={`Joined ` + formatDate(user?.created_at, true)}
				icon={IoTimeSharp}
			/>
		</Stack>
	);
});

export default UserPersonalInformation;
