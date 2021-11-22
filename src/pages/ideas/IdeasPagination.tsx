import { Pagination } from 'components/shared';
import { useRouter } from 'next/router';
import React from 'react';

const IdeasPagination = ({
	pagesCount
}: {
	pagesCount: number;
}): JSX.Element => {
	const router = useRouter();
	// const page = router.query.page;

	return (
		<Pagination
			// currentPage={0}
			// isDisabled={false}
			onPageChange={(page: string) => {
				router.push(
					{
						pathname: '/ideas',
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

export default IdeasPagination;
