import { Heading } from '@chakra-ui/layout';
import { HeadingProps } from '@chakra-ui/react';
import { EditButton } from '@components/buttons';
import { FlexLayout } from '@components/layouts';
import React, { memo } from 'react';

export const TitleEditAction = memo(
	({
		title,
		onClick,
		headerProps
	}: {
		title: string;
		onClick?: () => void;
		headerProps?: HeadingProps;
	}) => (
		<FlexLayout
			{...headerProps}
			justifyContent={'space-between'}
			alignItems={'center'}
			flex={1}
		>
			<Heading
				d={'flex'}
				flex={1}
				css={{ whiteSpace: 'normal' }}
				wordBreak={'break-all'}
				noOfLines={1}
				isTruncated
				size={'h6'}
				fontSize={'sm'}
				color={'gray.900'}
			>
				{title}
			</Heading>

			{onClick && <EditButton onClick={onClick} aria-label={'Edit'} />}
		</FlexLayout>
	)
);
