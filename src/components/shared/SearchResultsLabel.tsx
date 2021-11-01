import { Label } from 'components/labels';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { PointSeparator } from './Separators';

type TSearchResultsLabel = {
	pageSize: number;
	limit: number;
	total: number;
};

export const SearchResultsLabel = memo((props: TSearchResultsLabel) => {
	const { pageSize, limit, total } = props;
	const page = useRouter().query.page;

	const offset = (parseInt(page as string) - 1) * limit;

	return (
		<Label
			fontSize={'xs'}
			d={'flex'}
			textAlign={'end'}
			color={'gray.500'}
			ml={'auto'}
		>
			{offset + 1} - {offset + pageSize} of {total}
			<PointSeparator small />
			Page {page} of {Math.ceil((total || 0) / limit)}
		</Label>
	);
});
