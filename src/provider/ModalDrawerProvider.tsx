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
		noBtnLabel: '',
		removePadding: false,
		width: undefined,
		size: undefined,
		action: undefined
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
