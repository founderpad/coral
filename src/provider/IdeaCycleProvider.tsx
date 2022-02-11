import IdeaCycleContext from '@context/IdeaCycleContext';
import React, { useState } from 'react';

const IdeaCycleProvider = ({
	children
}: {
	children: React.ReactNode;
}): any => {
	const [cachedIdeaIds, setCachedIdeaIds] = useState<Array<string>>([]);

	const onSetCachedIdeaIds = (ids: Array<string>) => {
		setCachedIdeaIds(ids);
	};

	const value = {
		cachedIdeaIds,
		onSetCachedIdeaIds
	};

	return (
		<IdeaCycleContext.Provider value={value}>
			{children}
		</IdeaCycleContext.Provider>
	);
};

export default IdeaCycleProvider;
