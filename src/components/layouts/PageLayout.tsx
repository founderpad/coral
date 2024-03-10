import { BoxProps } from '@chakra-ui/layout';
import { Box, StackProps } from '@chakra-ui/react';
import { PageHeader } from '@/components/shared';
import React from 'react';
import { StackLayout } from '.';

type Props = Omit<BoxProps, 'border'> & {
	title?: string;
	subtitle?: React.ReactNode;
	fixedHeader?: boolean;
	action?: React.ReactNode;
	back?: boolean;
	position?: StackProps['position'];
	spacing?: StackProps['spacing'];
};

const PageLayout = (props: Props) => {
	const {
		fixedHeader,
		title,
		subtitle,
		action,
		children,
		p = 4,
		back = false,
		position,
		letterSpacing,
		spacing = 8,
		...rest
	} = props;
	const headerProps = {
		fixedHeader,
		title,
		subtitle,
		action,
		back,
		position
	};

	return (
		<StackLayout
			{...rest}
			spacing={spacing}
			w="full"
			rounded="md"
			flex={1}
			borderWidth={{ base: 0, xl: '1px' }}
			borderColor="fpLightGrey.900"
		>
			{title && <PageHeader {...headerProps} />}
			<Box
				as="main"
				display="flex"
				flex={1}
				w="full"
				flexDirection="column"
				p={p}
				css={{
					'> *:first-of-type': {
						width: '100%'
					}
				}}
			>
				{children}
			</Box>
		</StackLayout>
	);
};

export default PageLayout;
