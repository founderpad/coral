import { EditButton } from 'components/buttons';
import { Label } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import React, { memo } from 'react';

export const TitleEditAction = memo(
	({
		title,
		onClick
	}: {
		title: string;
		onClick?: () => void;
	}): JSX.Element => (
		<FlexLayout
			justifyContent={'space-between'}
			alignItems={'center'}
			w={'full'}
		>
			<Label
				label={title}
				color={'black'}
				fontSize={'lg'}
				fontWeight={'semibold'}
			/>

			{onClick && <EditButton onClick={onClick} aria-label={'Edit'} />}
		</FlexLayout>
	)
);
