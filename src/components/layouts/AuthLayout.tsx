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

const AuthLayout = ({ header, children, title }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<DocumentTitle title={title} />
			<StackLayout
				minW={{ base: 'full', sm: '450px' }}
				maxW={{ base: 'full', sm: '600px' }}
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
					height="40px"
				/>
				<Heading
					textAlign={'center'}
					fontWeight={'medium'}
					fontSize={'lg'}
					color={'black'}
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
