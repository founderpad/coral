import { BoxProps } from '@chakra-ui/layout';
import { Box, StackProps } from '@chakra-ui/react';
import { PageHeader } from '@/components/shared';
import React from 'react';
import { StackLayout } from './StackLayout';

type Props = Omit<BoxProps, 'border'> & {
	title: string;
	subtitle?: React.ReactNode;
	fixedHeader?: boolean;
	action?: React.ReactNode;
	back?: boolean;
	border?: boolean;
	position?: StackProps['position'];
};

export const PageLayout = (props: Props) => {
	const {
		fixedHeader,
		title,
		subtitle,
		action,
		children,
		p = 6,
		back = false,
		border = true,
		position,
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
			spacing={8}
			w="full"
			rounded="md"
			flex={1}
			borderWidth={border ? { base: 0, lg: 1 } : 0}
			borderColor="fpLightGrey.900"
		>
			<PageHeader {...headerProps} />
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
