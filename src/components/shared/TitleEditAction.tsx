import { Flex } from '@chakra-ui/layout';
import { EditButton } from 'components/buttons';
import { Label } from 'components/labels';
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
				<Label
					label={title}
					color={'black'}
					fontSize={'lg'}
					fontWeight={'semibold'}
				/>

				{onClick && (
					<EditButton onClick={onClick} aria-label={'Edit'} />
				)}
			</Flex>
		);
	}
);
