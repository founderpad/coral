import { Pagination } from '@components/shared';
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
	// const page = router.query.page;

	return (
		<Pagination
			// currentPage={0}
			// isDisabled={false}
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
