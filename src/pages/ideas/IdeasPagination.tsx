import PaginationFooter from 'components/shared/Pagination';
import { useRouter } from 'next/router';
import React from 'react';

const IdeasPagination = ({
	pagesCount
}: {
	pagesCount: number;
}): JSX.Element => {
	const router = useRouter();
	// const page = router.query.page;

	// console.log('pages count: ', Math.ceil(pagesCount));
	return (
		<PaginationFooter
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
