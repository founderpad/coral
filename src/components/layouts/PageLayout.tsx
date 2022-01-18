import { BoxProps } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { PageHeader } from '@components/shared';
import React from 'react';
import { StackLayout } from './StackLayout';

type Props = BoxProps & {
	title: string;
	subtitle?: React.ReactNode;
	fixedHeader?: boolean;
	action?: React.ReactNode;
	back?: boolean;
};

export const PageLayout = (props: Props): JSX.Element => {
	const {
		fixedHeader,
		title,
		subtitle,
		action,
		children,
		p = 4,
		back = false,
		...rest
	} = props;
	const headerProps = { fixedHeader, title, subtitle, action, back };

	return (
		<StackLayout {...rest} spacing={8} w={'full'} flex={1}>
			<PageHeader {...headerProps} />
			<Box
				as={'main'}
				d={'flex'}
				flex={1}
				w={'full'}
				flexDirection={'column'}
				p={p}
				css={{
					'> *:first-child': {
						width: '100%'
					}
				}}
			>
				{children}
			</Box>
		</StackLayout>
	);
};
