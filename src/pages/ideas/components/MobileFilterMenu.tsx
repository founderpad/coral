import { PrimaryButton } from '@components/buttons';
import { IoChevronDownSharp } from '@components/icons';
import ModalDrawerContext from '@context/ModalDrawerContext';
import React, { useContext } from 'react';
import IdeasSearchForm from './IdeasSearchForm';

const MobileFilterMenu = () => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = () => {
		setModalDrawer({
			title: 'Search ideas',
			isOpen: true,
			body: <IdeasSearchForm />,
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
			size={'xs'}
			variant={'outline'}
			onClick={onClick}
			rightIcon={<IoChevronDownSharp />}
		>
			Search
		</PrimaryButton>
	);
};

export default MobileFilterMenu;
