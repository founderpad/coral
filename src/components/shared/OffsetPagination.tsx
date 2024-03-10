import { Pagination } from '@/components/shared';
import { useRouter } from 'next/router';
import React from 'react';

const OffsetPagination = ({
	pagesCount,
	pathname
}: {
	pagesCount: number;
	pathname: string;
}) => {
	const router = useRouter();

	return (
		<Pagination
			pathname={pathname}
			onPageChange={(page: string) => {
				router.push(
					{
						pathname,
						query: { ...router.query, page }
					},
					undefined,
					{
						shallow: true
					}
				);
			}}
			pagesCount={pagesCount}
		/>
	);
};

export default OffsetPagination;
