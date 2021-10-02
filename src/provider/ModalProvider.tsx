import React, { useState } from 'react';
import ModalContext from 'context/ModalContext';

const ModalProvider = ({
	children,
	...props
}: {
	children: React.ReactNode;
}): any => {
	const [modal, setModal] = useState({
		isOpen: undefined,
		title: undefined,
		body: undefined,
		handler: undefined,
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
