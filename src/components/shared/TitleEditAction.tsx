import { Heading } from '@chakra-ui/layout';
import { EditButton } from '@components/buttons';
import { FlexLayout } from '@components/layouts';
import React, { memo } from 'react';

export const TitleEditAction = memo(
	({ title, onClick }: { title: string; onClick?: () => void }) => (
		<FlexLayout
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
