import { BoxProps } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/react';
import { PageHeader } from 'components/shared';
import React from 'react';

type Props = BoxProps & {
	title: string;
	subtitle?: React.ReactNode;
	fixedHeader?: boolean;
	action?: React.ReactNode;
};

export const PageLayout = (props: Props): JSX.Element => {
	const { fixedHeader, title, subtitle, action, children, p, ...rest } =
		props;
	const headerProps = { fixedHeader, title, subtitle, action };

	return (
		<Flex {...rest} flexDirection={'column'} w={'full'}>
			<PageHeader {...headerProps} />
			<Box
				as={'main'}
				d={'flex'}
				flex={1}
				w={'full'}
				flexDirection={'column'}
				p={p ?? { base: 4 }}
				css={{
					'> *:first-child': {
						width: '100%'
					}
				}}
			>
				{children}
			</Box>
		</Flex>
	);
};
