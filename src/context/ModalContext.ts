import { createContext } from 'react';

const ModalContext = createContext({
	modal: {
		isOpen: false,
		title: undefined,
		body: undefined,
		handler: () => null,
		noBtnLabel: undefined,
		yesBtnLabel: undefined,
		yesBtnColor: undefined,
		actions: undefined
	},
	setModal: {} as any
});
export default ModalContext;
