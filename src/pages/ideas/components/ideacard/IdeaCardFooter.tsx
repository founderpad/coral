import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { StackLayout } from 'components/layouts';
import React, { memo } from 'react';
import { IoFlagSharp } from 'react-icons/io5';

const IdeaCardFooter = (): JSX.Element => {
	const onAction = (e) => {
		e.stopPropagation();
		// OR
		e.preventDefault();
	};

	return (
		<StackLayout
			direction={'row'}
			spacing={2}
			// justifyContent={'flex-end'}
			w={'full'}
		>
			<IconButton
				aria-label={'report-button'}
				variant={'unstyled'}
				color={'gray.400'}
				onClick={onAction}
			>
				<Icon as={IoFlagSharp} />
			</IconButton>
			{/* {idea_user?.country && (
				<BaseTag color={'fpPrimary.500'} bg={'white'}>
					{idea_user?.country}
				</BaseTag>
			)}
			<BaseTag color={'fpPrimary.500'} bg={'white'}>
				{field}
			</BaseTag> */}
		</StackLayout>
		// </Flex>
	);
};

export default memo(IdeaCardFooter);
