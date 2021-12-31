import { GoBackButton } from 'components/buttons';
import { SubheadingText } from 'components/heading';
import { BoxLayout } from 'components/layouts';
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
		<BoxLayout
			display={'flex'}
			flex={1}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			h={'full'}
		>
			<SubheadingText size={'sm'}>
				No {label ?? 'results'}.
			</SubheadingText>
			{back && <GoBackButton />}
		</BoxLayout>
	</React.Fragment>
);
