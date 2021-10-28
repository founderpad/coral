import Icon from '@chakra-ui/icon';
import { EditButton, SubmitButton } from 'components/buttons';
import { FlexLayout, StackLayout } from 'components/layouts';
import { Loading } from 'components/shared';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { TUser_Profile } from 'generated/api';
import gql from 'graphql-tag';
import { useCurrentUser } from 'hooks/auth';
import { cache } from 'pages/_app';
import React, { useContext } from 'react';
import {
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoLogoTwitter
} from 'react-icons/io5';
import SocialMediaDetailsForm from './forms/SocialMediaDetailsForm';

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
		<FlexLayout justifyContent={'space-between'} pt={6}>
			<StackLayout direction={'row'} alignItems={'center'} spacing={2}>
				{socials?.linkedin && (
					<Icon
						as={IoLogoLinkedin}
						color={'gray.400'}
						_hover={{ color: 'linkedin.700', cursor: 'pointer' }}
						boxSize={'6'}
					/>
				)}
				{socials?.twitter && (
					<Icon
						as={IoLogoTwitter}
						color={'gray.400'}
						_hover={{ color: 'twitter.500', cursor: 'pointer' }}
						boxSize={'6'}
					/>
				)}
				{socials?.instagram && (
					<Icon
						as={IoLogoInstagram}
						color={'gray.400'}
						_hover={{
							// bg: 'linear-gradient(45DEG, #405DE6, #5851DB, #C13584, #E1306C, #FD1D1D)',
							color: 'black',
							cursor: 'pointer'
						}}
						boxSize={'6'}
					/>
				)}
				{socials?.facebook && (
					<Icon
						as={IoLogoFacebook}
						color={'gray.400'}
						_hover={{ color: 'facebook.500', cursor: 'pointer' }}
						boxSize={'6'}
					/>
				)}
			</StackLayout>
			<EditButton onClick={onClick} aria-label={'Edit'} />
		</FlexLayout>
	);
};

export default SocialMediaDetails;
