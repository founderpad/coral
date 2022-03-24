import { Heading } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { DocumentTitle } from '@components/shared';
import FounderpadLogo from '@components/shared/FounderpadLogo';
import { useGetAuthUser } from '@hooks/auth';
import { nhost } from '@utils/nhost';
import React, { useEffect } from 'react';
import { FlexLayout } from './FlexLayout';
import { StackLayout } from './StackLayout';

interface Props {
	header: string;
	children: React.ReactNode;
	title: string;
	subheader?: string;
}

const AuthLayout = ({ header, children, title }: Props) => {
	const [getUser] = useGetAuthUser();
	useEffect(() => {
		nhost.auth.onAuthStateChanged((event) => {
			if (event === 'SIGNED_IN') {
				getUser();
				// dispatch(logout());
				// setModalDrawer({
				// 	isOpen: false
				// });
			}
		});
	}, [nhost.auth.onAuthStateChanged]);

	return (
		<React.Fragment>
			<DocumentTitle title={title} />
			<StackLayout
				w={{ base: 'full', sm: '425px' }}
				minH={{ sm: '400px' }}
				borderColor="fpLightGrey.900"
				p={8}
				boxShadow={{ sm: 'sm' }}
				borderWidth={{ sm: '1px' }}
				style={{ margin: 'auto' }}
				bg="white"
				d="flex"
				flex={{ base: 1, sm: 'none' }}
				justifyContent="center"
				id="auth-container"
				rounded="lg"
			>
				<FlexLayout mx="auto" alignItems="center">
					<FounderpadLogo />
					<Tag
						bg="fpPrimary.700"
						color="white"
						textTransform="capitalize"
						fontWeight="medium"
						textAlign="center"
						verticalAlign="center"
						fontSize="sm"
						rounded="sm"
					>
						0.1.0
					</Tag>
				</FlexLayout>
				<Heading
					textAlign="center"
					fontWeight="normal"
					fontSize="md"
					color="black"
					pb={8}
				>
					{header}
				</Heading>

				{children}
			</StackLayout>
		</React.Fragment>
	);
};

export default AuthLayout;
