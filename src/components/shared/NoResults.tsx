import { Box } from '@chakra-ui/layout';
import { GoBackButton } from 'components/buttons';
import { SubheadingText } from 'components/heading';
import React from 'react';

type Props = {
	label?: string;
	back?: boolean;
};

/**
 * The @NoResults displays an empty container.
 *
 * @param param0
 * @returns
 */
export const NoResults = ({ label, back }: Props): JSX.Element => (
	<React.Fragment>
		<Box
			display={'flex'}
			flex={1}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			h={'full'}
		>
			<SubheadingText label={`No ${label ?? 'results'}.`} size={'sm'} />
			{back && <GoBackButton />}
		</Box>
	</React.Fragment>
);
