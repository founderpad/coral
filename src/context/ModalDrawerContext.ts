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
		hideFooter: false
	},
	setModalDrawer: {} as any
});
export default ModalDrawerContext;
