import DrawerContext from '@/context/DrawerContext';
import React, { useState } from 'react';

const DrawerProvider = ({
	children,
	...props
}: {
	children: React.ReactNode;
}): any => {
	const [drawer, setDrawer] = useState({
		isOpen: false,
		title: undefined,
		body: null,
		handler: () => null,
		noBtnLabel: '',
		yesBtnLabel: '',
		yesBtnColor: undefined,
		hideFooter: false
	});

	return (
		<DrawerContext.Provider {...props} value={{ drawer, setDrawer }}>
			{children}
		</DrawerContext.Provider>
	);
};

export default DrawerProvider;
