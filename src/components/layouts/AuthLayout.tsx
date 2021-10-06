import { Image } from '@chakra-ui/image';
import { Heading } from '@chakra-ui/layout';
import WindowTitle from 'components/shared/WindowTitle';
import React from 'react';
import StackLayout from './StackLayout';

interface Props {
	header: string;
	children: React.ReactNode;
	title: string;
	subheader?: string;
}

const AuthLayout = ({ header, children, title }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<WindowTitle title={title} />
			<StackLayout
				minW={{ base: 'full', sm: '450px' }}
				maxW={{ base: 'full', sm: '600px' }}
				borderColor={'gray.100'}
				p={8}
				boxShadow={{ sm: 'sm' }}
				borderWidth={{ sm: '1px' }}
				m={'auto'}
			>
				<Image
					src="/logo.svg"
					mx="auto"
					alt="logo"
					height="40px"
					width="200px"
				/>
				<Heading
					textAlign={'center'}
					fontSize={'2xl'}
					color={'gray.600'}
				>
					{header}
				</Heading>
				{children}
			</StackLayout>
		</React.Fragment>
	);
};

export default AuthLayout;
