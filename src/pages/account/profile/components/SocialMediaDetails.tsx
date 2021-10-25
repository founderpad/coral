import { Stack } from '@chakra-ui/react';
import { SubmitButton } from 'components/buttons';
import { Loading, TitleEditAction } from 'components/shared';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { TUser_Profile } from 'generated/api';
import gql from 'graphql-tag';
import { useCurrentUser } from 'hooks/auth';
import { cache } from 'pages/_app';
import React, { useContext } from 'react';
import {
	IoGlobeSharp,
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoLogoTwitter
} from 'react-icons/io5';
import SocialMediaDetailsForm from './forms/SocialMediaDetailsForm';
import { LinkSectionLabel } from './ProfileSectionLabel';

const SocialMediaDetails = (): JSX.Element => {
	const user = useCurrentUser();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const socials = cache.readFragment({
		id: `user_profile:${user.user_profile.id}`, // The value of the profile's cache id
		fragment: gql`
			fragment SocialMediaFragment on user_profile {
				id
				linkedin
				twitter
				instagram
				facebook
				website
			}
		`
	}) as TUser_Profile;

	const onClick = () => {
		setModalDrawer({
			title: 'Your socials',
			isOpen: true,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-socials-button'}
					form="editSocialDetailsForm"
					label={'Save'}
					size={'sm'}
				/>
			),
			body: <SocialMediaDetailsForm {...socials} />,
			noBtnLabel: 'Cancel',
			yesBtnLabel: 'Log out',
			yesBtnColor: 'red',
			hideFooter: true
		});
	};

	if (!socials) return <Loading small />;

	return (
		<Stack w={'full'} spacing={4} mb={4}>
			<TitleEditAction title={'Socials'} onClick={onClick} />
			<LinkSectionLabel
				link={socials?.linkedin}
				label={'LinkedIn'}
				icon={IoLogoLinkedin}
			/>
			<LinkSectionLabel
				link={socials?.twitter}
				label={'Twitter'}
				icon={IoLogoTwitter}
			/>
			<LinkSectionLabel
				link={socials?.instagram}
				label={'Instagram'}
				icon={IoLogoInstagram}
			/>
			<LinkSectionLabel
				link={socials?.facebook}
				label={'Facebook'}
				icon={IoLogoFacebook}
			/>
			<LinkSectionLabel
				link={socials?.website}
				label={'Website'}
				icon={IoGlobeSharp}
			/>
		</Stack>
	);
};

export default SocialMediaDetails;
