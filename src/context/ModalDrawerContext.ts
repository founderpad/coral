import { createContext } from 'react';
const ModalDrawerContext = createContext({
	modalDrawer: {
		isOpen: false,
		title: '',
		body: '',
		noBtnLabel: '',
		removePadding: false,
		width: undefined,
		size: undefined,
		action: undefined,
		showFooter: false
	},
	setModalDrawer: {} as any
});
export default ModalDrawerContext;
