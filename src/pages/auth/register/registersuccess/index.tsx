import { Icon } from '@chakra-ui/react';
import { Label } from '@components/labels';
import { StackLayout } from '@components/layouts';
import AuthLayout from '@components/layouts/AuthLayout';
import { PrimaryLink } from '@components/links';
import { decodeString } from '@utils/validators';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { IoRocketSharp } from 'react-icons/io5';

const RegisterSuccess: NextPage = () => {
	const encodedFirstName = (useRouter().query.nm as string) ?? '';

	const firstName = decodeString(encodedFirstName) ?? '';

	return (
		<AuthLayout
			header="Registration complete"
			subheader="Get started by creating an account below"
			title="Register"
		>
			<StackLayout py={4}>
				<Icon
					as={IoRocketSharp}
					fontSize="75px"
					mx="auto"
					color="green.500"
				/>
				<Label fontSize="small" pt={8}>
					Hi {firstName},<br />
					Thanks for signing up to founderpad!
					<br />
					<br />
					We have sent you an email with instructions for you to
					confirm your email address. If it is not in your inbox,
					please check your spam folder.
				</Label>

				<Label
					as="div"
					color="gray.500"
					fontSize="x-small"
					alignSelf="center"
				>
					<PrimaryLink href="/login" title="Link to login">
						Go to login
					</PrimaryLink>
				</Label>
			</StackLayout>
		</AuthLayout>
	);
};

export default RegisterSuccess;
