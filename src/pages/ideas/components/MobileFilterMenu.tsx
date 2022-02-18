import { PrimaryButton } from '@components/buttons';
import { IoChevronDownSharp } from '@components/icons';
import ModalDrawerContext from '@context/ModalDrawerContext';
import React, { useContext } from 'react';

const MobileFilterMenu = ({
	title,
	children
}: {
	title: string;
	children: React.ReactNode;
}) => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = () => {
		setModalDrawer({
			title: `Search ${title}`,
			isOpen: true,
			body: children,
			noBtnLabel: 'Cancel',
			yesBtnLabel: 'Search',
			yesBtnColor: 'fpPrimary',
			hideFooter: true
		});
	};

	return (
		<PrimaryButton
			name={'open-ideas-search-mobile-button'}
			display={{ base: 'flex', md: 'none' }}
			variant={'outline'}
			onClick={onClick}
			size={'xs'}
			rightIcon={<IoChevronDownSharp />}
		>
			Search
		</PrimaryButton>
	);
};

export default MobileFilterMenu;
