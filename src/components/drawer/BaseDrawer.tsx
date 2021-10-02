import DrawerContext from 'context/DrawerContext';
import React, { useContext } from 'react';
import Drawer from '.';

const BaseDrawer = ({
	...rest
}: {
	children?: React.ReactNode;
}): JSX.Element => {
	const { drawer, setDrawer } = useContext(DrawerContext);
	const {
		isOpen,
		title,
		body,
		handler,
		noBtnLabel,
		yesBtnLabel,
		yesBtnColor,
		hideFooter
	} = drawer;

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

	const onCloseClick = () => {
		closeDrawer();
	};

	const onConfirmClick = () => {
		handler?.();
		closeDrawer();
	};

	// return ReactDOM.createPortal(
	return (
		<Drawer
			{...rest}
			isOpen={isOpen}
			title={title}
			yesBtnLabel={yesBtnLabel}
			onConfirm={onConfirmClick}
			onClose={onCloseClick}
			noBtnLabel={noBtnLabel}
			body={body}
			yesBtnColor={yesBtnColor}
			hideFooter={hideFooter}
		/>
		// document.getElementById('portal')
	);
};

export default BaseDrawer;
