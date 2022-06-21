import ModalContext from '@/context/ModalContext';
import React, { useState } from 'react';

const ModalProvider = ({
	children,
	...props
}: {
	children: React.ReactNode;
}) => {
	const [modal, setModal] = useState({
		isOpen: false,
		title: undefined,
		body: undefined,
		handler: () => null,
		noBtnLabel: undefined,
		yesBtnLabel: undefined,
		yesBtnColor: undefined,
		actions: undefined
	});

	return (
		<ModalContext.Provider {...props} value={{ modal, setModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
