import { Heading } from '@chakra-ui/layout';
import { DocumentTitle } from '@/components/shared';
import FounderpadLogo from '@/components/shared/FounderpadLogo';
import React from 'react';
import { FlexLayout } from './FlexLayout';
import { StackLayout } from './StackLayout';

interface Props {
	header: string;
	children: React.ReactNode;
	title: string;
}

const AuthLayout = ({ header, children, title }: Props) => {
	return (
		<>
			<DocumentTitle title={title} />
			{/* <div id="fb-root"></div> */}

			<StackLayout
				w={{ base: 'full', sm: '425px' }}
				minH={{ sm: '400px' }}
				borderColor="fpLightGrey.900"
				p={8}
				boxShadow={{ sm: 'sm' }}
				borderWidth={{ sm: '1px' }}
				style={{ margin: 'auto' }}
				bg="white"
				display="flex"
				flex={{ base: 1, sm: 'none' }}
				justifyContent="center"
				id="auth-container"
				rounded="lg"
			>
				<FlexLayout mx="auto" alignItems="center">
					<FounderpadLogo />
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
		</>
	);
};

export default AuthLayout;
