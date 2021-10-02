import { Image } from '@chakra-ui/image';
import { Heading, Stack, Text } from '@chakra-ui/layout';
import MainContainer from 'components/containers/MainContainer';
// import EditProfileForm from 'components/forms/EditProfileForm';
import React from 'react';
import { useCurrentUser } from '../hooks/auth';

const GettingStarted = (): JSX.Element => {
	const user = useCurrentUser();

	return (
		<MainContainer>
			<Stack
				spacing={6}
				bg={'white'}
				boxShadow={{ base: 'none', sm: 'sm' }}
				p={{ base: 0, sm: 6 }}
				borderColor={'gray.100'}
				borderWidth={{ base: 0, sm: '1px' }}
			>
				<Image
					src="/logo.png"
					mx="auto"
					alt="logo"
					height="40px"
					width="200px"
				/>
				<Heading textAlign="center" fontSize={'2xl'} color={'gray.700'}>
					Getting started
				</Heading>
				<Text textAlign="start" color={'gray.500'}>
					<b>Hi {user?.display_name.trim()} - great to see you! 🥳</b>
					<br /> Before you get started, we would like to gather some
					more information so that we can present you with the most
					suitable ideas and founders. Don&apos;t worry, you will be
					able to change these details later!
				</Text>
				{/* <EditProfileForm /> */}
			</Stack>
		</MainContainer>
	);
};

export default GettingStarted;
