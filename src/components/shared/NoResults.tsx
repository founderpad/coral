import { Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import { GoBackButton } from 'components/buttons';
import React from 'react';

/**
 * The @NoResults displays an empty container.
 *
 * @param param0
 * @returns
 */
export const NoResults = ({ label }: { label?: string }): JSX.Element => (
	<React.Fragment>
		<GoBackButton />
		<Box
			display={'flex'}
			flex={1}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			h={'full'}
		>
			<Heading variant={'h3'} size={'md'} color={'fpGrey.700'}>
				No {label ?? 'results'}.
			</Heading>
		</Box>
	</React.Fragment>
);
