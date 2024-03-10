import Icon from '@chakra-ui/icon';
import { HeadingProps } from '@chakra-ui/layout';
import { GoBackButton } from '@/components/buttons';
import { SubheadingText } from '@/components/heading';
import { VscSearchStop } from '@/components/icons';
import { BoxLayout } from '@/components/layouts';
import React from 'react';

interface Props {
	label?: string | JSX.Element;
	back?: boolean;
	fontSize?: HeadingProps['fontSize'];
}

/**
 * The @NoResults displays an empty container.
 *
 * @param param0
 * @returns
 */
const NoResults = ({
	label = 'results',
	back = true,
	fontSize = 'sm'
}: Props) => {
	return (
		<BoxLayout
			flex={1}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			display="flex"
		>
			<Icon
				as={VscSearchStop}
				color="fpGrey.700"
				fontSize="x-large"
				mb={2}
			/>
			{typeof label === 'string' ? (
				<SubheadingText fontSize={fontSize} color="fpGrey.700">
					No {label ?? 'results'}
				</SubheadingText>
			) : (
				label
			)}
			{back && <GoBackButton />}
		</BoxLayout>
	);
};

export default NoResults;
