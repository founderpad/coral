import {
	IoGlobe,
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoLogoTwitter
} from 'components/icons';
import { FlexLayout, StackLayout } from 'components/layouts';
import { IconLink } from 'components/links';
import { TUser_Profile } from 'generated/api';
import gql from 'graphql-tag';
import { useCurrentUser } from 'hooks/auth';
import { cache } from 'pages/_app';
import React from 'react';

const SocialMediaDetails = (): JSX.Element => {
	const user = useCurrentUser();
	// const { setModalDrawer } = useContext(ModalDrawerContext);

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

	// const socialsObj = [
	// 	socials?.linkedin,
	// 	socials?.twitter,
	// 	socials?.instagram,
	// 	socials?.facebook,
	// 	socials?.website
	// ];

	// const onClick = () => {
	// 	setModalDrawer({
	// 		title: 'Your socials',
	// 		isOpen: true,
	// 		actions: (
	// 			<SubmitButton
	// 				name={'open-modal-drawer-socials-button'}
	// 				form="editSocialDetailsForm"
	// 				label={'Save'}
	// 				size={'sm'}
	// 			/>
	// 		),
	// 		body: <SocialMediaDetailsForm {...socials} />,
	// 		noBtnLabel: 'Cancel',
	// 		yesBtnLabel: 'Log out',
	// 		yesBtnColor: 'red',
	// 		hideFooter: true
	// 	});
	// };

	return (
		<FlexLayout justifyContent={'space-between'} pt={6}>
			{/* {Object.values(socialsObj).every(
				(social) => social === undefined
			) ? (
				<ProfileSectionLabel label={'Socials not set'} />
			) : (
				<> */}
			<StackLayout direction={'row'} alignItems={'center'} spacing={3}>
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
						iconProps={{ boxSize: 6 }}
					/>
				)}
				{socials?.twitter && (
					<IconLink
						title={socials.twitter}
						href={socials.twitter}
						icon={IoLogoTwitter}
						color={'gray.400'}
						_hover={{
							color: 'twitter.500',
							cursor: 'pointer'
						}}
						iconProps={{ boxSize: 6 }}
					/>
				)}
				{socials?.instagram && (
					<IconLink
						title={socials.instagram}
						href={socials.instagram}
						icon={IoLogoInstagram}
						color={'gray.400'}
						_hover={{
							color: 'instagram.500',
							cursor: 'pointer'
						}}
						iconProps={{ boxSize: 6 }}
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
						iconProps={{ boxSize: 6 }}
					/>
				)}
				{socials?.website && (
					<IconLink
						title={socials.website}
						href={socials.website}
						icon={IoGlobe}
						color={'gray.400'}
						_hover={{
							color: 'website.500',
							cursor: 'pointer'
						}}
						iconProps={{ boxSize: 6 }}
					/>
				)}
			</StackLayout>
			{/* <EditButton onClick={onClick} aria-label={'Edit'} /> */}
			{/* </> */}
			{/* )} */}
		</FlexLayout>
	);
};

export default SocialMediaDetails;
