import Icon from '@chakra-ui/icon';
import { HeadingProps } from '@chakra-ui/layout';
import { GoBackButton } from 'components/buttons';
import { SubheadingText } from 'components/heading';
import { VscSearchStop } from 'components/icons';
import { BoxLayout } from 'components/layouts';
import React from 'react';

type Props = {
	label?: string;
	back?: boolean;
	fontSize?: HeadingProps['fontSize'];
};

/**
 * The @NoResults displays an empty container.
 *
 * @param param0
 * @returns
 */
export const NoResults = ({ label, back, fontSize = 'sm' }: Props) => (
	<React.Fragment>
		<BoxLayout
			display={'flex'}
			flex={1}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			h={'full'}
		>
			<Icon
				as={VscSearchStop}
				color={'gray.700'}
				fontSize={'x-large'}
				mb={2}
			/>
			<SubheadingText fontSize={fontSize}>
				No {label ?? 'results'}.
			</SubheadingText>
			{back && <GoBackButton />}
		</BoxLayout>
	</React.Fragment>
);
