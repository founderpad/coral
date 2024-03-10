import { Button } from '@chakra-ui/react';
import { SubmitButton } from '@/components/buttons';
import { IoFilterOutline } from '@/components/icons';
import { useModalDrawer } from '@/hooks/util';
import React, { useCallback } from 'react';

const MobileFilterMenu = ({
	title,
	children,
	form
}: {
	title: string;
	children: React.ReactNode;
	form: string;
}) => {
	const { openModalDrawer } = useModalDrawer();

	const onClick = useCallback(() => {
		openModalDrawer({
			title: `Filter ${title}`,
			action: (
				<SubmitButton
					name="filter-search-button"
					form={form}
					label="Show results"
					title="Filter ideas"
				/>
			),
			body: children,
			showFooter: false
		});
	}, [openModalDrawer, children, form, title]);

	return (
		<Button
			name="open-ideas-search-mobile-button"
			display={{ base: 'flex', md: 'none' }}
			leftIcon={<IoFilterOutline size="16px" />}
			size="sm"
			fontSize="xs"
			variant="outline"
			background="transparent"
			onClick={onClick}
		>
			Filters
		</Button>
	);
};

export default MobileFilterMenu;
