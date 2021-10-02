import { PrimaryButton } from 'components/buttons';
import ModalDrawerContext from 'context/ModalDrawerContext';
import React, { useContext } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import IdeasSearchForm from './IdeasSearchForm';

const MobileFilterMenu = (): JSX.Element => {
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

	return <PrimaryButton label={'Search'} display={{ base: 'flex', md: 'none' }} size={'xs'} variant={'outline'} onClick={onClick} rightIcon={<IoChevronDownSharp />} />
};

export default MobileFilterMenu;
