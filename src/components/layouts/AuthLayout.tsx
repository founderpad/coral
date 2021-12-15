import { Image } from '@chakra-ui/image';
import { Heading } from '@chakra-ui/layout';
import { DocumentTitle } from 'components/shared';
import React from 'react';
import { StackLayout } from './StackLayout';

interface Props {
	header: string;
	children: React.ReactNode;
	title: string;
	subheader?: string;
}

const AuthLayout = ({ header, children, title }: Props): JSX.Element => (
	<React.Fragment>
		<DocumentTitle title={title} />
		<StackLayout
			minW={{ base: 'full', sm: '400px' }}
			maxW={{ base: 'full', sm: '300px' }}
			borderColor={'gray.100'}
			p={8}
			boxShadow={{ sm: 'sm' }}
			borderWidth={{ sm: '1px' }}
			m={'auto'}
			bg={'white'}
			flex={{ base: 1, sm: 'none' }}
			justifyContent={'center'}
			id={'auth-container'}
		>
			<Image
				src="/founderpad-text.svg"
				mx="auto"
				alt="logo"
				height="30px"
			/>
			<Heading
				textAlign={'center'}
				fontWeight={'normal'}
				fontSize={'md'}
				color={'black'}
				pb={8}
			>
				{header}
			</Heading>
			{children}
		</StackLayout>
	</React.Fragment>
);

export default AuthLayout;
