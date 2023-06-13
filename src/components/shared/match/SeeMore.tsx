import { Button } from '@chakra-ui/react';
import { useState } from 'react';

type SeeMoreLinkProps<T> = {
	limit: number;
	items: T[];
	renderItem: (item: T, index: number) => JSX.Element;
};

const SeeMoreLink = <T,>({ limit, items, renderItem }: SeeMoreLinkProps<T>) => {
	const [showAll, setShowAll] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setShowAll(!showAll);
	};

	if (items.length === 0) {
		return null; // Hide the link if there are no additional items
	}

	const visibleItems = showAll ? items : items.slice(0, limit);

	return (
		<>
			{visibleItems.map((item, index) => renderItem(item, index))}
			{items.length > limit && (
				<Button
					onClick={handleClick}
					ml={2}
					mt={1}
					fontSize="xs"
					cursor="pointer"
					variant="link"
					color="fpPrimary.500"
				>
					{showAll ? 'See less' : 'See all'}
				</Button>
			)}
		</>
	);
};

export default SeeMoreLink;
