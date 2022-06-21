import DrawerContext from '@/context/DrawerContext';
import React, { useContext } from 'react';
import Drawer from '.';

const BaseDrawer = ({ ...rest }: { children?: React.ReactNode }) => {
	const { drawer, setDrawer } = useContext(DrawerContext);
	const { isOpen, title, body, noBtnLabel } = drawer;

	const closeDrawer = () => {
		setDrawer({
			isOpen: false,
			title: '',
			text: '',
			body: null,
			handler: null,
			yesBtnLabel: '',
			noBtnText: ''
		});
	};

	const onCloseClick = () => closeDrawer();

	return (
		<Drawer
			{...rest}
			isOpen={isOpen}
			title={title}
			onClose={onCloseClick}
			noBtnLabel={noBtnLabel}
			body={body}
		/>
	);
};

export default BaseDrawer;
