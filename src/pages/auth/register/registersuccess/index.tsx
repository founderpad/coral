import { Icon } from '@chakra-ui/react';
import BaseHeading from '@components/heading/BaseHeading';
import { Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
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
			<StackLayout>
				<Icon
					as={IoRocketSharp}
					fontSize="100px"
					mx="auto"
					color="green.500"
					pb={8}
				/>
				<FlexLayout flexDirection="column">
					<BaseHeading size="sm" pb={0}>
						Hey {firstName},
					</BaseHeading>
					<Label fontSize="small">
						Thanks for signing up to founderpad
					</Label>
				</FlexLayout>

				<Label fontSize="small">
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
