import ModalDrawerContext from '@context/ModalDrawerContext';
import React, { useState } from 'react';

const ModalDrawerProvider = ({
	children,
	...props
}: {
	children: React.ReactNode;
}): any => {
	const [modalDrawer, setModalDrawer] = useState({
		isOpen: false,
		title: '',
		body: '',
		handler: () => null,
		noBtnLabel: '',
		yesBtnLabel: '',
		yesBtnColor: '',
		hideFooter: false,
		removePadding: false,
		width: undefined,
		size: undefined,
		actions: null
	});

	return (
		<ModalDrawerContext.Provider
			{...props}
			value={{ modalDrawer, setModalDrawer }}
		>
			{children}
		</ModalDrawerContext.Provider>
	);
};

export default ModalDrawerProvider;
