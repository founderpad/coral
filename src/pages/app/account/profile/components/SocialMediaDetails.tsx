import { EditButton, SubmitButton } from 'components/buttons';
import { FlexLayout, StackLayout } from 'components/layouts';
import { IconLink } from 'components/links';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { TUser_Profile } from 'generated/api';
import gql from 'graphql-tag';
import { useCurrentUser } from 'hooks/auth';
import { cache } from 'pages/_app';
import React, { useContext } from 'react';
import {
	IoGlobe,
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

	// if (!socials) return <Loading small />;

	if (socials)
		return (
			<FlexLayout justifyContent={'space-between'} pt={6}>
				<StackLayout
					direction={'row'}
					alignItems={'center'}
					spacing={3}
				>
					{socials?.linkedin && (
						<IconLink
							title={socials.linkedin}
							href={socials.linkedin}
							icon={IoLogoLinkedin}
							color={'gray.400'}
							_hover={{
								color: 'linkedin.700',
								cursor: 'pointer'
							}}
							boxSize={5}
						/>
					)}
					{socials?.twitter && (
						<IconLink
							title={socials.twitter}
							href={socials.twitter}
							icon={IoLogoTwitter}
							color={'gray.400'}
							_hover={{ color: 'twitter.500', cursor: 'pointer' }}
							boxSize={5}
						/>
					)}
					{socials?.instagram && (
						<IconLink
							title={socials.instagram}
							href={socials.instagram}
							icon={IoLogoInstagram}
							color={'gray.400'}
							// bg: 'linear-gradient(45DEG, #405DE6, #5851DB, #C13584, #E1306C, #FD1D1D)',
							_hover={{
								color: 'instagram.500',
								cursor: 'pointer'
							}}
							boxSize={5}
						/>
					)}
					{socials?.facebook && (
						<IconLink
							title={socials.facebook}
							href={socials.facebook}
							icon={IoLogoFacebook}
							color={'gray.400'}
							_hover={{
								color: 'facebook.500',
								cursor: 'pointer'
							}}
							boxSize={5}
						/>
					)}
					{socials?.website && (
						<IconLink
							title={socials.website}
							href={socials.website}
							icon={IoGlobe}
							color={'gray.400'}
							_hover={{ color: 'website.500', cursor: 'pointer' }}
							boxSize={5}
						/>
					)}
				</StackLayout>
				<EditButton onClick={onClick} aria-label={'Edit'} />
			</FlexLayout>
		);

	return null;
};

export default SocialMediaDetails;
