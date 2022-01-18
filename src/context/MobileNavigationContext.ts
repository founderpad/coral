import { createContext } from 'react';

const MobileNavigationContext = createContext({
	isOpen: false,
	onToggle: () => {}
});

export default MobileNavigationContext;
