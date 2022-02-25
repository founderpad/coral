import Router from 'next/router';

export type TParam = {
	[key: number]: string | string[] | boolean;
};

/**
 * Toggle whether to do a router push or replace
 * @param pathname
 * @param query
 * @param replace
 * @param shallow
 */
const navigateTo = (
	pathname?: string,
	query?: any,
	replace = false,
	shallow = true
) => {
	Router[replace ? 'replace' : 'push'](
		{
			pathname,
			query: { ...Router.query, ...query }
		},
		undefined,
		{
			shallow
		}
	);
};

/** Remove a single param */
const deleteParam = <T extends TParam>(
	key: keyof T & string,
	navigate = true
) => {
	if (Router.query[key]) {
		delete Router['query'][key];
		if (navigate) navigateTo();
	}
};

/** Remove multiple params */
const deleteParams = <T extends TParam>(values: T) => {
	console.log('values: ', values);
	for (const [key, value] of Object.entries(values)) {
		if (!value) {
			console.log('k,v: ', key + ' = ' + value);
			delete Router['query'][key];
		}
	}

	navigateTo();
};

/** Build parameters for the URL */
const buildParams = <T extends TParam>(values: T) => {
	const queryParams = JSON.parse(JSON.stringify(values));

	for (const [key, value] of Object.entries(queryParams)) {
		if (!value) delete queryParams[key];
	}

	navigateTo(undefined, { ...queryParams });
};

export { navigateTo, deleteParam, deleteParams, buildParams };
