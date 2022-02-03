import { Heading } from '@chakra-ui/layout';
import { EditButton } from '@components/buttons';
import { FlexLayout } from '@components/layouts';
import React, { memo } from 'react';

export const TitleEditAction = memo(
	({ title, onClick }: { title: string; onClick?: () => void }) => (
		<FlexLayout
			justifyContent={'space-between'}
			alignItems={'center'}
			w={'full'}
		>
			<Heading size={'h6'} fontSize={'md'} color={'gray.900'}>
				{title}
			</Heading>

			{onClick && <EditButton onClick={onClick} aria-label={'Edit'} />}
		</FlexLayout>
	)
);
