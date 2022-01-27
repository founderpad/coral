import { Heading } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { DocumentTitle } from '@components/shared';
import FounderpadLogo from '@components/shared/FounderpadLogo';
import React from 'react';
import { FlexLayout } from './FlexLayout';
import { StackLayout } from './StackLayout';

interface Props {
	header: string;
	children: React.ReactNode;
	title: string;
	subheader?: string;
}

const AuthLayout = ({ header, children, title }: Props) => (
	<React.Fragment>
		<DocumentTitle title={title} />
		<StackLayout
			minW={{ base: 'full', sm: '400px' }}
			maxW={{ base: 'full', sm: '450px' }}
			borderColor={'gray.100'}
			p={8}
			boxShadow={{ sm: 'sm' }}
			borderWidth={{ sm: '1px' }}
			// m={'auto'}
			style={{ margin: 'auto' }}
			bg={'white'}
			d={'flex'}
			flex={{ base: 1, sm: 'none' }}
			justifyContent={'center'}
			id={'auth-container'}
		>
			<FlexLayout mx={'auto'} alignItems={'center'}>
				<FounderpadLogo />
				<Tag
					bg={'fpPrimary.700'}
					color={'white'}
					textTransform={'capitalize'}
					fontWeight={'medium'}
					textAlign={'center'}
					verticalAlign={'center'}
					fontSize={'sm'}
					rounded={'sm'}
				>
					Beta
				</Tag>
			</FlexLayout>
			<Heading
				textAlign={'center'}
				fontWeight={'normal'}
				fontSize={'md'}
				color={'black'}
				py={4}
			>
				{header}
			</Heading>
			{children}
		</StackLayout>
	</React.Fragment>
);

export default AuthLayout;
