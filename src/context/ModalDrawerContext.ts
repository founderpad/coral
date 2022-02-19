import { createContext } from 'react';
const ModalDrawerContext = createContext({
	modalDrawer: {
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
		actions: null,
		action: undefined
	},
	setModalDrawer: {} as any
});
export default ModalDrawerContext;
