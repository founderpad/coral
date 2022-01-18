import { createContext } from 'react';
import { TIdeaQuery } from './../../generated/api';

const IdeaContext = createContext({
	data: {} as TIdeaQuery,
	setData: (_idea: TIdeaQuery) => {}
});

export default IdeaContext;
