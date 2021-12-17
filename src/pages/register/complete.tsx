import { Box } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { Label } from 'components/labels';
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
					fontSize={'5xl'}
				/>
			</Box>

			<Label>
				Welcome to founderpad! 🎉
				<br />
				<br />
				We have sent you a welcome email to get started.
				<br />
				Please check your junk folder if not received.
				<br />
				<br />
				Go ahead and login to create your first idea!
			</Label>
			<PrimaryLink
				title={'Go to the login page'}
				href="/login"
				fontSize={'sm'}
			>
				Go to login
			</PrimaryLink>
		</AuthLayout>
	);
};

export default Register;
