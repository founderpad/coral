import { createContext } from 'react';
const DrawerContext = createContext({
	drawer: {
		isOpen: false,
		title: undefined,
		body: null,
		handler: () => null,
		noBtnLabel: '',
		yesBtnLabel: '',
		yesBtnColor: undefined,
		hideFooter: false
	},
	setDrawer: {} as any
});
export default DrawerContext;
