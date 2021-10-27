import { Text } from '@chakra-ui/layout';
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
		<Text
			fontSize={'xs'}
			d={'flex'}
			textAlign={'end'}
			color={'gray.400'}
			ml={'auto'}
		>
			{offset + 1} - {offset + pageSize} of {total}
			<PointSeparator />
			Page {page} of {Math.ceil((total || 0) / limit)}
		</Text>
	);
});
