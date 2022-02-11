import { createContext } from 'react';

const IdeaCycleContext = createContext({
	cachedIdeaIds: [] as Array<string>,
	onSetCachedIdeaIds: (_cachedIdeaIds: Array<string>) => {}
});

export default IdeaCycleContext;
