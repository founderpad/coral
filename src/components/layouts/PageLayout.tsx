import { BoxProps } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/react';
import PageHeader from 'components/shared/PageHeader';
import React from 'react';

type Props = BoxProps & {
	title: string;
	subtitle?: string;
	fixedHeader?: boolean;
	action?: React.ReactNode;
};

const PageLayout = (props: Props): JSX.Element => {
	const { fixedHeader, title, subtitle, action, children, p, ...rest } = props;
	const headerProps = { fixedHeader, title, subtitle, action };

	return (
		<Flex
			{...rest}
			flex={1}
			h={'full'}
			flexDirection={'column'}
			position={'relative'}
			w={'full'}
		>
			<PageHeader {...headerProps} />
			<Box
				as={'main'}
				d={'flex'}
				flex={1}
				w={'full'}
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

export default PageLayout;
