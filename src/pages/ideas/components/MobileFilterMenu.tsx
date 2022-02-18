import { Button } from '@chakra-ui/react';
import { IoFilterOutline } from '@components/icons';
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
			title: `Filter ${title}`,
			isOpen: true,
			body: children,
			noBtnLabel: 'Cancel',
			yesBtnLabel: 'Search',
			yesBtnColor: 'fpPrimary',
			hideFooter: true
		});
	};

	return (
		<Button
			name={'open-ideas-search-mobile-button'}
			display={{ base: 'flex', md: 'none' }}
			leftIcon={<IoFilterOutline size={'16px'} />}
			size={'sm'}
			fontSize={'xs'}
			variant={'outline'}
			background={'transparent'}
			onClick={onClick}
		>
			Filters
		</Button>
	);
};

export default MobileFilterMenu;
