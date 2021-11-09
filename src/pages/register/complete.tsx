import { Box, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import AuthLayout from 'components/layouts/AuthLayout';
import { PrimaryLink } from 'components/links';
import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

const Register = (): JSX.Element => {
	return (
		<AuthLayout
			header="Registration complete"
			title="Registration complete"
		>
			<Box display={'flex'} alignSelf={'center'}>
				<Icon
					as={IoCheckmarkCircle}
					color={'green.500'}
					fontSize={'4xl'}
				/>
			</Box>
			<Text color={'gray.700'}>
				Welcome to founderpad. An email has been sent to you with
				instructions on how to compelte your set up.
				<br />
				<br />
				Please check your junk folder if not received.
			</Text>
			<PrimaryLink title={'Go to the login page'} href="/login">
				Go to login
			</PrimaryLink>
		</AuthLayout>
	);
};

export default Register;
