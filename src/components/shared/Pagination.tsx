import { ButtonGroup } from '@chakra-ui/react';
import { CancelButton } from '@components/buttons';
import { IoChevronBackSharp, IoChevronForwardSharp } from '@components/icons';
import { useQueryParam } from '@hooks/util';
import { useRouter } from 'next/router';

type Props = {
	pathname: string;
	pagesCount: number;
	onPageChange: (page: string) => void;
};

export const Pagination = (props: Props) => {
	const { pathname, pagesCount, onPageChange } = props;
	const router = useRouter();
	const page = parseInt(useQueryParam('page'));
	// const buttonSize = useBreakpointValue({ base: 'sm', sm: 'md' });

	const pagesArray = Array.from(
		new Array(Math.ceil(pagesCount)),
		(_x, i) => i + 1
	);

	return (
		<ButtonGroup
			justifyContent={'space-between'}
			w={'full'}
			pt={8}
			// px={{ base: 0, sm: 6 }}
		>
			<CancelButton
				label={'Previous'}
				onClick={() => onPageChange((page - 1).toString())}
				variant={'ghost'}
				leftIcon={<IoChevronBackSharp />}
				isDisabled={page <= 1}
				aria-label={'Previous page of results'}
				title={'Previous page of results'}
			/>
			<ButtonGroup display={{ base: 'none', sm: 'flex' }}>
				{pagesArray.map((p) => (
					<CancelButton
						label={p.toString()}
						key={p}
						title={`Page ${p} of results`}
						background={page === p ? 'gray.300' : 'transparent'}
						onClick={() =>
							router.push(
								{
									pathname,
									query: { ...router.query, page: p }
								},
								undefined,
								{
									shallow: true
								}
							)
						}
					/>
				))}
			</ButtonGroup>
			<CancelButton
				label={'Next'}
				onClick={() => onPageChange((page + 1).toString())}
				variant={'ghost'}
				rightIcon={<IoChevronForwardSharp />}
				isDisabled={page >= pagesCount || page < 1}
				aria-label={'Next page of results'}
				title={'Next page of results'}
			/>
		</ButtonGroup>
	);
};
