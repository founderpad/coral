import { Button } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
import { IoFilterOutline } from '@components/icons';
import ModalDrawerContext from '@context/ModalDrawerContext';
import React, { useCallback, useContext } from 'react';

const MobileFilterMenu = ({
	title,
	children,
	form
}: {
	title: string;
	children: React.ReactNode;
	form: string;
}) => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = useCallback(() => {
		setModalDrawer({
			title: `Filter ${title}`,
			isOpen: true,
			body: children,
			noBtnLabel: 'Cancel',
			action: (
				<SubmitButton
					name={'filter-search-button'}
					form={form}
					label={'Show results'}
				/>
			)
		});
	}, [setModalDrawer]);

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
