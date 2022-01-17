import { createContext } from 'react';

const MobileNavigationContext = createContext({
	isOpen: false,
	onToggle: () => null
});

export default MobileNavigationContext;
