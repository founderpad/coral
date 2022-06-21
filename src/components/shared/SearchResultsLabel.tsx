import { TextProps } from '@chakra-ui/react';
import { Label } from '@/components/labels';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { PointSeparator } from './Separators';

type TSearchResultsLabel = {
	pageSize: number;
	limit: number;
	total: number;
	labelProps?: TextProps;
};

export const SearchResultsLabel = memo((props: TSearchResultsLabel) => {
	const { pageSize, limit, total, labelProps } = props;
	const page = useRouter().query.page;

	const offset = (parseInt(page as string) - 1) * limit;

	return (
		<Label
			{...labelProps}
			color="fpGrey.500"
			fontSize="x-small"
			alignSelf="flex-end"
		>
			{total === 0 ? (
				'0 - 0 of 0'
			) : (
				<>
					{offset + 1} - {offset + pageSize} of {total}
				</>
			)}
			<PointSeparator small />
			Page {total > 0 ? page : 0} of {Math.ceil((total || 0) / limit)}
		</Label>
	);
});
