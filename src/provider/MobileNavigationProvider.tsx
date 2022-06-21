import MobileNavigationContext from '@/context/MobileNavigationContext';
import React, { useCallback, useState } from 'react';

const MobileNavigationProvider = ({
	children
}: {
	children: React.ReactNode;
}): any => {
	const [isOpen, setOpen] = useState(false);
	const onToggle = useCallback(() => setOpen(!isOpen), [isOpen]);

	const value = {
		isOpen,
		onToggle
	};

	return (
		<MobileNavigationContext.Provider value={value}>
			{children}
		</MobileNavigationContext.Provider>
	);
};

export default MobileNavigationProvider;
