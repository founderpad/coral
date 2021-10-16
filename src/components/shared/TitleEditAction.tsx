import { Flex } from '@chakra-ui/layout';
import { EditButton } from 'components/buttons';
import { SubheadingText } from 'components/heading';
import React, { memo } from 'react';

export const TitleEditAction = memo(
	({
		title,
		onClick
	}: {
		title: string;
		onClick?: () => void;
	}): JSX.Element => {
		return (
			<Flex
				justifyContent={'space-between'}
				alignItems={'center'}
				w={'full'}
			>
				{/* <Heading
					color={'fpGrey.900'}
					fontSize={{ base: 'md', md: 'large' }}
				>
					{title}
				</Heading> */}
				<SubheadingText label={title} color={'fpGrey.900'} />

				{onClick && (
					<EditButton onClick={onClick} aria-label={'Edit'} />
				)}
			</Flex>
		);
	}
);
