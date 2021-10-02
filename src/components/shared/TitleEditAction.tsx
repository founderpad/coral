import { Flex, Heading } from '@chakra-ui/layout';
import EditButton from 'components/buttons/iconbuttons/EditButton';
import React, { memo } from 'react';

const TitleEditAction = memo(({
	title,
	onClick
}: {
	title: string;
	onClick?: () => void;
}): JSX.Element => {
	return (
		<Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
			<Heading
				color={'fpGrey.900'}
				fontSize={{ base: 'md', md: 'large' }}
			>
				{title}
			</Heading>
			{onClick && <EditButton onClick={onClick} aria-label={'Edit'} />}
		</Flex>
	);
});

export default TitleEditAction;
